var images = ['bear_toy', 'train_toy', 'plane_toy', 'ship_toy'];
var images2 = ['train_toy', 'bear_toy', 'ship_toy', 'plane_toy'];
var imagesGroup = [images, images2];

var prevButton = document.getElementById('prevNavigator');
var nextButton = document.getElementById('nextNavigator');
var prevButtonTop = document.getElementById('prevNavigatorTop');
var nextButtonTop = document.getElementById('nextNavigatorTop');
var closeDialogBtn = document.getElementById('closeDialog');

prevButton.disabled = true;
prevButtonTop.disabled = true;

function changeGroup(value) {
  var id;
  var route;

  if(value === 0) {
    prevButton.disabled = true;
    prevButtonTop.disabled = true;
    nextButton.disabled = false;
    nextButtonTop.disabled = false;
  }
  else if (value == 1) {
    nextButton.disabled = true;
    nextButtonTop.disabled = true;
    prevButton.disabled = false;
    prevButtonTop.disabled = false;
  }

  for (var i = 0, j = 1; i < images.length; i++, j++) {
    id = 'toy' + j.toString();
    route = '/images/' + imagesGroup[value][i] + '.png';
    document.getElementById(id).src = route;
  }
}

prevButtonTop.addEventListener('click', function() {
  changeGroup(0);
});

nextButtonTop.addEventListener('click', function() {
  changeGroup(1);
});

prevButton.addEventListener('click', function() {
  changeGroup(0);
});

nextButton.addEventListener('click', function() {
  changeGroup(1);
});

closeDialogBtn.addEventListener('click', function() {
  document.getElementById('ship-info-dialog').style.display = 'none';
});
