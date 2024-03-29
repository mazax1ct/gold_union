//отслеживание скролла для шапки
var header = $('.header');

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > 0) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

$(document).ready(function() {
  //убираем пометку о том что js выключен
  $('body').removeClass('no-js');

  //открытие поиска
  $(".js-search-opener").click(function() {
    $(".search-popup").toggleClass("is-open");
    $("body").toggleClass("overflow");
    $(".search-bar__input").focus();
    return false;
  });

  //закрытие поиска
  $(".js-search-closer").click(function() {
    $(".search-popup").toggleClass("is-open");
    $("body").toggleClass("overflow");
    return false;
  });

  //открытие/закрытие главного меню
  $(".js-menu-opener").click(function() {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("is-open");
    $("body").toggleClass("overflow");
  });

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

  //выпадающее меню второго уровня
  if ($("body").width() > 1199) {
    $('.js-dropdown').hover(
      function() {
        var uid = $(this).attr('id');
        $("#" + uid + " > .sub-menu").delay(500).slideDown(250);
      },
      function() {
        var uid = $(this).attr('id');
        $("#" + uid + " > .sub-menu").stop(true,true).delay(500).slideUp(250);
      }
    );
  }

  //слайдер картинок в главном баннере
  if ($('.js-main-banner').length) {
    $('.js-main-banner').slick({
      autoplay: true,
      speed: 1000,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: false,
      fade: true
    });
  }

  //слайдер новостей
  if ($('.js-news-slider').length) {
    $('.js-news-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    });
  }

  //слайдер товаров
  if ($('.js-products-slider').length) {
    $('.js-products-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
      responsive: [{
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
    if ($(this).hasClass("is-open")) {
      $('.filter__inner').removeClass("section-open");
      $('.filter__dropdown').removeClass("is-open");
      $(".js-filter-section-opener").removeClass("is-open");
    } else {
      $(".js-filter-section-opener").removeClass("is-open");
      $(this).addClass("is-open");
      $('.filter__inner').addClass("section-open");
      $('.filter__dropdown').removeClass("is-open");
      $('.filter__dropdown[data-section=' + $(this).attr("data-section") + ']').addClass("is-open");
    }
  });

  if ($("body").width() > 959) {
    $(".filter__dropdown").mouseover(function() {
      $(this).addClass("hovered");
    });

    $(".filter__dropdown").mouseleave(function() {
      $(".filter__inner").removeClass("section-open");
      $(".filter__section-opener").removeClass("is-open");
      $(this).removeClass("is-open").removeClass("hovered");
    });
  }

  //открытие/закрытие аккордиона
  $(".js-accordion-opener").click(function() {
    $(this).toggleClass("is-open");
    $(this).next(".accordion__text").slideToggle();
  });

  //слайдер превью в деталке
  if ($('.js-preview-slider').length) {
    $('.js-preview-slider').slick({
      mobileFirst: true,
      slidesToShow: 5,
      infinite: false,
      edgeFriction: 0,
      arrows: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"></button>',
    });
  }

  //открытие попапа
  if ($("[data-fancybox='form-popup']").length) {
    $("[data-fancybox='form-popup']").fancybox({
      touch: false,
      infobar: false,
      toolbar: false,
      smallBtn: false,
      buttons: ["close"],
      animationEffect: false,
      arrows: false
    });
  }

  //закрытие попапа
  $('.js-popup-close').on('click', function() {
    $.fancybox.close();
    return false;
  });

  //смена фона открытки
  $(".js-gift-card").click(function() {
    $(".js-gift-card").removeClass("is-active");
    $(this).toggleClass("is-active");
    $(".gift-card").removeClass("is-active");
    $('.gift-card[data-id=' + $(this).attr("data-id") + ']').addClass("is-active");
    return false;
  });

  //пишем имена отправителя и получателя
  $("#name_").on("change", function() {
    $(".reciever").html($(this).val());
    if ($(this).val() == 0) {
      $(".reciever").html("______");
    }
  });

  $("#name__").on("change", function() {
    $(".sender").html($(this).val());
    if ($(this).val() == 0) {
      $(".sender").html("______");
    }
  });

  //слайдер изображений в галерее новости
  if ($(".js-gallery-slider").length) {
    $('.js-gallery-slider').slick({
      adaptiveHeight: true,
      mobileFirst: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: false,
      swipe: false,
      asNavFor: '.js-gallery-slider-nav'
    });

    $('.js-gallery-slider-nav').slick({
      mobileFirst: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-gallery-slider',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      responsive: [{
          breakpoint: 419,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 559,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 679,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 959,
          settings: {
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-next__icon" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
            appendArrows: $(".gallery-slider"),
            slidesToShow: 7
          }
        },
      ]
    });
  }

  //запуск плавающего левого меню
  if ($("#article-nav").length) {
    if ($("body").width() >= 768 && $("body").width() < 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 120
        });

        //навигация по якорям
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -120
        });
      }, 100);
    } else if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 0
        });

        //навигация по якорям
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -30
        });
      }, 100);
    }

    //если блок для контента пустой, открепляем плавающее левое меню
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }
});

//открепляем и перезапускаем прилипающий блок при резайзе
$(window).resize(function() {
  if ($("#article-nav").length) {
    if ($("body").width() >= 768 && $("body").width() < 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 120
        });

        //навигация по якорям в новости
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -120
        });
      }, 100);
    } else if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 0
        });

        //навигация по якорям в новости
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -30
        });
      }, 100);
    }
  }
});

//открепляем и перезапускаем прилипающий блок при повороте устройства
$(window).on("orientationchange", function(event) {
  if ($("#article-nav").length) {
    if ($("body").width() >= 768 && $("body").width() < 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 120
        });

        //навигация по якорям в новости
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -120
        });
      }, 100);
    } else if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 0
        });

        //навигация по якорям в новости
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -30
        });
      }, 100);
    }
  }
});
