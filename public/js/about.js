

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
  /*document.querySelector('.gallery').addEventListener('mouseenter', ()=>{
      
      document.querySelector('.gallery').addEventListener('mousemove', (ev) => 
      {
        let imgHeight = document.querySelector('.gallery .gallery__item-img:nth-child(1)').offsetHeight;
        let imgWidth = document.querySelector('.gallery .gallery__item-img:nth-child(1)').offsetWidth;
        let cursorWidth = document.querySelector('.custom-cursor').offsetWidth;
        let cursorHeight = document.querySelector('.custom-cursor').offsetHeight;
        let elem = document.querySelector('.gallery').getBoundingClientRect();


          mouse = getMousePos(ev)
          console.log('imgWidth:  ' , imgWidth);
          console.log('imgHeight' , imgHeight)
          gsap.to( '.custom-cursor',{
              x: mouse.x >= (imgWidth + elem.x )  - 1  ?  0 :mouse.x - elem.x ,
              y: mouse.y >= (imgHeight + elem.y) - 1 ?  0 : mouse.y - elem.y,
          })
         console.log(mouse)
         console.log(document.querySelector('.custom-cursor').getBoundingClientRect())
      }
      );
  })
*/
  document.addEventListener('scroll', ()=>{
     let elem = document.querySelector('.gallery').getBoundingClientRect();
     //let y = document.querySelector('.gallery').getBoundingClientRect().left;
     //console.log(elem)
  })
  
  
  });