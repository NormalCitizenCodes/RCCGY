// Navigation Component - Reusable across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Create navigation bar
    const nav = document.createElement('nav');
    nav.className = 'main-nav';
    nav.innerHTML = `
        <div class="nav-container">
            <a href="index.html" class="nav-logo">RC CGY</a>
            <div class="nav-links">
                <a href="index.html" class="nav-link">Home</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="schedule.html" class="nav-link">Schedule</a>
                <a href="community.html" class="nav-link">Community</a>
                <a href="partners.html" class="nav-link">Partners</a>
                <a href="admin.html" class="nav-link">Admin</a>
            </div>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    `;
    
    // Insert nav at the beginning of body
    document.body.insertBefore(nav, document.body.firstChild);
    
    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu toggle
    const navToggle = nav.querySelector('.nav-toggle');
    const navLinks = nav.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});
