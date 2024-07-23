let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentIndex) {
      slide.classList.add("active");
    }
  });

  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

export function nextSlide() {
  showSlide(currentIndex + 1);
}

export function prevSlide() {
  showSlide(currentIndex - 1);
}

// Inicialize o carrossel mostrando o primeiro slide
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});
