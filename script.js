/* ================= SCROLL ANIMATIONS ================= */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Scroll Reveal
const revealElements = document.querySelectorAll(
  ".fade-in, .slide-up, .slide-left, .slide-right, .zoom-in"
);

function revealOnScroll() {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================= TESTIMONIAL SLIDER (INDEX ONLY) ================= */
const slider = document.getElementById("slider");

if (slider) {
  const getCardWidth = () => {
    const card = slider.querySelector(".review-card");
    return card.offsetWidth;
  };

  window.slideRight = function () {
    slider.scrollBy({
      left: getCardWidth(),
      behavior: "smooth"
    });
  };

  window.slideLeft = function () {
    slider.scrollBy({
      left: -getCardWidth(),
      behavior: "smooth"
    });
  };
}



/* ================= MOBILE MENU TOGGLE (ALL PAGES) ================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

