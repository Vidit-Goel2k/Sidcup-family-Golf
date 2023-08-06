let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener('mousemove', function(dets){
    setTimeout(() => {
        crsr.style.left = dets.x-10+"px";
        crsr.style.top = dets.y-10+"px";
    }, 150);
    setTimeout(() => {
        blur.style.left = dets.x - 225 +"px";
        blur.style.top = dets.y - 225 +"px";
    }, 300);
});

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