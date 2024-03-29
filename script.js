function init () {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init ()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")

main.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x + "px"
      crsr.style.top = dets.y + "px"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger : ".page1 .one",
        scroller:".main",
       
        start:"  ",
        end:"27% ",
        scrub:3
       }
})
tl.to(".page1 .one", {
x: -70,

},"anime")
tl.to(".page1 .two", {
    x:70
},"anime")
tl.to(".banner .beige", {
    width:"88%"
},"anime")
var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger : ".page1 .one",
      scroller:".main",
     
      start:"top -115%",
      end:"top -120%",
      scrub:3
     }
    })
    tl2.to(".main", {
      backgroundColor:"black"
    })