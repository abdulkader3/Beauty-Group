// Initialize Carousel with Auto-slide
document.addEventListener('DOMContentLoaded', function() {
    const sliderCarousel = document.getElementById('sliderCarousel');
    
    if (sliderCarousel) {
        // Initialize Bootstrap carousel with auto-slide
        const carousel = new bootstrap.Carousel(sliderCarousel, {
            interval: 5000,  // 5 seconds auto-slide
            ride: 'carousel',
            pause: false  // Keep sliding even on hover
        });
        
        // Handle indicator clicks for instant response
        const indicators = sliderCarousel.querySelectorAll('.carousel-indicators button');
        indicators.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                carousel.to(index);
            });
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

// Sticky Navbar Mobile Toggle by SHANTO
document.addEventListener('DOMContentLoaded', function() {
    const stickyToggler = document.getElementById('stickyNavbarToggler');
    const stickyMenu = document.getElementById('stickyNavbarMenu');
    const stickyDropdowns = document.querySelectorAll('.sticky-nav-item.dropdown');
    
    // Toggle mobile menu
    if (stickyToggler) {
        stickyToggler.addEventListener('click', function() {
            stickyToggler.classList.toggle('active');
            stickyMenu.classList.toggle('show');
        });
    }
    
    // Close menu when clicking on a link
    const stickyLinks = document.querySelectorAll('.sticky-nav-link');
    stickyLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Don't close if it's a dropdown toggle
            if (!this.closest('.dropdown')) {
                stickyToggler.classList.remove('active');
                stickyMenu.classList.remove('show');
            }
        });
    });
    
    // Handle dropdown menus on mobile
    stickyDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.sticky-nav-link');
        
        toggle.addEventListener('click', function(e) {
            const isActive = dropdown.classList.contains('active');
            // Close all other dropdowns
            stickyDropdowns.forEach(d => d.classList.remove('active'));
            // Toggle current dropdown
            if (!isActive) {
                e.preventDefault();
                dropdown.classList.add('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const stickyNav = document.querySelector('.sticky-navbar');
        if (stickyNav && !stickyNav.contains(event.target)) {
            stickyToggler.classList.remove('active');
            stickyMenu.classList.remove('show');
            stickyDropdowns.forEach(d => d.classList.remove('active'));
        }
    });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
})

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});




