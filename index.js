window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scr-indicator-bar");

  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = (pageScroll/height)*100;

  indicatorBar.style.width = scrollValue + "%";
})

// Scroll To Top
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function(){
  scrollToTop.classList.toggle("active", window.scrollY > 500)
})

//   Light/Dark Theme        //
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () =>{
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Animation//
let animeee = anime({
    targets: '.icon',
    translateX: 150,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutCirc',
    loop: true
  });
  
//Auto Type
var typed = new Typed(".auto-type", {
    strings: ["Front-end Developer", "Python Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

// TO BE USED
// // Images Overlay 
// $(document).ready(function(){

//   anime({
//     targets: '.home .home-overlay',
//     translateX: 1100,
//     delay: 1000,
//     duration: 1500,
//     easing: 'easeInSine'
//   })
//   anime({
//     targets: '.home .image img',
//     opacity: 1,
//     delay: 1500,
//     duration: 1500,
//     easing: 'easeInSine'
//   })
// })






anime({
  targets: '.line-drawing-demo .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


// anime({
//   targets: '.node',
//   width: '60%', // -> from '28px' to '100%',
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true
// });

var colorsExamples = anime.timeline({
  endDelay: 600,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
})
.add({ targets: '.html',  background: '#483d8b', width: '85%' }, 0)
.add({ targets: '.Jquery',  background: '#483d8b', width: '75%' }, 0)
.add({ targets: '.css',  background: '#483d8b', width: '90%' }, 0)
.add({ targets: '.javascript', background: '#483d8b', width: '70%' }, 0)
.add({ targets: '.node', background: '#483d8b', width: '80%' }, 0)
.add({ targets: '.python', background: '#483d8b', width: '80%' }, 0)
.add({ targets: '.react', background: '#483d8b', width: '70%' }, 0)


//Experience Close Btn
const p_model = document.querySelectorAll(".p-model");
const imgs = document.querySelectorAll(".img-card");
const close = document.querySelectorAll(".fa-xmark");

var modal = function (modalclick) {
  p_model[modalclick].classList.add("active");
}

imgs.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    modal(i);
  });
});

close.forEach((pCloseBtn) => {
  pCloseBtn.addEventListener("click", () => {
    p_model.forEach((pMV) => {
      pMV.classList.remove("active");
    });
  });
});

window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scr-indicator-bar");

  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollheight - document.documentElement.clientHeight;
  const scrollValue = (pageScroll/height)*100;

  indicatorBar.style.width = scrollValue + "%";
})


//Menu BTn
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navbar-div");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
  navigation.classList.remove("active");
});

navItems.forEach((navItem) =>{
  navItem.addEventListener("click", () =>{
    navigation.classList.remove("active");
  })
})

// Scroll Reveal Animations 

ScrollReveal({
  reset: false,
  distance: "30px",
  duration: 2500,
  delay: 100
});

// Target elements and specify options 
ScrollReveal().reveal('.home .personal-data h1', {delay: 500, origin: 'right'});
ScrollReveal().reveal('.home .personal-data .typed', {delay: 600, origin: 'left'});
ScrollReveal().reveal('.home .personal-data .paragraph', {delay: 700, origin: 'right'});
ScrollReveal().reveal('.home .personal-data .button', {delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.home  .image', {delay: 800, origin: 'left'});
ScrollReveal().reveal('.home  .social-media', {delay: 950, origin: 'top', interval:200});
ScrollReveal().reveal('.home  .scroll-down', {delay: 950, origin: 'top'});
// ScrollReveal().reveal('.navbar .navbar-div', {delay: 950, origin: 'left'});
// ScrollReveal().reveal('.navbar .name', {delay: 950, origin: 'right'});