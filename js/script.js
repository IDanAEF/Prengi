$(document).ready(function(){
  $('.solution__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_next.png"></button>',
    infinite: true,
    arrows: true
  });
});

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

$('.footer__title-i').each(function(i) {
  $(this).on('click', function() {
    $('.inf_links').eq(i).addClass('active');
    $('.inf_links').eq(i-1).removeClass('active');
    $('.inf_links').eq(i-2).removeClass('active');
  });
});

$('.inf_links a').on('click', function() {
  $('.inf_links').removeClass('active');
});

$('.inf_links__close').on('click', function() {
  $('.inf_links').removeClass('active');
});