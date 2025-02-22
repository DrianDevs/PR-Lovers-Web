document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const logo = document.getElementById("logo");

  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 56) {
        nav.classList.add("navbar-scrolled");
        nav.classList.remove("navbar-dark");

        logo.src = "/images/pr-lovers-black-logo.png";
      } else if (window.scrollY < 56) {
        nav.classList.remove("navbar-scrolled");
        nav.classList.add("navbar-dark");

        logo.src = "/images/pr-lovers-white-logo.png";
      }
    });
  } else {
    console.error("Navbar element not found");
  }

  const btns = document.querySelectorAll(".nav-btn");
});
