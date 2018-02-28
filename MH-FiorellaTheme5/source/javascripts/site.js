$('.slider').slick({
    autoplay: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [{
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
        }
    }]
});

document.getElementById("CloseMenu").addEventListener("click", () => {
  document.getElementById("logo").className = 'whiteLogo';
  document.getElementById('mySidenav').classList.remove('openSideNav');
  document.getElementById('mySidenav').classList.add('closeSideNav');
});

document.getElementById("OpenMenu").addEventListener("click", () => {
  document.getElementById('logo').className = 'pinkLogo';
  document.getElementById('mySidenav').classList.remove('closeSideNav');
  document.getElementById('mySidenav').classList.add('openSideNav');
});
