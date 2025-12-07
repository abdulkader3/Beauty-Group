// Dropdown hover behavior
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('pagesDropdown');
    const dropdownMenu = document.querySelector('.PageMenu');
    
    if (dropdownToggle && dropdownMenu) {
        // Prevent dropdown from toggling on click
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
});

// Sticky Navbar Scroll Behavior by SHANTO
window.addEventListener('scroll', function() {
    const stickyNavbar = document.querySelector('.sticky-navbar');
    const mainNavbar = document.querySelector('.navbarMy');
    
    if (stickyNavbar && mainNavbar) {
        // Get the position of the main navbar
        const mainNavbarBottom = mainNavbar.offsetHeight + mainNavbar.offsetTop;
        
        // Show sticky navbar when user scrolls past the main navbar
        if (window.scrollY > mainNavbarBottom) {
            stickyNavbar.classList.add('active');
        } else {
            stickyNavbar.classList.remove('active');
        }
    }
});
