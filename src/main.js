
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Scrollbar from 'smooth-scrollbar';
// import LocomotiveScroll from 'locomotive-scroll';

import MouseFollower from "mouse-follower";
// import locomotiveScroll from 'cursor/locomotive-scroll';
gsap.registerPlugin(ScrollTrigger);


//SELECTING THE FORM ELEMENT AND CLEARING INFO AFTER USER SENDS INFO VIA THE FORM
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}
//CALLING THIS FUNCTIONS ONCE THE PAGE HAS LOADED
window.addEventListener('load',()=>{
    pageTimelines()
    changeBgColorOnClick()
    showLInks()
    pageFunctions()
    ourServicesSection()
    showProjectsInfo()
    // initLocomotiveScroll()
    cursorAnimation()
    featuresSectionAnimations()
    
})



function featuresSectionAnimations(){

  
  let sectionOneTl = gsap.timeline()
  
  sectionOneTl.to(".stn-one", {
    scrollTrigger:{
      trigger:".stn-one",
      start:"70% center",
      toggleActions:"play none none reverse",
    },
    opacity:0,
    ease:"Back.easeOut",    
    y:-21,
    // duration:4,
    // clipPath:"inset(0% 0% 100% 0%)"
  })




  let sectionTwoTl = gsap.timeline()
  
  sectionTwoTl.to(".stn-two", {
    scrollTrigger:{
      trigger:".stn-two",
      start:"70% center",
      toggleActions:"play none none reverse",
      // scrub:1,
    },
    y:-21,
    opacity:0,
    ease:"Back.easeOut"
    
    // clipPath:"inset(0% 0% 100% 0%)"
  })




  let sectionThreeTl = gsap.timeline()
  
  sectionThreeTl.to(".stn-three", {
    scrollTrigger:{
      trigger:".stn-three",
      start:"70% center",
      toggleActions:"play none none reverse",
    },
    ease:"ease.backOut", 
    opacity:0,
    y:-21,
    // duration:4,
    // clipPath:"inset(0% 0% 100% 0%)"
  })



}



function ourServicesSection(){

  //WHAT YOU'LL GET SECTION
  //SHOWING CONTENT OF HIDDEN INFO
  const servicesTextWrapper = document.querySelectorAll(".wc-p-div")
  
  servicesTextWrapper.forEach((item)=>{
    item.addEventListener("click", ()=>{
      item.querySelector(".serv-p").classList.toggle("show-p")
      item.querySelector(".serv-arrow").classList.toggle("active-svg")
  
      
    })
  })

}



//FUNC TO CHANGE COLOR OF
//WHAT YOU'LL GET SECTION
//WHEN EACH IS CLICKED
function changeBgColorOnClick(){
  //BESPOKE
  const bespoke = document.querySelector(".bespoke")
  const bl = gsap.timeline({paused:true})
  bl.to(".mi-oud", {backgroundColor:"pink"}).reverse()
  
  bespoke.addEventListener("click", ()=>{
    bl.reversed(!bl.reversed());
  })
  
  //CONVERT
  const convert = document.querySelector(".convert")
  const cl = gsap.timeline({paused:true})
  cl.to(".mi-oud", {backgroundColor:"#efcf27"}).reverse()
  
  convert.addEventListener("click", ()=>{
    cl.reversed(!cl.reversed());
  })
  
  //USER CENTERED
  const user = document.querySelector(".user-centered")
  const ul = gsap.timeline({paused:true})
  ul.to(".mi-oud", {backgroundColor:"#874bf9"}).reverse()
  
  user.addEventListener("click", ()=>{
    ul.reversed(!ul.reversed());
  })
  
  
  //SCALABLE
  const scalable = document.querySelector(".scalable")
  const sl = gsap.timeline({paused:true})
  sl.to(".mi-oud", {backgroundColor:"#a3ec88"}).reverse()
  
  scalable.addEventListener("click", ()=>{
    sl.reversed(!sl.reversed());
  })

}







// INITIALIZING THE LOCOMOTIVE SCROLL
// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     firefoxMultiplier:15,

// });
//   locoScroll.scrollTo();
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

 
// });


