import './style.css'

const images = document.querySelectorAll<HTMLImageElement>('.carousel-image-wrapper img');
const prevButton = document.querySelector<HTMLButtonElement>('.prev-button');
const nextButton = document.querySelector<HTMLButtonElement>('.next-button');
const imageWrapper = document.querySelector<HTMLDivElement>('.carousel-image-wrapper');

let currentIndex = -2;

function updateCarousel() {
  if (imageWrapper) {
    const offset = -currentIndex * 500; // Assuming each image is 500px wide
    imageWrapper.style.transform = `translateX(${offset}px)`;
  }
}

prevButton?.addEventListener('click', () => {
  currentIndex = currentIndex - 1 ;
  if(currentIndex < -2){
    currentIndex = 2;
  };
  updateCarousel();
});

nextButton?.addEventListener('click', () => {
  currentIndex = currentIndex + 1;
  if(currentIndex > 2){
    currentIndex = -2;
  };
  updateCarousel();
});

updateCarousel();
