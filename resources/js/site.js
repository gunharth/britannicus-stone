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
const hamburgerOuter = document.querySelector(".hamburgerOuter");
const logoface = document.querySelector("#logoface");
const logotype = document.querySelector("#logotype");

const classToggle = (el, ...args) => args.map((e) => el.classList.toggle(e));

// Add Event Listeners
btn.addEventListener("click", (e) => {
    e.preventDefault();
    //classToggle(menu, 'scale-y-0')
    //classToggle(menu, 'w-0', 'w-full', 'md:w-1/2')
    //classToggle(menu, 'left-0', '-left-full')
    //classToggle(menu, '-translate-y-full', 'opacity-0')
    menu.classList.toggle("active");
    menu.classList.toggle("-translate-y-full");
    menu.classList.toggle("opacity-0");
    //menu.classList.toggle('-translate-x-full')
    logoface.classList.toggle("active");
    logotype.classList.toggle("active");
    hamburgerOuter.classList.toggle("active");
    hamburger.classList.toggle("active");
    //logo.classList.toggle("active");
    console.log($('.mobile-menu').hasClass('active'))
});

const nav = document.querySelector("nav");

var scrollObject = {};
const scrollStart = 150;
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
        document.body.scrollTop >= scrollStart ||
        document.documentElement.scrollTop >= scrollStart
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
    if ($('.mobile-menu').hasClass('active')) {
        console.log('true')
        $('button.mobile-menu-button').trigger('click')
    }

};

$(function() {

$('.mobile-menu li').hover(
  function(e) {
    let name = $(this).find('a').text().toLowerCase()
    let img = '/assets/navigation_images/' + name.replaceAll(' ', '_') + '.jpg'
    console.log(img)
    $('.navigation_image').css('background-image', 'url(' + img + ')')
  }, function() {
    $('.navigation_image').css('background-image', "none")
  }
);


const swiper = new Swiper(".swiper", {
    // Optional parameters
    //direction: 'vertical',
    //loop: false,
    speed: 2000,
      autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
/*     on: {
        slideChangeTransitionStart: function () {
            // Slide captions
            let swiper = this;
            let slideTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
            let slideSubTitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
            if(slideTitle) {
                $("#slider h1").html(slideTitle + '<br>' + slideSubTitle)
            } else {
                $("#slider h1").html($('h1').attr('data-slideshowtitle'));
            }
        }
      } */

    // Navigation arrows
    /*   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */

    // And if we need scrollbar
    /*   scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});

// Slide captions on load
/* const slideTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
const slideSubTitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
if(slideTitle) {
    $("#slider h1").html(slideTitle + '<br>' + slideSubTitle)
} else {
    $("#slider h1").html($('h1').attr('data-slideshowtitle'));
} */


const $masonry = $('.masonry').masonry({
    // options
    columnWidth: '.masonry-sizer',
    //gutter: '.gutter-sizer',
    itemSelector: '.masonry-item',
    percentPosition: true,
    horizontalOrder: true
  });

  $masonry.imagesLoaded().progress( function() {
    $masonry.masonry('layout');
  });

const formErrors = $('#formErrors')
const formSubmit = $('#formSubmit')

  $("form").submit(function (event) {
    formErrors.html('')
    formErrors.removeClass('text-red').removeClass('text-green')
    const form = $(this)
    const formData = document.getElementById('sample_request')
    /* console.log(form.attr('action'))

    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      superheroAlias: $("#superheroAlias").val(),
    }; */

    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      cache: false,
      contentType: false,
      processData: false,
      data: new FormData(formData),
      //encode: true,
      beforeSend: function( xhr ) {
        xhr.setRequestHeader( 'X-CSRF-Token', form.find('input[name="_token"]').val() );
      },
      success: function(data) {
        formErrors.addClass('text-green')
        formErrors.html('Thank you for your request.')
        formSubmit.hide()
      },
      error: function(data) {
        formErrors.addClass('text-red')
        formErrors.html('Please fill in all fields.')

      }
    })

    event.preventDefault();
  });

});
