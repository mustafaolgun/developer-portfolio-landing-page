const navbar = document.querySelector("#navbar");
const navLinks = document.querySelector("#nav-links");
const hamburger = document.querySelector("#hamburger");

const toggleNavbar = () => {
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navLinks.addEventListener("click", () => {
    navbar.classList.remove("active");
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
};

toggleNavbar();

const words = [
  "UI/UX Design",
  "Clean Code",
  "Modern",
  "Responsive",
  "Smart",
  "Creative",
  "Web Development",
];
let currentWordIndex = 0;
let currentCharIndex = 0;
let currentWord = words[currentWordIndex];
let isDeleting = false;

function typeEffect() {
  const dynamicTextElement = document.getElementById("change-words");

  if (isDeleting) {
    currentCharIndex--;
    dynamicTextElement.textContent = currentWord.substring(0, currentCharIndex);

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      currentWord = words[currentWordIndex];
    }
  } else {
    currentCharIndex++;
    dynamicTextElement.textContent = currentWord.substring(0, currentCharIndex);

    if (currentCharIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Wait before starting to delete
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80); // Speed up/decrease based on whether deleting or typing
}

typeEffect(); // Initial call to start the effect
