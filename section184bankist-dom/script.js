// const { doc } = require("prettier");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroll = document.querySelector(".btn--scroll-to")
const section1 = document.querySelector("#section--1")
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll(".operations__tab")
// console.log(tabs);
const tabscontainer = document.querySelector(".operations__tab-container")
const tabcontent = document.querySelectorAll('.operations__content ')
const header = (document.querySelector('.header'));


// console.log(btnsOpenModal);
const openModal = function (e) {
   e.preventDefault(); // Prevent the default form submission behavior
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

// Rest of your code...

const closeModal = function () {
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', function () {
   console.log("close window")
   closeModal()
})
document.addEventListener("keydown", function (e) {
   console.log(e);
   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
   }
})

btnsOpenModal.forEach(function (btn, i) {
   btn.addEventListener('click', openModal)
})
//////////////////////////////////////////////////////////////////
// DOM Manipulation using JS
///////////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const all_buttons = document.getElementsByTagName('button')/*we dont need the . here*///live collections  means an elemnt gets deleted the collection cahnges 
// console.log(all_buttons);
const allsection = document.querySelectorAll('.section')
// console.log(allsection);//here the node list dsent chnages even if we deleted an item of it 
//creating and inserting element 

const message = document.createElement('div');
// message.classList.add('cookie-message');
message.innerHTML =
   'We use cookies for improved functionality and analytics</p> <button class="btn btn--close-cookie">Got it!</button>'
message.style.display = "flex";
message.style.alignItems = "center";
message.style.justifyContent = "space-evenly"
message.style.fontSize = "1.5rem";
message.style.width = "100%"
message.style.fontWeight = "400";
//   header.append(message.cloneNode(true));

header.prepend(message);


//  Deleting the elemnst
document.querySelector(".btn--close-cookie").addEventListener('click', function () {
   // message.remove();
   // another method
   message.parentElement.removeChild(message)
})
//actual Code
btnScroll.addEventListener('click', function (e) {
   const s1coods = section1.getBoundingClientRect()
   console.log(s1coods);
   console.log(e.target.getBoundingClientRect());
   console.log('clickscroll (X/Y)', window.scrollX, scrollY);//how much you have scolled
   console.log('viewport heigth/width', document.documentElement.clientHeight, document.documentElement.clientWidth);//change your console side to check it 
   'Scrolling'
   /* window.scrollTo(
       s1coods.left+window.scrollX,
       s1coods.top+window.scrollY)*///viewport +scroLlby 
   //now instead using an scroll we will use objects 
   /*window.scrollTo({
      left:s1coods.left+window.scrollX,
      top:s1coods.top+window.scrollY,
      behavior:'smooth'//throught this object we can detemie the behaviour too
   })*/
   //new method 
   section1.scrollIntoView({ behavior: 'smooth' })
});
"page navigation"
// document.querySelectorAll('.nav__link').forEach(function(el){
//    el.addEventListener('click',function(e){
//       e.preventDefault();
//       const id=el.getAttribute('href')
//       console.log(id);
//       document.querySelector(id).scrollIntoView({behavior:"smooth"})
//    })
// })'inefficent when there are large number of elemnts'
/**solution is event delegation */
' 1:add eventlistner to an comman parent '
'2:determine which child element triggers the event '
document.querySelector('.nav__links').addEventListener('click', function (e) {
   e.preventDefault()
   console.log(e.target);
   // console.log(e.target.classList());
   //matching stratergy 
   if (e.target.classList.contains('nav__link') && !e.target.classList.contains("btn--show-modal")) {
      const id = e.target.getAttribute('href')
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" })
   }
})
//tabbed components 

tabscontainer.addEventListener('click', function (e) {
   // const clicked=e.target// not working on tab
   const clicked = e.target.closest('.operations__tab')
   // console.log(clicked);
   //guard clause 
   if (!clicked) return;
   //active tab
   tabs.forEach(t => t.classList.remove("operations__tab--active"))
   clicked.classList.add("operations__tab--active")
   //active content 
   tabcontent.forEach(function (content) {
      content.classList.remove("operations__content--active")
   })
   document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})