// all gsap animations
function pageFunctions(){
  
    ScrollTrigger.defaults({
      // scroller: document.body,
      // scroller: ".smooth-scroll",
    });

   


    

    //animation of texts in about me section
    gsap.from(".fade-in-ams", {
      // opacity:0,
      y:41,
      opacity:.8,
      scrollTrigger:{
          trigger:".about-me-info",
          
          scrub:1,
          start:'top 50%',
          stagger:.1,
          ease:'Power1.easeOut',
          end:'bottom top',

      }

    }) 
   
    //.lst-txt div(more info.vue)
    gsap.fromTo(".lst-txt", 
    {
      x:-321,
  },
  {
      duration:.4,
      x:320,
      scrollTrigger: {
        trigger: ".lst-wrapper",
        ease:"Back.easeOut",
        
        scrub: 1,
        start: "top 50%",
        end: "bottom top",
      },
    });



    //what we offer animation
    gsap.fromTo(".services-p, .services-svg, .services-h",
    {
      opacity:0,
      y:10,
      clipPath: 'inset(100% 0% 0% 0%)',
    },
    {
      opacity:1,
      y:0,
      clipPath: 'inset(0% 0% 0% 0%)',
      scrollTrigger:{
        trigger:".wc-p-div",
        toggleActions:"play none none reverse",
          start:"center center",
          end:"bottom top"
      }
    })

   
    
    //animation for the texts in the about me section
    gsap.fromTo(".about-me-info-paragraph p", 
    {
      backgroundPositionX:"100%",
      clipPath: 'inset(100% 0% 0% 0%)'
    },
    {
      backgroundPositionX: "0%",
      clipPath: 'inset(0% 0% 0% 0%)',
      stagger: 1,
      scrollTrigger: {
        trigger: ".about-me-info-paragraph p",
      //   markers:true,
        scrub: 1,
        start: "top 70%",
        end: "bottom top",
      },
    });
    

    //image in the about me section
    gsap.fromTo("#amimg, .img-b-line", 
    {
      opacity:0,
      y:50,
      // clipPath: 'inset(100% 0% 0% 0%)'
  },
  {
      opacity:1,
      // clipPath: 'inset(0% 0% 0% 0%)',
      y:0,
      ease:"back.easeOut",
      scrollTrigger: {
        trigger: ".about-me-info-paragraph",
      //   markers:true,
        start: "top 70%",
        toggleActions:"play none none reverse",
        end: "bottom top",
      },
    });
    
    //animation for my projects div
    gsap.fromTo(".project-div", 
    {
      opacity:0,
      y:50,
  },
  {
      opacity:1,
      stagger:.3,
      // clipPath: 'inset(0% 0% 0% 0%)',
      y:0,
      ease:"back.easeOut",
      scrollTrigger: {
        trigger: ".mps-wrapper",
        start: "top 35%",
        toggleActions:"play none none reverse",
        end: "bottom top",
      },
    });


   

    

    //marquee text animation
    let tl = gsap.timeline({repeat:-1, defaults:{duration:1, delay:1, ease:"expo.Inout"}})

      tl.to(".marquee-track", {y:"-100%"})
      tl.to(".marquee-track", {y:"-200%"})
      tl.to(".marquee-track", {y:"-300%"})

     
  
}




//FUNCTION TO SHOW MORE INFO ABOUT A CLICKED PROJECT
function showProjectsInfo(){

  document.querySelector(".spotify-project-one").addEventListener("click", ()=>{
    document.querySelector(".spotify-project").classList.add("show-project-info")
  })
  document.querySelector(".exceed-project-two").addEventListener("click", ()=>{
    document.querySelector(".exceed-project").classList.add("show-project-info")
  })
  document.querySelector(".irene-project-five").addEventListener("click", ()=>{
    document.querySelector(".irene-site-project").classList.add("show-project-info")
  })
  // document.querySelector(".kabadi-project-three").addEventListener("click", ()=>{
  //   document.querySelector(".dj-kabadi-project").classList.add("show-project-info")
  // })
  document.querySelector(".afretis-project-four").addEventListener("click", ()=>{
    document.querySelector(".afretis-project").classList.add("show-project-info")
  })



  const closeModalIcon  = document.querySelectorAll(".close-modal-icon")

  closeModalIcon.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
      let parentEl = icon.parentElement.parentElement.parentElement.parentElement
      parentEl.classList.remove("show-project-info")
    })
  })

}




//FUNCTION FOR THE MOUSE FOLLOWER
function cursorAnimation(){
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        el: null,
        opacity:.4,
        container: document.body,
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 2,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
    });

    //HIDING THE CURSOR FOLLOWER WHEN ON INPUTS
    const inputAndTextarea = document.querySelectorAll('.sendMessageSectionInputs');

    inputAndTextarea.forEach((item)=>{
        
        item.addEventListener('mouseenter', () => {
            cursor.hide();
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.show();
        });

    })

    
}




const hamburgerButton = document.querySelector('.menu-btn') //button
const navlinks  = document.querySelector('.page-header-links') //the links container


//FUNCTION TO SHOW THE MENU LINKS WHEN H.BUTTON IS CLICKED
function showLInks(){
    hamburgerButton.addEventListener('click',()=>{

        hamburgerButton.classList.toggle('active');

        navlinks.classList.toggle('show-links')
    })
    
    let navRouterLinks = document.querySelectorAll('.menu-links-items-a') 
    navRouterLinks.forEach((link)=>{
        
        link.addEventListener('click',()=>{
            hamburgerButton.classList.remove('active')
            navlinks.classList.remove('show-links')
    })
})
}

//TIMELINES FOR THE PAGE
function pageTimelines(){
    //TIMLEINE FOR ANIMATING THE TOP SECTION WHEN PAGE LOADS
    let topPageSectionTl = gsap.timeline({defaults:{
        duration:.4,
        ease:'Back.easeOut'
    }})

    topPageSectionTl.fromTo('.main',{opacity:0},{opacity:1,ease:'none'})
            .from('.menu-links-items',{y:-33,opacity:0,stagger:.05,duration:.6}) //the menu links
            .from('.top-page-logo',{opacity:0},'<') //the logoimage
            .fromTo('.menu-btn',{opacity:0},{opacity:1},'<') //the hamburger button
            .from('.fade-in-title',{opacity:0,y:33,stagger:.1,duration:.6}) //animating the names on the top page section

}



// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();