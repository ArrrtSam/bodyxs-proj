var breakpoint = false;
$(window).scroll(function() {
  if ($(this).scrollTop() > 100 && !breakpoint ) {
     addFix();
  }
  if ($(this).scrollTop() < 100 && breakpoint ) {
     removeFix();
  }
});
function addFix() {
  breakpoint = true;
  $('header').addClass('header_hide')
}
function removeFix() {
  breakpoint = false;
  $('header').removeClass('header_hide')
}

$(".burger").click(function(){
  $(".header__bottom-nav").toggleClass("active")
  $(this).toggleClass("active")
})
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
});