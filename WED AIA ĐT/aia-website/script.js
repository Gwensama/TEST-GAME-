// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(ind => ind.classList
