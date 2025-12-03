const burgerMenuDesk = document.getElementById('burgerMenuDesk');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const deskMenu = document.getElementById('deskMenu');
const deskMenuBurger = document.getElementById('deskMenuBurger');

let scrollPosition = 0;

function openBurger() {
    scrollPosition = window.pageYOffset;
    document.body.classList.add('locked');
    document.body.style.top = `-${scrollPosition}px`;

    openIcon.classList.add('d-none');
    closeIcon.classList.remove('d-none');
    deskMenu.classList.add('desktop-menu__open');
    deskMenuBurger.classList.add('desktop-menu-burger__open');
}

function closeBurger() {
    document.body.classList.remove('locked');
    document.body.style.top = '';

    window.scrollTo(0, scrollPosition);

    openIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
    deskMenu.classList.remove('desktop-menu__open');
    deskMenuBurger.classList.remove('desktop-menu-burger__open');
}

burgerMenuDesk.addEventListener('click', () => {
    if (openIcon.classList.contains('d-none')) {
        closeBurger();
    } else {
        openBurger();
    }
});


document.addEventListener('click', (e) => {
    if (!burgerMenuDesk.contains(e.target) && !deskMenuBurger.contains(e.target)) {
        if (!openIcon.classList.contains('d-none')) return;
        closeBurger();
    }
});

(function () {
    const btn = document.getElementById('toTopBtn');
    if (!btn) return;

    function toggleButton() {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleButton);
    window.addEventListener('load', toggleButton);

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();



document.addEventListener("DOMContentLoaded", function () {
    const newsSwiper = new Swiper('.newsSwiper', {
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,

        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },

        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 50 }
        }
    });

    window.addEventListener('load', () => newsSwiper.update());
    
    const burgerBtn = document.getElementById('burgerMenuDesk');
    burgerBtn.addEventListener('click', () => {
        setTimeout(() => newsSwiper.update(), 500);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    if (typeof MicroModal !== 'undefined') {
        MicroModal.init({
            onShow: modal => console.info(`${modal.id} is shown`),
            onClose: modal => console.info(`${modal.id} is hidden`),
            openTrigger: 'data-micromodal-trigger', 
            closeTrigger: 'data-micromodal-close', 
            openClass: 'is-open', 
            disableScroll: true, 
            disableFocus: false,
            awaitOpenAnimation: false, 
            awaitCloseAnimation: false, 
            debugMode: true 
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.num-counter');
    const speed = 200;

    const animate = (counter) => {
        const value = +counter.getAttribute('data-val');
        const data = +counter.innerText;
        
        const time = value / speed; 

        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(() => animate(counter), 20); 
        } else {
            counter.innerText = value;
        }
    };

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animate(counter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});