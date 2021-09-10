$('.header__addresses').on('click', function() {
  $('.address').addClass('active');
});

$('.address__close').on('click', function() {
  $('.address').removeClass('active');
});

$('.hamburger').on('click', function() {
  $('.navigation').addClass('active');
});

$('.navigation__close').on('click', function() {
  $('.navigation').removeClass('active');
});

const footerTitle = document.querySelectorAll('.footer__title-i'),
      infLinks = document.querySelectorAll('.inf_links');
let dumb = '';

footerTitle.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (dumb == item) {
      infLinks.forEach(elem => elem.classList.remove('active'));
      dumb = '';
    } else {
      infLinks.forEach(elem => elem.classList.remove('active'));
      infLinks[i].classList.add('active');
      dumb = item;
    }
  });
});

$('.inf_links a').on('click', function() {
  $('.inf_links').removeClass('active');
  dumb='';
});

//slider
const sliderItems = document.querySelectorAll('.solution__item'),
      sliderLine = document.querySelector('.solution__line'),
      slider = document.querySelector('.solution__slider'),
      width = window.getComputedStyle(slider).width.replace(/\D/g, ''),
      nextSlide = document.querySelector('.solution__next'),
      prevSlide = document.querySelector('.solution__prev');
let offset = 0;

sliderLine.style.width = (sliderItems.length * 100) + '%';

sliderItems.forEach(item => item.style.width = +width + 'px');

nextSlide.addEventListener('click', () => {
  if (offset == (sliderItems.length - 1) * +width) {
    offset = 0;
  } else {
    offset += +width;
  }

  sliderLine.style.transform = `translateX(-${offset}px)`;
});

prevSlide.addEventListener('click', () => {
  if (offset == 0) {
    offset = (sliderItems.length - 1) * +width;
  } else {
    offset -= +width;
  }

  sliderLine.style.transform = `translateX(-${offset}px)`;
});