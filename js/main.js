$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    speed: 700,
    easing: 'ease',
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});

jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    let elementClick = jQuery(this).attr("href")
    let destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });
});
