    // Carousel scriipts 

$(document).ready(function () {
$('.main-carousel').slick({
  autoplay: true,
  arrows: true,
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear'
});

$('.partners').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
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
    slidesToShow: 2,
    slidesToScroll: 2
    }
},
  {
    breakpoint: 480,
    settings: {
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
  cssEase: 'linear'
});


$('.testimonials-1').slick({
  autoplay: false,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 2500,
  fade: true,
  cssEase: 'linear',
});
});