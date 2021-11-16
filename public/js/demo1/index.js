// import * as Cursor from 'cursor';
import GalleryController from './galleryController.js';

// Map number x from range [a, b] to [c, d]

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

// Preload fonts
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};


// Preload images and fonts
Promise.all([preloadImages('.gallery__item-imginner'), preloadFonts('lty4rfv')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize custom cursor
    // const cursor = new Cursor(document.querySelector('.cursor'));

    // Initialize the GalleryController
    new GalleryController(document.querySelector('.gallery'));

    // Mouse effects on all links and others
    [...document.querySelectorAll('a, .gallery__item-img')].forEach(link => {
        // link.addEventListener('mouseenter', () => cursor.enter());
        // link.addEventListener('mouseleave', () => cursor.leave());
    });
});
