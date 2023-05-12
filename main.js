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
