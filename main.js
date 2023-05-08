(function() {
  "use strict";

  /**
   * Preloader
   */
  // let preloader = select('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove()
  //   });
  // }


  const typed = new Typed('.typed', {
    strings: ['mágicas', 'innovadoras','ágiles', 'creativas'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    onComplete: function() {
      document.querySelectorAll('.underline').forEach(function(element) {
        element.classList.add('animate');
      });
    }
  });



})()


