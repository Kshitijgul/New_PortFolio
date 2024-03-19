gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.09,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var circle = document.querySelector("#circle");
const darkmodebtn = document.querySelector(".dark-mode-btn");
const frames = document.querySelectorAll(".frame");
const framesContainer = document.querySelector("ul");

// ++++++++++++++++++++++++++++++++

window.addEventListener("mousemove",function(dets){
  // console.log(dets);
  // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  // Lets Write with the GSAP 
  gsap.to(circle,{
      x:dets.clientX,
      y:dets.clientY,
      duration:0.6,
      ease:Expo
  })
})


if (frames.length > 0) {
  frames.forEach(frame => {
    frame.addEventListener("mousemove", function(event) {
      const spans = frame.querySelectorAll('span');
      gsap.to(circle,{
        scale:4
    })
      gsap.to(spans, {
        color: "#fff",
        duration: 0.4,
        y: "-5vw"
      });
    });
    frame.addEventListener("mouseleave", function(event) {
      gsap.to(circle,{
        scale:1
    })
      gsap.to(".frame span",{
        color:"black",
        duration:.4,
        y:"0vw"

    })
    })
  });
} else {
  console.error('No elements with class "frame" found.');
}








// +++++++++++++++++++++++++++++++++++++++++++++++
//  Dark Mode Function

// Dark Mode Function
// const darkmodebtn = document.getElementById('dark-mode-toggle');
document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  const body = document.body;

  // Function to toggle dark mode
  function toggleDarkMode() {
      // Check if dark mode is enabled
      const isDarkMode = body.classList.contains('dark-mode');

      // Toggle dark mode class on body
      body.classList.toggle('dark-mode', !isDarkMode);

      // Update localStorage with current dark mode state
      localStorage.setItem('darkMode', !isDarkMode);
  }

  // Function to initialize dark mode based on localStorage
  function initializeDarkMode() {
      // Check if dark mode preference is stored
      const isDarkMode = localStorage.getItem('darkMode') === 'true';

      // Apply dark mode if preference is true
      if (isDarkMode) {
          body.classList.add('dark-mode');
      }
  }

  // Add event listener to toggle dark mode when checkbox is clicked
  if (checkbox) {
      checkbox.addEventListener('change', toggleDarkMode);
  }


  // Initialize dark mode on page load
  initializeDarkMode();
});


// +++++++++++++++++++++++++++++++++++++++++++++++

var typed = new Typed(".text", {
  strings: ["Frontend developer", "Youtuber", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// +++++++++++++++++++++++++++++++++++++++++++++++
var frame1 = document.querySelector(".frame1");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frame1.addEventListener("mousemove",function(dets){
  var dim = frame1.getBoundingClientRect();
  // console.log(dim);
  var xstart = dim.x;
  var xend=dim.x + dim.width;
  var zeroone =gsap.utils.mapRange(xstart,xend,0,1,dets.clientX)
  gsap.to(".frame1 span",{
    x:lerp(-50,50,zeroone),
    duration:.4
  })
})
frame1.addEventListener("mouseleave",function(dets){
  gsap.to(".frame1 span",{
    x:0,
    duration:.4
  })
})





// +++++++++++++++++++++++++++++++++++++++++++++++

document.getElementById("programming-languages").style.display = "block";
    //  Tabs Switching 
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}

// +++++++++++++++++++++++++++++++++++++++++++++++


var tl = gsap.timeline();
tl.to("#loader", {
  top: "-100%",
  borderTopLeftRadius: "70%",
  borderBottomLeftRadius: "70%",
  borderBottomRightRadius: "70%", // Add this line to animate the right side as well
  delay: 0.3,
  duration: 3,
  ease: "power3.out", // Adjust easing for animation curve
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Vertical Menu
const hamburgerMenu = document.querySelector(".hamburger_menu");
const menu = document.querySelector(".menu");
var vertical_menu = document.querySelector(".vertical_menu");


hamburgerMenu.addEventListener("click", function () {
  menu.classList.toggle("openmenu");
  vertical_menu.classList.toggle("openmenu");
});

locoScroll.on("scroll", function (args) {
  // Your scroll-related code here
  var scrollval = args.scroll.y;
  // console.log("Scroll value:", scrollval);

  if (!vertical_menu.classList.contains("openmenu")) {
    if (scrollval > 55) {
      gsap.to(hamburgerMenu, { duration: 0.03, scale: 1, display: "flex" });
    } else {
      gsap.to(hamburgerMenu, { duration: 0.03, scale: 0, display: "none" });
    }
  } else {
    gsap.to(hamburgerMenu, { duration: 0.03, scale: 1, display: "flex" }); // Ensure hammenu is always displayed if vertical_menu is open
  }

  // Update ScrollTrigger
  ScrollTrigger.update();
});

