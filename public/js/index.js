import LocomotiveScroll from 'locomotive-scroll';

// Map number x from range [a, b] to [c, d]
const imagesLoaded = require('imagesloaded');

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
