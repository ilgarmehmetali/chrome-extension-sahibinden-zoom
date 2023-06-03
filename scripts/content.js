
let scale = 1;
var leftValue = 0;
var topValue = 0;
var coefficient = 10;

const image = document.querySelector('#megaPhotoBox > div.megaPhotos.clearfix > div.megaPhotoContainer > div > div > div > img');
image.style.position = "relative";

function resetImageStyle(){
  image.style.transform = "scale(1)";
  image.style.left = "0px";
  image.style.top = "0px";
  scale = 1;
  leftValue = 0;
  topValue = 0;
}

document.addEventListener("wheel", (event) => {
  scale += event.deltaY * -0.01;

  // Restrict min scale
  scale = Math.max(1, scale);

  // Restrict max scale
  scale = Math.min(scale, 6);

  // Apply scale transform
  image.style.transform = `scale(${scale})`;
});

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "a") {
    leftValue--;
  }
  else if (event.key === "d") {
    leftValue++;
  }
  else if (event.key === "w") {
    topValue--;
  }
  else if (event.key === "s") {
    topValue++;
  }
  image.style.left = (leftValue * coefficient) + "px";
  image.style.top = (topValue * coefficient) + "px";
});


const overlay = document.querySelector('#cboxOverlay');
var observer = new MutationObserver(function(mutations) {
  if(overlay.style.display == "none") {
    resetImageStyle();
  }
});
observer.observe(overlay, { attributes : true, attributeFilter : ['style'] });
