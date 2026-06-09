const navbar = document.getElementById("main-navbar");
const toTop = document.getElementById("to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-fixed");
    navbar.classList.remove("bg-transparent");

    toTop.style.display = "flex";
    toTop.style.opacity = "1";
  } else {
    navbar.classList.remove("navbar-fixed");
    navbar.classList.add("bg-transparent");

    toTop.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY <= 50) {
        toTop.style.display = "none";
      }
    }, 200);
  }
});