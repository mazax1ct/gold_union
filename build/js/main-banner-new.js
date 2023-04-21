$(document).ready(function() {
  if ($('.js-main-banner-new').length) {
    $('.js-main-banner-new').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: '20px',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
            centerPadding: '40px',
          }
        },
        {
          breakpoint: 1899,
          settings: {
            centerMode: true,
            centerPadding: '60px',
          }
        },
      ]
    });
  }
});
