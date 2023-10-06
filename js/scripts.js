function setFullHeight() {
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setFullHeight();

window.addEventListener("resize", () => {
   setFullHeight();
});

var menuIcon = document.getElementById("mobile-menu");
var mobileNav = document.getElementById("mobile-nav");

menuIcon.addEventListener("click", function (event) {
   menuIcon.classList.toggle("close");
   mobileNav.classList.toggle("open");
   event.stopPropagation();
});

document.addEventListener("click", function (event) {
   if (menuIcon.contains(event.target) || mobileNav.contains(event.target)) {
      return;
   }

   if (mobileNav.classList.contains("open")) {
      menuIcon.classList.remove("close");
      mobileNav.classList.remove("open");
   }
});

mobileNav.addEventListener("click", function (event) {
   event.stopPropagation();
});
