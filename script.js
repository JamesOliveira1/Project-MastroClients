var slideIndex = 1;



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

  document.addEventListener("DOMContentLoaded", function() {
    showSlides(1);
  });


////////////////////////////////////////////////


function navhide() {
 

if ( document.getElementById("nav").classList.contains('navhide') ){

  document.getElementById("nav").classList.remove('navhide');
}
else {

  document.getElementById("nav").classList.add('navhide');
}
}

////////////////////////////////////////////////

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
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

  document.addEventListener("DOMContentLoaded", function() {
    showSlides2(1);
  });

////////////////////////////////////////////////

window.addEventListener('load', function () {
  var el = document.querySelectorAll('img.lightense');
  Lightense(el);
}, false);
