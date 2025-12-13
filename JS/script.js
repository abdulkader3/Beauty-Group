document.addEventListener('DOMContentLoaded', function () {

    /* ========= CAROUSEL ========= */
    const sliderCarousel = document.getElementById('sliderCarousel');
    if (sliderCarousel && typeof bootstrap !== 'undefined') {
        const carousel = new bootstrap.Carousel(sliderCarousel, {
            interval: 5000,
            ride: 'carousel',
            pause: false
        });

        sliderCarousel
            .querySelectorAll('.carousel-indicators button')
            .forEach((btn, i) => {
                btn.addEventListener('click', e => {
                    e.preventDefault();
                    carousel.to(i);
                });
            });
    }

    /* ========= BACK TO TOP ========= */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.style.display = 'none';
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        backToTop.addEventListener('click', () =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
        );
    }

});


