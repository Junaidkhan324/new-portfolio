$(document).ready(function(){
    gsap.to(".banner-text p", 1,{x:0, opacity:1,  stagger:0.3 ,duration:0.1})
    gsap.to(".hello-title .left , .hello-title .right", 1 ,{ height: 51 , width: 6 ,  })
    gsap.to(".hello-title .left", 1,{ x:'-57px', delay:0.6 })
    gsap.to(".hello-title .h-t", 1,{ scaleX:1, delay:0.6 })
    gsap.to(".hello-title .right", 1,{ x:'-3px', delay:0.6 })
    gsap.to(".hello-title .left", 1,{ x:'-7px', delay:1.6 })
    gsap.to(".hello-title .right", 1,{ x:'-53px', delay:1.6})
    gsap.to(".hello-title .left , .hello-title .right",  { height: 2 , delay:0.6})
    gsap.to(".hello-title .left , .hello-title .right",  { width: 76 , delay:1.9})
    gsap.to(".hello-title span",  {opacity:0.3, delay:1.9})

 
    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-inner",
            start: "0 50%",
            end:"0 50%",
            // markers:true,
            toggleActions:"restart none resume reverse",
        }
    })
    tl1.to(".t-b , .v-l ,.skills-ee",2, {y:0, x:0, opacity:1})


    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".works-section",
            start: "0 50%",
            end:"0 50%",
            // markers:true,
            toggleActions:"restart none resume reverse",
        }
    })
    tl2.to(".work-inner h2, .work-card",1, {y:0, x:0, opacity:1, stagger:0.9 })
});



