var hHeight = $('.header').height();

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

  //слайдер товаров
  if ($('.js-products-slider').length) {
    $('.js-products-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-next__icon" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }

  //открытие фильтра каталога
  $(".js-filter-opener").click(function() {
    $(".filter__inner").toggleClass("is-open");
  });

  //открытие раздела фильтра каталога
  $(".js-filter-section-opener").click(function() {
    if($(this).hasClass("is-open")) {
      $('.filter__inner').removeClass("section-open");
      $('.filter__dropdown').removeClass("is-open");
      $(".js-filter-section-opener").removeClass("is-open");
    } else {
      $(".js-filter-section-opener").removeClass("is-open");
      $(this).addClass("is-open");
      $('.filter__inner').addClass("section-open");
      $('.filter__dropdown').removeClass("is-open");
      $('.filter__dropdown[data-section='+ $(this).attr("data-section") +']').addClass("is-open");
    }
  });

  //открытие/закрытие аккордиона
  $(".js-accordion-opener").click(function() {
    $(this).toggleClass("is-open");
    $(this).next(".accordion__text").slideToggle();
  });

  //слайдер превью в деталке
  if ($('.js-preview-slider').length) {
    $('.js-preview-slider').slick({
      vertical: true,
      mobileFirst: true,
      slidesToShow: 5,
      infinite: false,
      edgeFriction: 0,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev" title="Наверх"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow_top"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вниз"><svg class="slick-next__icon" aria-hidden="true"><use xlink:href="#arrow_bottom"/></svg></button>',
      responsive: [
        /*{
          breakpoint: 959,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }*/
      ]
    });
  }
});
