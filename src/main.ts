import './style.css'

const prevButton = document.querySelector<HTMLButtonElement>('.prev-button');
const nextButton = document.querySelector<HTMLButtonElement>('.next-button');
const imageWrapper = document.querySelector<HTMLDivElement>('.carousel-image-wrapper');
const indicators = document.querySelectorAll<HTMLButtonElement>('.indicator');

let currIndex = -2;


function updateCarousel() {
  if (imageWrapper) {
    const offset = -currIndex * 500; // Assuming each image is 500px wide
    imageWrapper.style.transform = `translateX(${offset}px)`;
    updateIndicators();
  }
}

prevButton?.addEventListener('click', () => {
  currIndex = currIndex - 1 ;
  if(currIndex < -2){
    currIndex = 2;
  };
  updateCarousel();
});

nextButton?.addEventListener('click', () => {
  currIndex = currIndex + 1;
  if(currIndex > 2){
    currIndex = -2;
  };
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currIndex = index - 2;
    updateCarousel();
  });
});

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index - 2 === currIndex);
  });
}


updateCarousel();
