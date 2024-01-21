
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
crsr.style.left = dets.x+"px"
crsr.style.top = dets.y+"px"})



gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scoller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },

});

gsap.from("#about-us, #about-us-in, #about-us-img",{
  y:50,
  opacity: 0,
  duration: 1,
  stragger: 0.4,
  scrollTrigger:{
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end:"top  55%",
    scrub: 3


  }

})

gsap.from(".card",{
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  stragger: 1,
  scrollTrigger:{
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end:"top  65%",
    scrub: 3


  }

})

gsap.from("#colon1",{
  y:-70,
  x: -70,
  scrollTrigger: {
    trigger:"#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  }
})

gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger: {
    trigger:"#colon1",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 4,
  }
})

gsap.from("#page4, h1",{
  y: 50,
  scrollTrigger:{
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 80%",
    end: "top 75%",
    scrub: 3,
  }

})