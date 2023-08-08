let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

document.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x-10+"px";
    crsr.style.top = dets.y-10+"px";
    blur.style.left = dets.x - 225 +"px";
    blur.style.top = dets.y - 225 +"px";
});

let navItems = document.querySelectorAll("#nav p");

navItems.forEach(e => {
    e.addEventListener("mouseenter", () =>{
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    e.addEventListener("mouseleave", () =>{
        crsr.style.scale = 1;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "#95c11e" ;
    })
});


let cardItems = document.querySelectorAll(".card");

cardItems.forEach(e => {
    e.addEventListener("mouseenter", () =>{
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    e.addEventListener("mouseleave", () =>{
        crsr.style.scale = 1;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "#95c11e" ;
    })
});

gsap.to("#nav", {
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

gsap.from("#about-us img, #about-us-in", {
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    },
});

gsap.from("#page2 .card", {
    scale:0.5,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    },
});

gsap.from("#quote-left", {
    x:-90,
    y:-75,
    scrollTrigger:{
        trigger:"#quote-left",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 60%",
        scrub:4,
    }
});

gsap.from("#quote-right", {
    x:88,
    y:70,
    scrollTrigger:{
        trigger:"#quote-left",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 60%",
        scrub:4,
    }
});

gsap.from("#elem", {
    y:50,
    scrollTrigger:{
        trigger:"#elem",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
});