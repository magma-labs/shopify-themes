// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(window).on('load', function() {

  $('.carousel').carousel();

  var mobileNav = $('.mm-nav');
  var bodyTag = $('body');
  var header = $('.main-header');
  var logo = $('.logo');
  var itemDelete = $('.item-delete');
  var itemPlus = $('.item-plus');

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

  itemDelete.click(function() {
    console.log('Delete action.');
    $('#item01').remove();
  });

  itemPlus.click(function() {
    var count = parseInt($(this).text());
    count = count + 1;
    $(this).text(count);
    $(this).append('<span class="triangle"></span>');
    console.log('Add action');
    console.log(count);
  });

  console.log("Hola vato!");

});
