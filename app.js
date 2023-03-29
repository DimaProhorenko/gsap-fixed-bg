gsap.registerPlugin(ScrollTrigger);

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