const handleover = function (e) {
   // console.log(this);
   if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('nav').querySelector('img');
      siblings.forEach((el) => {
         if (el !== e.target) {
            el.style.opacity = this;
         }
         logo.style.opacity = this;
      });
   }
};

// Event delegation
nav.addEventListener('mouseover', handleover.bind(0.5));
nav.addEventListener('mouseout', handleover.bind(1));

//event delegation
nav.addEventListener('mouseover', handleover.bind(0.5))
nav.addEventListener('mouseout', handleover.bind(1))
// const initcoords=section1.getBoundingClientRect()
// console.log(initcoords);
// window.addEventListener('scroll',function(){
//    if(this.window.scrollY>initcoords.top){
//       nav.classList.add('sticky')
//    }
//    else{
//       nav.classList.remove('sticky')
//    }
// })
/*const obscallback=function(entries,observer){
   entries.forEach((entry)=>{
      console.log(entry);
   })
}
const obsoption={
   root:null,//tells us the viewpoert
   threshold:[0.1,0.2,0.8]//how much portion(here  10 %)should be there of section1 to invoke the callback function 
}
const observer=new IntersectionObserver
(obscallback,obsoption)
observer.observe(section1)*/
const sticknav = function (entries) {
   const [entry] = entries;
   // console.log(entry);
   if (!entry.isIntersecting) {
      nav.classList.add('sticky')
   } else {
      nav.classList.remove('sticky')
   }
}
const navheight = nav.getBoundingClientRect().height
// console.log(navheight);
const headerobserver = new IntersectionObserver
   (sticknav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navheight}px`//only 90 % of the actual header
   })
headerobserver.observe(header)
/* reveal the object  */
const all_section = document.querySelectorAll('.section')
const revealSection = function (entries, observer) {
   const [entry] = entries
   // console.log(entry);
   if (!entry.isIntersecting) return;
   entry.target.classList.remove("section--hidden");
   observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver
   (revealSection, {
      root: null,
      threshold: 0.15
   })
all_section.forEach(function (section) {
   sectionObserver.observe(section)
   section.classList.add('section--hidden')
})
/* lazy image loading */
const all_imgs = document.querySelectorAll('img[data-src]')
const lazyloading = function (entries, observer) {
   const [entry] = entries
   // console.log(entry);
   if (!entry.isIntersecting) return;
   entry.target.src = entry.target.dataset.src
   entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img')
   })
   observer.unobserve(entry.target)
}
const imageobserver = new IntersectionObserver
   (lazyloading, {
      root: null,
      threshold: 0,
      rootMargin: '200px'
   })
all_imgs.forEach((image) => {
   imageobserver.observe(image)
})
let currentslide = 0;
const slides = document.querySelectorAll('.slide')
// const slider=document.querySelector('.slider')
// slider.style.transform=`scale(0.3) translateX(-1200px)`
// slider.style.overflow=`visible`
const btnleft = document.querySelector('.slider__btn--left')
const btnright = document.querySelector('.slider__btn--right')
const dotcontainer = document.querySelector('.dots')
let maxslide = slides.length;
const createDots = function () {
   slides.forEach(function (_, i) {
      dotcontainer.insertAdjacentHTML
         ('beforeend',
            `<button class="dots__dot" data-slide="${i}" fdprocessedid="0657r5"></button>`
         )
   })
}
const activeDots=function(slides){
   document.querySelectorAll('.dots__dot').forEach(function(dots){
      dots.classList.remove("dots__dot--active")
   })
   document.querySelector(`.dots__dot[data-slide="${slides}"]`).classList.add("dots__dot--active")
}
slides.forEach((s, i) => {
   s.style.transform = `translateX(${100 * i}%)`
})
createDots()
activeDots(0)
btnright.addEventListener('click', function () {
   if (currentslide == maxslide - 1) {
      currentslide = 0
   } else {
      currentslide++;
   }
   slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentslide)}%)`
   })
   activeDots(currentslide);
})
btnleft.addEventListener('click', function () {
   if (currentslide == 0) {
      currentslide = maxslide - 1
   } else {
      currentslide--;
   }
   slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - currentslide)}%)`
   })
   activeDots(currentslide);
})
document.addEventListener('keydown', function (e) {
   if (e.key === 'ArrowLeft') {
      if (currentslide == 0) {
         currentslide = maxslide - 1
      } else {
         currentslide--;
      }
      slides.forEach((s, i) => {
         s.style.transform = `translateX(${100 * (i - currentslide)}%)`
      })
      activeDots(currentslide);
   }
   if (e.key === 'ArrowRight') {
      if (currentslide == maxslide - 1) {
         currentslide = 0
      } else {
         currentslide++;
      }
      slides.forEach((s, i) => {
         s.style.transform = `translateX(${100 * (i - currentslide)}%)`
      })
      activeDots(currentslide);
   }
})
dotcontainer.addEventListener('click',function(e){
   console.log(e);
   if(e.target.classList.contains('dots__dot')){
      const slide__1=e.target.dataset.slide
      slides.forEach((s, i) => {
         s.style.transform = `translateX(${100 * (i - slide__1)}%)`
      })
      activeDots(slide__1)
      
   }
})


//functions
// message.style.backgroundColor="#050404"
// message.style.width='120%'
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height=Number.parseInt(getComputedStyle(message).height)+40+'px'

// console.log(getComputedStyle(message).height);
// document.documentElement.style.setProperty('--color-primary',"orangered")
// const log=document.querySelector(".nav__logo")
// console.log(log.alt);
// log.alt="beutiful minimilastic logo "
// console.log(log.className);
// console.log(log.src);
// console.log(log.getAttribute("src"));
// const link=document.querySelector(".nav__link--btn")
// console.log(link.href);
// console.log(link.getAttribute("href"));
// console.log(log.dataset.versionNumber);

/* add event listner  */
/*const alertH1 = function (e) {
   alert('mouse addeventelistner  happened in header section !!')
   h1.removeEventListener("mouseenter", alertH1)
}
const h1 = document.querySelector('h1')
h1.addEventListener('mouseenter', alertH1)*/
/*h1.onmouseenter=function (e) {
   alert('mouse mouseenter happened in header section !!')
}*///old method
/*const randomint = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomcolor = () => {
   return `rgb(${randomint(0, 255)},${randomint(0, 255)},${randomint(0, 255)})`
}
document.querySelector('.nav__link').addEventListener(
   'click', function (e) {
      this.style.backgroundColor = randomcolor()
      console.log('link', e.target, e.currentTarget);
      console.log(e.currentTarget == this);
      //stop propagation /bubbling
      // e.stopPropagation()
   }
)
document.querySelector('.nav__links').addEventListener(
   'click', function (e) {
      this.style.backgroundColor = randomcolor()//change in color in here happens due to bubbling 
      console.log('container', e.target, e.currentTarget);

   }
)
document.querySelector('.nav').addEventListener(
   'click', function (e) {
      this.style.backgroundColor = randomcolor()
      console.log('nav', e.target, e.currentTarget);

   }, true//dtermines whther the default behaviourof event listner will be during capture event 
)//means  the click event will be listened during the capturing phase so it will be logged first
*/
'DOM TRAVERSING '
/*const h1 = document.querySelector('h1')
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'purple'
h1.lastElementChild.style.color = 'yellow'
h1.closest('.header').style.background = "var(--gradient-secondary)"//opposites of query selector 
//measn closets find the parent no matters how far the are
'going sideways '//only access direct sibling 
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
//to get allt the siblings 
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
   if(el!==h1){
      el.style.transform="scale(0.5)"
   }
})*/
"DOM CONTENT LOADING"
document.addEventListener('DOMContentLoaded',function(e){
   console.log("html has been parsed and loaded ",e);
})//we use this only because we want to execute the code after the dom is ready 
window.addEventListener('load',function(e){
   console.log('page fully loaded',e);
})
window.addEventListener('beforeunload',function(e){
   e.preventDefault()
   console.log(e);
   e.returnValue=''
})