$(document).ready(
  ()=>{
    console.log("test");
  }
);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("img-responsive");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function FormKontrol(form){
  var name = form.name.value;
  var mail = form.email.value;
  var masaj = form.masaj.value;
  console.log(name+mail+masaj);
}
