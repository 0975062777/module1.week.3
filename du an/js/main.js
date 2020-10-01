var index = 1;
var changeImage = function () {
  var imgs = ["images/slider1.jpg", "images/slider2.jpg", "images/slider3.jpg"];
  document.getElementById("img").src = imgs[index];
  index++;
  if (index == 3) {
    index = 0;
  }
};
setInterval(changeImage, 1000);
