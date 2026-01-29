// Enhanced Community Gallery Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    
    if (!modal || !modalImg) return;
    
    let currentImageIndex = 0;
    const images = Array.from(document.querySelectorAll('.photo-card img'));
    
    // Open modal on click
    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            currentImageIndex = index;
            openModal(this.src, this.alt);
        });
    });
    
    function openModal(src, alt) {
        modal.style.display = "flex";
        modalImg.src = src;
        captionText.innerHTML = alt || '';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
    
    // Close modal handlers
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === modalImg) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                navigateImage(-1);
            } else if (e.key === 'ArrowRight') {
                navigateImage(1);
            }
        }
    });
    
    function navigateImage(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) currentImageIndex = images.length - 1;
        if (currentImageIndex >= images.length) currentImageIndex = 0;
        
        const newImg = images[currentImageIndex];
        modalImg.src = newImg.src;
        captionText.innerHTML = newImg.alt || '';
    }
    
    // Add navigation arrows
    const leftArrow = document.createElement('button');
    leftArrow.className = 'modal-nav modal-nav-left';
    leftArrow.innerHTML = '&#8249;';
    leftArrow.setAttribute('aria-label', 'Previous image');
    leftArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateImage(-1);
    });
    
    const rightArrow = document.createElement('button');
    rightArrow.className = 'modal-nav modal-nav-right';
    rightArrow.innerHTML = '&#8250;';
    rightArrow.setAttribute('aria-label', 'Next image');
    rightArrow.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateImage(1);
    });
    
    modal.appendChild(leftArrow);
    modal.appendChild(rightArrow);
});
