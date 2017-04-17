var body;
var lightboxImg;
var lightbox;

window.onload = function () {
  GetImages();
  body = document.getElementById('body')
  lightbox = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightboxImg');

  lightbox.style.display = "none";
  lightbox.addEventListener("click", function() {
    ViewLightBox(event);
  });
}


function GetImages() {
  var gallery = document.getElementsByClassName('images');

  for (var n = 0; n < gallery.length; n++) {
    var images = gallery[n].childNodes;

    for (var i = 0; i < images.length; i++) {
      // console.log(images[i]);
      if (images[i].tagName == "DIV") {
        console.log(images[i].childNodes[0]);
        images[i].childNodes[0].addEventListener("click", function() {
          ViewLightBox(event);
        });
      }
    }
  }
}

function ViewLightBox(event) {

  var img = event.target;
  img = img.src;

  lightboxImg.setAttribute('src', img);

  var lightboxDisp = (lightbox.style.display == "none");

  lightbox.style.display = (lightboxDisp) ? "flex" : "none";
  body.style.overflowY = (lightboxDisp) ? "hidden" : "scroll";


}
