AOS.init({
 duration: 1200
});

(function($) {

  "use strict";

  $(window).on('load', function() {

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    // one page navigation
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

  });

  new WOW().init()

}(jQuery));
