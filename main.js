(function () {
  "use strict";

      /**
   * Preloader
   */

      let preloader = document.getElementById("preloader");
      if (preloader) {
        let canvas = document.getElementById("progress-canvas");
        let ctx = canvas.getContext("2d");
        let progressText = document.getElementById("progress-text");
    
        let progress = 0;
        let interval = setInterval(() => {
          progress++;
          progressText.textContent = progress + "%";
          drawProgress(progress);
    
          if (progress >= 100) {
            clearInterval(interval);
            document.querySelector("#preloader").remove();
          }
        }, 15);
        function drawProgress(percentage) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.lineWidth = 10;
          ctx.strokeStyle = "white";
          ctx.beginPath();
          ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2 - ctx.lineWidth / 2,
            -Math.PI / 2,
            (2 * Math.PI * percentage) / 100 - Math.PI / 2
          );
          ctx.stroke();
        }
      }

  /**
   * Typed
   */
  const typed = new Typed(".typed", {
    strings: ["mágicas", "innovadoras", "ágiles", "creativas"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 3000,
    onComplete: function () {
      document.querySelectorAll(".underline").forEach(function (element) {
        element.classList.add("animate");
      });
    },
  });


  
  /**
   * Swiper
   */
  new Swiper('.slides-2', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

/**
   * Scroll top button
   */
const whatsapp = document.querySelector('.whatsapp');
if (whatsapp) {
  const togglewhatsapp = function() {
    window.scrollY > 100 ? whatsapp.classList.add('active') : whatsapp.classList.remove('active');
  }
  window.addEventListener('load', togglewhatsapp);
  document.addEventListener('scroll', togglewhatsapp);
}

/**
   * Animation on scroll function and init
   */
function aos_init() {
  AOS.init({
    duration: 800,
    easing: 'slide',
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});


  
})();

/**
 * Navbar toggler
 */
function toggleIcons() {
  var navbarTogglerIcon = document.getElementById("navbarTogglerIcon");
  var navbarCloseIcon = document.getElementById("navbarCloseIcon");
  var navbarButton = document.querySelector(".navbar-toggler");

  if (navbarButton.getAttribute("aria-expanded") === "true") {
    navbarTogglerIcon.style.display = "inline-block";
    navbarCloseIcon.style.display = "none";
  } else {
    navbarTogglerIcon.style.display = "none";
    navbarCloseIcon.style.display = "inline-block";
  }
}

  