var images = ["bear_toy", "train_toy", "plane_toy", "ship_toy"];
var i = 0;

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => {
  changeImage(-1);
});

rightArrow.addEventListener("click", () => {
  changeImage(1);
});

function changeImage(value) {
  i += value;

  if (i < 0) {
    i = images.length - 1;
  }
  else if (i > images.length - 1) {
    i = 0;
  }

  document.getElementById("featuredToy").src = "images/" + images[i] + ".png";
}
