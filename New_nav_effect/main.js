var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;


window.addEventListener("mousemove",function(dets){
    // console.log(dets);
    // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    // Lets Write with the GSAP 
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration:1,
        ease:Expo
    })
  })

frame.addEventListener("mousemove",function(dets){
    var dim = frame.getBoundingClientRect();
    console.log(dim);
    var xstart=dim.x;
    var xend=dim.x + dim.width;
    var zeroone = gsap.utils.mapRange(xstart, xend, 0,1,dets.clientX)


    // console.log(    gsap.utils.mapRange(xstart, xend, 0,1,dets.clientX)
    // console.log(lerp(-50,50,zeroone));

    gsap.to(circle,{
        scale:8
    })
    gsap.to(".frame span",{
        color:"#fff",
        duration:.4,
        y:"-5vw"
    })
    gsap.to(".frame span",{
        x:lerp(-50,50,zeroone),
        duration:.3
    })
})
frame.addEventListener("mouseleave",function(dets){
    gsap.to(circle,{
        scale:1
    })
    gsap.to(".frame span",{
        color:"black",
        duration:.4,
        y:"0vw"

    })
    gsap.to(".frame span",{
        x:0,
        duration:.3
    })
})