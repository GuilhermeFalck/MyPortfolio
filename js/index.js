import { nextSlide, prevSlide } from "./carousel.js";

// Vincula os botões às funções
document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".carousel-control.next");
  const prevButton = document.querySelector(".carousel-control.prev");

  if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
  }

  if (prevButton) {
    prevButton.addEventListener("click", prevSlide);
  }
});
