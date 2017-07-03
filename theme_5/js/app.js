// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(window).on('load', function() {

  var mobileNav = $('.mm-nav');
  var bodyTag = $('body');
  var header = $('.header');
  var logo = $('.logo');

  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      mobileNav.toggleClass('show');
      bodyTag.toggleClass('no-scroll');
      header.toggleClass('bg-white');
      logo.toggleClass('mobile-logo-one');
      logo.toggleClass('mobile-logo-two');
      e.preventDefault();
  });

  console.log("Hola vato!");

});
