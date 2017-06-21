// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
$(window).on('load', function() {

  var menuButton = document.getElementById('menuButton');
  menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      e.preventDefault();
  });

  console.log("Hola vato!");
  
});
