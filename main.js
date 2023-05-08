(function() {
  "use strict";

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

   /**
   * Type effect
   */
   const typed = new Typed('.typed', {
    strings: ['mágicas', 'innovadoras','ágiles', 'creativas'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
  });



})()


