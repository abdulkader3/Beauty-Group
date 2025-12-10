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
})

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




