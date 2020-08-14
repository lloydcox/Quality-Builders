    // Carousel scriipts 

$(document).ready(function () {
$('.main-carousel').slick({
  autoplay: false,
  arrows: true,
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  mobileFirst: true
});

$('.partners').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
    }
},
  {
    breakpoint: 600,
    settings: {
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2
    }
},
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
  }
},
{
  breakpoint: 180,
  settings: {
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
}
}
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
 ]
});
    
$('.testimonials').slick({
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 2000,
  fade: true,
  cssEase: 'linear',
  mobileFirst: true
});


$('.testimonials-1').slick({
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1500,
  fade: true,
  cssEase: 'linear',
  mobileFirst: true
});
});