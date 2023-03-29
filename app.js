gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.utils.toArray('.section--bg').forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    })
})

ScrollTrigger.create({
    snap: 1 / 4 // snap whole page to the closest section!
  });

ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
    effects: true,
})

// if (ScrollTrigger.isTouch !== 1) {
    
// }