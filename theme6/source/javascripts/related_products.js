
var images = ['bear_toy', 'train_toy', 'plane_toy', 'ship_toy'];
var i = 0;

function changeImage(value) {
  i += value;

  if (i < 0) {
    i = images.length - 1;
  }
  else if (i > images.length - 1) {
    i = 0;
  }

  document.getElementById('featuredToy').src = 'images/' + images[i] + '.png';
}

var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');

leftArrow.addEventListener('click', function() {
  changeImage(-1);
});

rightArrow.addEventListener('click', function() {
  changeImage(1);
});
