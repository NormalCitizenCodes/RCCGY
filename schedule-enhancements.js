// Schedule Page Enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Highlight current day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const todayName = days[today];
    
    const dayCards = document.querySelectorAll('.day-card');
    dayCards.forEach(card => {
        const dayHeader = card.querySelector('.day-header');
        if (dayHeader && dayHeader.textContent.trim() === todayName) {
            card.classList.add('today');
            // Add a visual indicator
            const indicator = document.createElement('div');
            indicator.className = 'today-indicator';
            indicator.textContent = 'Today';
            dayHeader.appendChild(indicator);
        }
    });
    
    // Add smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
