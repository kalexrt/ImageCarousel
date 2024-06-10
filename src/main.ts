import './style.css'
// assign variables
const prevButton = document.querySelector<HTMLButtonElement>('.prev-button');
const nextButton = document.querySelector<HTMLButtonElement>('.next-button');
const imageWrapper = document.querySelector<HTMLDivElement>('.carousel-image-wrapper');
const indicators = document.querySelectorAll<HTMLButtonElement>('.indicator');

let currIndex = -2;

//moves by 700px beacuse img width is 700
function updateCarousel() {
  if (imageWrapper) { //if is there because img wrapper cannot be null
    const offset = currIndex * 700; 
    imageWrapper.style.transform = `translateX(${offset}px)`;
    updateIndicators();
  }
}

//for previous button
prevButton?.addEventListener('click', () => {
  currIndex = currIndex - 1 ;
  if(currIndex < -2){
    currIndex = 2;
  };
  updateCarousel();
});

//for next button
nextButton?.addEventListener('click', () => {
  currIndex = currIndex + 1;
  if(currIndex > 2){
    currIndex = -2;
  };
  updateCarousel();
});

//adding click for each inidcator button
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currIndex = index - 2;
    updateCarousel();
  });
});

//add active class to the button with active index
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index - 2 === currIndex);
  });
}


//auto next every 5 seconds
setInterval(() => {
  currIndex = currIndex + 1;
  if(currIndex > 2){
    currIndex = -2;
  };
  updateCarousel();
}, 5000);

//called because first indicator is off
updateIndicators();
