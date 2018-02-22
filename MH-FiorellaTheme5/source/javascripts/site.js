// This is where it all goes :)
function openNav() {
    document.getElementById("mySidenav").style.width = "95%";
    document.getElementById("logo").src = "../images/home/logo_fiorella_menu.png";
    document.getElementById("logo").style.zIndex = "10";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("logo").src = "../images/home/wlogo_fiorella_mobil.png";
    document.getElementById("logo").style.zIndex = "2";
}
