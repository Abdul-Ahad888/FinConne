// -----------------------------------nav bar fixed when scroll & Backdrop Filter--------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var navbarHeight = header.offsetHeight;
    const headerNavbar = document.querySelector('.header-navbar');

    if (window.scrollY > 50) {
      header.classList.add('fixed-top', 'fade-in');
      headerNavbar.classList.add('scrolled');
      document.body.style.paddingTop = navbarHeight + 'px';
    } else {
      header.classList.remove('fixed-top', 'fade-in');
      headerNavbar.classList.remove('scrolled');
      document.body.style.paddingTop = '0';
    }
  });
});

// -----------------------------------nav bar fixed when scroll--------------------------------//




/*** ==========================Mobile nav toggle========================== */
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToggle();
    })
  });

  function mobileNavToggle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    document.querySelector('body').classList.toggle('no-scroll'); // Add this line
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });
});


// Hamburger Navbar


$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});


// Nav Filter Scroll


document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});


// Testimonials


jQuery(document).ready(function ($) {
  "use strict";
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});


// Partners Carousel


document.addEventListener("DOMContentLoaded", function () {
  const slideTrack = document.querySelector('.slide-track');
  const slides = Array.from(slideTrack.children);

  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slideTrack.appendChild(clone);
  });
});


// Bubble Image Animation


document.addEventListener('DOMContentLoaded', function () {
  const bubble = document.querySelector('.bubble');
  bubble.style.setProperty('--randX', Math.random() * 2 - 1);
  bubble.style.setProperty('--randY', Math.random() * 2 - 1);
});


// GASP Animation 


gsap.registerPlugin(ScrollTrigger);

const lrBoxes = document.querySelectorAll('.box-arrow-flow-img-l-to-r');

lrBoxes.forEach(box => {
  gsap.from(box, {
    opacity: 0,
    scale: 0.5,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });
});

const tbBoxes = document.querySelectorAll('.box-arrow-flow-img-t-to-b');

tbBoxes.forEach(box => {
  gsap.from(box, {
    opacity: 0,
    scale: 0.5,
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none"
    }
  });
});




let currentStep = 1;
const totalSteps = 5;

// Next button functionality
document.querySelectorAll('.next-btn').forEach(button => {
  button.addEventListener('click', function () {
    if (currentStep < totalSteps) {
      document.getElementById(`regStep${currentStep}`).style.display = 'none';

      currentStep++;

      document.getElementById(`step${currentStep}`).style.opacity = '1';

      let progressBar = document.querySelector('.progress-bar');
      progressBar.style.width = `${currentStep * 20}%`;

      document.getElementById(`regStep${currentStep}`).style.display = 'flex';
    }
  });
});

// Previous button functionality
document.querySelectorAll('.previous-btn').forEach(button => {
  button.addEventListener('click', function () {
    if (currentStep > 1) {
      document.getElementById(`regStep${currentStep}`).style.display = 'none';

      document.getElementById(`step${currentStep}`).style.opacity = '0.6';

      currentStep--;

      let progressBar = document.querySelector('.progress-bar');
      progressBar.style.width = `${currentStep * 20}%`;

      document.getElementById(`regStep${currentStep}`).style.display = 'flex';
    }
  });
});


// Scroll Animation 

// document.addEventListener('DOMContentLoaded', function () {
//   ScrollReveal().reveal('.scroll', {
//     distance: '50px',
//     duration: 1000,
//     easing: 'ease-in-out',
//     origin: 'bottom',
//     reset: true
//   });
// });


gsap.registerPlugin(ScrollTrigger);

// Create the animation
gsap.utils.toArray('.scroll').forEach(box => {
    gsap.fromTo(box, 
        { y: 100, opacity: 0 }, 
        { 
            y: 0, 
            opacity: 1, 
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: box,
                start: "top 100%",
                end: "top 0%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});


// Loader
document.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
    const loader = document.getElementById('loader');

    loader.style.opacity = '0';
    setTimeout(function () {
      loader.style.display = 'none';
    }, 300);
  }, 2000);
});


// BackToTop Button
let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// Career Box Navigate
function showCategory(category) {

  document.querySelectorAll('.career-category').forEach(function (element) {
    element.style.display = 'none';
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.3s ease';
    setTimeout(function () {
      element.style.display = 'none';
    }, 100);
  });

  setTimeout(function () {
    document.getElementById(category).style.transition = 'opacity 0.7s ease';
    document.getElementById(category).style.opacity = '1'; 
    document.getElementById(category).style.display = 'block';
  }, 100);
  
  document.getElementById(category).style.display = 'block';


  // Active Color While Navigating
  document.querySelectorAll('.active-box-links-color h6').forEach(function (link) {
    if (link.id === category + '-link') {
      link.style.color = '#0066CC';
    } else {
      link.style.color = '';
    }
  });
}

