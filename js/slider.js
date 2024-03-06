let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

prev.onclick = function() {
    let slides = document.getElementsByClassName("mySlides"); 
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      if (slideIndex>1)
      slideIndex--;
      if (slideIndex < slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
  };

  next.onclick = function() {
    let slides = document.getElementsByClassName("mySlides"); 
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
     slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
  };