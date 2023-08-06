gsap.to("#header", {
    backgroundColor : "#000000",
    height: "80px" ,
    duration: "0.5",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10 %",
        end: "top -11 %",
        scrub: 1,
    }
});

gsap.to("#main",{
    backgroundColor: "#000000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -80%",
        scrub:2,
    }
});