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

// WhatsApp Button Functionality with Modal Toggle
const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) {
  let modalOpen = false;
  
  whatsappBtn.addEventListener("click", () => {
    const supportOverlay = document.getElementById('bioXinSupport');
    if (supportOverlay) {
      modalOpen = !modalOpen;
      if (modalOpen) {
        // Open modal
        supportOverlay.classList.add('active');
        whatsappBtn.innerHTML = '<i class="fas fa-times"></i>';
        whatsappBtn.setAttribute('title', 'Close support window');
      } else {
        // Close modal
        supportOverlay.classList.remove('active');
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        whatsappBtn.setAttribute('title', 'Contact us on WhatsApp');
      }
    }
  });
}

// ========================= BIO-XIN SUPPORT MODAL ========================= //

// BIO-XIN Support Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const supportOverlay = document.getElementById('bioXinSupport');
    const form = document.getElementById('bioXinForm');
    
    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('bioXinName');
            const phoneNumber = '+8801970713237';
            
            if (nameInput.value.trim()) {
                // Create WhatsApp message with the user's name
                const userName = nameInput.value.trim();
                const message = `${userName}`;
                const encodedMessage = encodeURIComponent(message);
                
                // Create WhatsApp link
                const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                
                // Open WhatsApp in new tab
                window.open(whatsappLink, '_blank');
                
                // Reset form and close modal
                form.reset();
                supportOverlay.classList.remove('active');
                const whatsappBtn = document.getElementById('whatsappBtn');
                if (whatsappBtn) {
                    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
                    whatsappBtn.setAttribute('title', 'Contact us on WhatsApp');
                }
                
                console.log('WhatsApp message sent with name:', userName);
            }
        });
    }
});

// Optional: Show modal on page load (uncomment if needed)
// window.addEventListener('load', function() {
//     const supportOverlay = document.getElementById('bioXinSupport');
//     if (supportOverlay) {
//         supportOverlay.style.display = 'flex';
//     }
// });

// ========================= END BIO-XIN SUPPORT MODAL ========================= //
