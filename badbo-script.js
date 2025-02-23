document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const logo = document.getElementById("logo");

  if (nav) {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY >= 4000) {
        nav.classList.add("navbar-scrolled");
      } else if (window.scrollY < 4000) {
        nav.classList.remove("navbar-scrolled");
        // nav.classList.add("navbar-dark");
      }
    });
  } else {
    console.error("Navbar element not found");
  }
});
