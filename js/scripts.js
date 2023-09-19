// Back to top script
window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   // Show the button after scrolling down the height of the viewport from the top
   if (
      document.body.scrollTop > window.innerHeight / 2 ||
      document.documentElement.scrollTop > window.innerHeight / 2
   ) {
      document.getElementById("back-to-top").style.opacity = "1"; /* Make the button visible */
   } else {
      document.getElementById("back-to-top").style.opacity = "0"; /* Make the button transparent */
   }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("back-to-top").onclick = function () {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

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

////////////////////////////////////////////////////////////////
// SMOOTH SCROLLING JS IMPEMENTATION

// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     if (href.startsWith("#")) {
//       const section = document.querySelector(href);
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

////////////////////////////////////////////////////////////////
// Sticky navigation
// const heroSectionEl = document.querySelector(".hero");
// const observer = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (!ent.isIntersecting)
//       document.querySelector(".header").classList.add("sticky");
//     if (ent.isIntersecting)
//       document.querySelector(".header").classList.remove("sticky");
//   },
//   {
//     //In the viewport
//     root: null,
//     treshold: 0,
//     rootMargin: "180px",
//   }
// );
// observer.observe(heroSectionEl);
