// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(window).on('load', function() {

  var mm_nav = $('.mm-nav');

  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      mm_nav.toggleClass('show');
      e.preventDefault();
  });

  console.log("Hola vato!");

});
