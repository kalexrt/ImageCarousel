import './style.css'

const images = document.querySelectorAll<HTMLImageElement>('.carousel-image-wrapper img');
const prevButton = document.querySelector<HTMLButtonElement>('.prev-button');
const nextButton = document.querySelector<HTMLButtonElement>('.next-button');


console.log(prevButton, nextButton, images)
