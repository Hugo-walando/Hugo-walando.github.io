// -------- Scroll function --------

const navLinkEls = document.querySelectorAll(".nav_link");
const sectionEls = document.querySelectorAll(".section");
const mainEl = document.querySelector("main");

let currentSection = "home";
mainEl.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (mainEl.scrollTop >= sectionEl.offsetTop - 300) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinkEl.classList.add("active");
    }
  });
});

// mainEl.addEventListener("wheel", (event) => {
//   event.preventDefault();
//   const delta = event.deltaY;

//   mainEl.scrollBy({
//     top: delta,
//     behavior: "smooth",
//   });
// });

// --------x End Scroll function x--------
