//script for dropdow menu
function myFunction(){
	document.getElementById("menuDeroulent").classList.toggle("show");
}

window.onclick = function(event) {
if(!event.target.matches(".dropLine")){
	var dropdowns = document.getElementsByClassName("sousMenuContenu");
	var i;
	for (i=0;i<dropdowns.length;i++){
		var openDropDown = dropdowns[i];
		if(openDropDown.classList.contains("show")){
			openDropDown.classList.remove("show");
		}
	}
}}

// slider script
var slideIndex = 1;
slider(slideIndex);

// Next/previous controls
function plusSlides(n) {
 slider(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
 slider(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
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