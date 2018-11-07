var hHeight = $('.header').height();
console.log(hHeight);

$(window).scroll(function () {
  if ($(this).scrollTop() > hHeight) {
    $('.header').addClass('scrolled');
  } else {
    $('.header').removeClass('scrolled');
  }
});

$(document).ready(function() {
  //открытие поиска
  $(".js-search-opener").click(function() {
    $(".search-popup").toggleClass("is-open");
    $("body").toggleClass("overflow");
    return false;
  });

  //закрытие поиска
  $(".js-search-closer").click(function() {
    $(".search-popup").toggleClass("is-open");
    $("body").toggleClass("overflow");
    return false;
  });

  //открытие/закрытие попапа поиска
  $(".js-menu-opener").click(function() {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("is-open");
    $("body").toggleClass("overflow");
  });

  //слайдер новостей
  if ($('.js-news-slider').length) {
    $('.js-news-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }

  //переход ко второму уровню меню на мобильных
  $(".main-menu__link--pseudo").click(function() {
    $(".main-menu__link").addClass("hidden");
    $(this).next(".sub-menu").addClass("is-open");
  });

  //переход к первому уровню меню на мобильных
  $(".sub-menu__link--pseudo").click(function() {
    $(".main-menu__link:not(.main-menu__link--root)").removeClass("hidden");
    $(".sub-menu").removeClass("is-open");
  });
});
