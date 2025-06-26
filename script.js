// -------- Scroll function --------

const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');
const mainEl = document.querySelector('main');
const bodyEl = document.querySelector('body');
const scrollTopBtn = document.getElementById('scrollTopBtn');

const langToggle = document.getElementById('toggle-lang');

// Vérifie si on est sur la version française
const isFrench = !window.location.pathname.includes('/en/');

// Met à jour le texte du bouton selon la langue actuelle
langToggle.textContent = isFrench ? 'EN' : 'FR';

// Lors du clic, redirige vers l’autre langue
langToggle.addEventListener('click', () => {
  if (isFrench) {
    window.location.href = '/en/index.html';
  } else {
    window.location.href = '/index.html';
  }
});

// 1) Affiche / masque le bouton selon la position de scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.remove('hidden');
  } else {
    scrollTopBtn.classList.add('hidden');
  }
});

// 2) Scroll tout en haut au clic
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

let currentSection = 'home';
window.addEventListener('scroll', () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop - 500) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      navLinkEl.classList.add('active');
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
