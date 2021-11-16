// import LocomotiveScroll from '../../node_modules/locomotive-scroll/dist/locomotive-scroll.min.js';

// Map number x from range [a, b] to [c, d]
// import { imagesLoaded } from '../../node_modules/imagesloaded/imagesloaded.pkgd.js';

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

const backtopEl = document.querySelector('.backtop');
const headerEl = document.querySelector('#header');

// Preload  images and fonts
Promise.all([preloadImages('.tiles__line-img')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize the Locomotive scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
});
