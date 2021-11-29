//import  * as Cursor from '../cursor.js';
//import GalleryController from './galleryController.js';

// Map number x from range [a, b] to [c, d]

// Preload images
const preloadImages = (selector = "img") => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

// Preload fonts
const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

// Preload images and fonts
Promise.all([
  preloadImages(".gallery__item-imginner"),
  preloadFonts("lty4rfv"),
]).then(() => {
  // Remove loader (loading class)
  document.body.classList.remove("loading");

  // Initialize custom cursor
  // const cursor = new Cursor(document.querySelector('.cursor'));

  // Initialize the GalleryController
  // new GalleryController(document.querySelector('.gallery'));

  // Mouse effects on all links and others
  [...document.querySelectorAll("a, .gallery__item-img")].forEach((link) => {
    // link.addEventListener('mouseenter', () => cursor.enter());
    // link.addEventListener('mouseleave', () => cursor.leave());
  });
});


/**
 * about page hero && gallery 
 * 
 * */

window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin();

  //var tl = new TimelineLite()
  gsap.to(".hero-image", {
    scrollTrigger: {
      trigger: ".hero-image",
      start: "top top",
      endTrigger: ".hero-subtext",
      end: "top top",
      pin: ".hero-image",
      scrub: true,
      //markers: true,
      pinSpacing: false,
    },
    scale: 0.5,
  });

  const gallery = document.querySelectorAll(".gallery__item");
  console.log(gallery);
  gallery.forEach((item, index) => {
    if (index != gallery.length - 1) {
      const gellaryLength = gallery.length;
      //let rotateValue = index * 5 - Math.floor(gellaryLength / 2) * 5;
      let rotateValue = index % 2 ? -5 : 5;
      gsap.set(item, {
        zIndex: 10 + index,
        opacity: 1,
        transform: `rotate(${rotateValue}deg)`,
      });
    } else {
      gsap.set(item, {
        zIndex: 10 + index,
        opacity: 1,
        transform: `rotate(0deg)`,
      });
    }
  });

  gallery.forEach((clickItem, clickIndex) => {
    clickItem.addEventListener("click", (e) => {
      let currentZIndex = e.target.offsetParent.style.zIndex;
      gsap.to(clickItem, {
        x: 100,
        duration: 0.3,
        opacity: 0,
        ease: "back.out(1.7)",
      });

      gsap.set(clickItem, {
        visibility: "hidden",
        x: 0,
        zIndex: currentZIndex - (gallery.length - 1),
        delay: 0.3,
      });

      gallery.forEach((item, index) => {
        if (clickIndex != index) {
          //console.log(item.style.zIndex)
          gsap.to(item, {
            zIndex: parseInt(item.style.zIndex) + 1,
            opacity: 1,
            visibility: "visible",
            duration: 0.3,
            ease: "back.out(1.7)",
            delay: 0.6,
          });
        }
        console.log(item.style.zIndex);
      });
    });
  });

  // Gets the mouse position
const getMousePos = e => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};
let mouse = {x: 0, y: 0};
document.querySelector('.gallery').addEventListener('mouseenter', ()=>{
    
    document.querySelector('.gallery').addEventListener('mousemove', (ev) => 
    {
        mouse = getMousePos(ev)
        console.log(mouse);
        gsap.to( '.custom-cursor',{
            x: mouse.x,
            y: mouse.y
        })
    }
    );
})

});
