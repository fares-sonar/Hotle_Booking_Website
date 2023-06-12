// Navbar
let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle('active')

  }
});


window.onscroll = () => {
  navbar.classList.remove("active");
};

// Swiper_slid
let swiper = new Swiper(".slid-home", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let fares = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

let swiperFares = new Swiper(".reviews-slider", {
  loop: true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
      
    },
  },
});
