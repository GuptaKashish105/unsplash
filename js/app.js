const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

const nextSlide = document.querySelector(".slide-arrow-next");

let initialSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", () => {
  if (initialSlide === maxSlide) {
    initialSlide = 0;
  } else {
    initialSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - initialSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".slide-arrow-prev");

prevSlide.addEventListener("click", () => {
  if (initialSlide === 0) {
    initialSlide = maxSlide;
  } else {
    initialSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - initialSlide)}%)`;
  });
});
