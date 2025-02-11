$('.slick-content').slick({

  dots: true,
  arrows: false,
  Infinity: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{

    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
  }

  ]
}

);

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $('.gototop').addClass('active'); $('header').addClass('active');
  }

  else {
    $('.gototop').removeClass('active'); $('header').removeClass('active');
  }
}

);

$('.trigger').click(function () {
  $('.trigger, .side-bar').toggleClass('active')
});