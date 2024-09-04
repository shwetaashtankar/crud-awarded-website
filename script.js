function locosoco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locosoco();



// cursor

var cursor = document.querySelector("#cursor");

// var main = document.querySelector("#main");

document.addEventListener("mousemove",function(client){
    cursor.style.left=client.x+20+"px";
    cursor.style.top=client.y+20+"px";
})

//The code then updates the left and top styles of the cursor element, 
//adding 20 pixels to both the x and y coordinates. 
//This is done to position the cursor slightly away from the actual mouse position.

//  page5 part


var boxes = document.querySelectorAll("#BOX");
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
      var att = elem.getAttribute("data-image");
        cursor.style.width="18vw";
        cursor.style.height="18vw";
        cursor.style.borderRadius="0";
        cursor.style.backgroundImage= `url(${att})`
    })

    elem.addEventListener("mouseleave", function(){
        cursor.style.width="2%";
        cursor.style.height="3.5%";
        cursor.style.borderRadius="50%";
        cursor.style.backgroundImage= "none"
        
    })
})

// cursor.style.backgroundImage is set to url(${att}) to set the background image of the cursor based on the value of the "data-image" attribute.


// #purple background part


var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})





// GSAP PART

// gsap.from("#text h1,#text h2", {
//     y: 10,
//     rotate: 10,
//     opacity: 0,
//     delay: 0.3,
//     duration: 0.7
// })

var tl = gsap.timeline({
     scrollTrigger:{
        trigger:"#text h1",
        scroller:"#main",
        // markers:true,
        start:"top 28%",
        end:"top 0",
        scrub:2
    }
})

tl.to("#text h1",{
    x:-100,
},"a")

tl.to("#text h2",{
    x:100,
},"a")

tl.to("#page1 video",{
    width:"85%",
},"a")


var tl2 = gsap.timeline({
    scrollTrigger:{
       trigger:"#text h1",
       scroller:"#main",
    //    markers:true,
       start:"top -100%",
       end:"top -110%",
       scrub:3
   }
})

tl2.to("#main",{
    backgroundColor:"#fff"
})


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        // markers:true,
        start: "500% 50%",
        end: "550% 50%",
        scrub: 3
    }
})

tl3.to("#page4",{
    backgroundColor:"#000",
    color:"#fff"
})


//footer


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main",
        markers:true,
        start: "755% 50%",
        end: "800% 50%",
        scrub: 3
    }
})

tl3.to("#footer",{
    backgroundColor:"rgb(181, 86, 181)",
    color:"#000"
})
