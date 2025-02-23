document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const logo = document.getElementById("logo");

  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 56) {
        nav.classList.add("navbar-scrolled");
        // nav.classList.remove("navbar-dark");

        // logo.src = "/images/pr-lovers-black-logo.png";
      } else if (window.scrollY < 56) {
        nav.classList.remove("navbar-scrolled");
        // nav.classList.add("navbar-dark");

        // logo.src = "/images/pr-lovers-white-logo.png";
      }
    });
  } else {
    console.error("Navbar element not found");
  }

  //Javascript para el video slider

  const btns = document.querySelectorAll(".nav-btn");

  var sliderNav = function (manual) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btns[manual].classList.add("active");
  };

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i);
    });
  });
});
