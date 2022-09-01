/* import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import 'focus-visible'

// Global get CSRF token function (used by forms).
window.getToken = async () => {
    return await fetch('/!/DynamicToken/refresh')
        .then((res) => res.json())
        .then((data) => {
            return data.csrf_token
        })
        .catch(function (error) {
            this.error = 'Something went wrong. Please try again later.'
        })
}

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(persist)
Alpine.plugin(focus)
Alpine.start()
 */


// Grab HTML Elements
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector("#hamburger");
const logo = document.querySelector("#logo_face");

const classToggle = (el, ...args) => args.map((e) => el.classList.toggle(e));

// Add Event Listeners
btn.addEventListener("click", (e) => {
    e.preventDefault();
    //classToggle(menu, 'scale-y-0')
    //classToggle(menu, 'w-0', 'w-full', 'md:w-1/2')
    //classToggle(menu, 'left-0', '-left-full')
    //classToggle(menu, '-translate-y-full', 'opacity-0')
    menu.classList.toggle("-translate-y-full");
    menu.classList.toggle("opacity-0");
    //menu.classList.toggle('-translate-x-full')
    hamburger.classList.toggle("active");
    logo.classList.toggle("active");
});

const nav = document.querySelector("nav");

var scrollObject = {};
window.onscroll = function () {
/*     scrollObject = {
        x: window.pageXOffset,
        y: window.pageYOffset
     }
     console.log(scrollObject.y)
     // If you want to check distance
     if(scrollObject.y > 200) {
         // add class
     } */
    if (
        document.body.scrollTop >= 300 ||
        document.documentElement.scrollTop >= 300
    ) {
        nav.classList.add("scrolled")
        /* nav.classList.add("bg-black");
        nav.classList.remove("bg-transparent"); */
        hamburger.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled")
        /* nav.classList.add("bg-transparent");
        nav.classList.remove("bg-black"); */
        hamburger.classList.remove("scrolled");
    }
};
