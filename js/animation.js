$(document).ready(function(){
    gsap.to(".banner-text p", 1,{x:0, opacity:1,  stagger:0.3 ,duration:0.1})
    gsap.to(".hello-title .left , .hello-title .right", 1 ,{ height: 51 , width: 6 ,  })
    gsap.to(".hello-title .left", 1,{ x:'-57px', y:'0', delay:0.6 })
    gsap.to(".hello-title .h-t", 1,{ scaleX:1, delay:0.6 })
    gsap.to(".hello-title .right", 1,{ x:'-3px',y:'0', delay:0.6 })
    gsap.to(".hello-title .left", 1,{ x:'-7px', y:'0', delay:1.6 })
    gsap.to(".hello-title .right", 1,{ x:'-53px',y:'0', delay:1.6})
    gsap.to(".hello-title .left , .hello-title .right",  { height: 2 , delay:0.6})
    gsap.to(".hello-title .left , .hello-title .right",  { width: 76 , delay:1.9})
    gsap.to(".hello-title span",  {opacity:0.3, delay:1.9})
    gsap.to(".t-i",  {scale:1.6, y:-20,   repeat:-1, yoyo:true}) 

 
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
    tl1.to(".range-full",2, {scale:1, opacity:1, stagger:0.3, delay:0.1})


    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".works-section",
            start: "0 50%",
            end:"0 50%",
            // markers:true,
            toggleActions:"restart none resume reverse",
        }
    })
    tl2.to(".work-inner h2, .work-card",1, {y:0, x:0, opacity:1, stagger:0.3 })


    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".project-section",
            start: "-10% 0%",
            end:"-10% 0%",
            // markers:true,
            toggleActions:"restart none resume reverse",
        }
    })
    tl3.to(".project-section .main-heading ", {scale:1, opacity:1 })
    .to(".project-card img ", {y:0, stagger: 0.1 , opacity:1 })
    .to(".project-card .card-body", {y:0, stagger: 0.1 , opacity:1 })
    
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".blog-section",
                start: "0%",
                end:"0% ",
                // markers:true,
                toggleActions:"restart none resume reverse",
            }
        })
        tl4.to(".blog-cont span ,.blog-cont p , .blog-cont h3", {x:0 , duration:0.6,  stagger: 0.2})
    
        let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-section",
                start: "0%",
                end:"0% ",
                // markers:true,
                toggleActions:"restart none resume reverse",
            }
        })
        tl5.to(".form-group ,  .contact-links ul li" , {x:0 , duration:0.6,  stagger: 0.2})
});



