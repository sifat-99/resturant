document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        if (navbar.classList.contains('active')) {
            menuToggle.innerHTML =
                `
            <i class="fa-solid fa-times"></i>
            `
        } else {
            menuToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                        <path d="M21 9H1C0.448 9 0 8.552 0 8C0 7.448 0.448 7 1 7H21C21.552 7 22 7.448 22 8C22 8.552 21.552 9 21 9ZM22 1C22 0.448 21.552 0 21 0H1C0.448 0 0 0.448 0 1C0 1.552 0.448 2 1 2H21C21.552 2 22 1.552 22 1ZM22 15C22 14.448 21.552 14 21 14H1C0.448 14 0 14.448 0 15C0 15.552 0.448 16 1 16H21C21.552 16 22 15.552 22 15Z" fill="white"></path>
                    </svg>
            `
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    const popularSwiper = new Swiper('.popularSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-testimonial',
            prevEl: '.swiper-button-prev-testimonial',
        },
        on: {
            slideChangeTransitionStart: function () {
                // Reset progress bar animation
                const bars = document.querySelectorAll('.progress-indicator');
                bars.forEach(bar => {
                    bar.style.transition = 'none';
                    bar.style.width = '0%';
                });
            },
            slideChangeTransitionEnd: function () {
                // Start progress bar animation for active slide
                const activeSlide = document.querySelector('.swiper-slide-active .progress-indicator');
                if (activeSlide) {
                    activeSlide.style.transition = 'width 5s linear';
                    activeSlide.style.width = '100%';
                }
            }
        }
    });

    // Initialize the first progress bar on load
    setTimeout(() => {
        const activeSlide = document.querySelector('.swiper-slide-active .progress-indicator');
        if (activeSlide) {
            activeSlide.style.transition = 'width 5s linear';
            activeSlide.style.width = '100%';
        }
    }, 100);

    /* ==========================================================================
       Functional Form Handling
       ========================================================================== */
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const guests = document.getElementById('guests').value;

            alert(`Thank you, ${name}! Your table for ${guests} on ${date} has been requested. We will confirm via ${email}.`);
            bookingForm.reset();
        });
    }
});
