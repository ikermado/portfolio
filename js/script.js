//IMAGE MODAL

// create references to the modal...
var modal = document.getElementById('my-modal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('img-01');
// the image in the modal
var modalImg = document.getElementById("modal-img");
// and the caption in the modal
// var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("modal-button-close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-button-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var span = document.getElementsByClassName("modal-button-close")[0];

span.onclick = function() {
  modal.style.display = "none";
}



//IMAGE CAROUSEL

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sl-slideshow");
  let dots = document.getElementsByClassName("sl-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}