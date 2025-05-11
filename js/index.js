// ----- Fade-in Page on Load -----
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.6s ease-in";
    requestAnimationFrame(() => {
      document.body.style.opacity = 1;
    });
  
    // ----- Typing effect for landing page only -----
    const introText = document.querySelector(".intro h1");
    if (introText) {
      const name = "Zyra Pepito";
      introText.textContent = "";
      let index = 0;
      const type = () => {
        if (index < name.length) {
          introText.textContent += name.charAt(index);
          index++;
          setTimeout(type, 100);
        }
      };
      type();
    }
  
// ----- Highlight Active Nav Link -----
    const current = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
      if (link.getAttribute("href") === current || (current === "" && link.getAttribute("href") === "index.html")) {
        link.style.color = "#007acc";
      }
    });
  });
// Typing effect in header
const text = " HTML | CSS | JavaScript | PHP | MySQL ";
let index = 0;

function typeEffect() {
  const subtitle = document.querySelector(".intro p");
  if (index < text.length) {
    subtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

// Run typing effect after page loads
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".intro p");
  subtitle.textContent = ""; // clear text before typing
  typeEffect();
});

// Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });
}