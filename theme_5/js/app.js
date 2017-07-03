// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(window).on('load', function() {

  var mm_nav = $('.mm-nav');
  var body_tag = $('body');

  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      mm_nav.toggleClass('show');
      body_tag.toggleClass('no-scroll');
      e.preventDefault();
  });

  console.log("Hola vato!");

});
