(function () {
  "use strict";

  /**
   * Preloader
   */
  let preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      let progressText = document.querySelector("#progress-text");

      let progress = 0;
      let interval = setInterval(() => {
        progress++;
        progressText.textContent = progress + "%";

        if (progress >= 100) {
          clearInterval(interval);
          document.querySelector("#preloader").remove();
        }
      }, 15);
    });
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




