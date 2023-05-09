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
      }, 50);
    });
  }

  const typed = new Typed(".typed", {
    strings: ["mágicas", "innovadoras", "ágiles", "creativas"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    onComplete: function () {
      document.querySelectorAll(".underline").forEach(function (element) {
        element.classList.add("animate");
      });
    },
  });
})();
