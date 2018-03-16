var showMenu = document.getElementById("show-menu-btn");
var hideMenu = document.getElementById("hide-menu-btn");

showMenu.addEventListener('click', function() {
  document.getElementById("menu").style.width = "100%";
});

hideMenu.addEventListener('click', function() {
  document.getElementById("menu").style.width = "0";
});
