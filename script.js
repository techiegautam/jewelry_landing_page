let slideIndex = 0; // Start at the first slide
showSlides(); // Show the first slide when the page loads

// Function to show slides
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slideIndex++; // Move to the next slide
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset to first slide
  }
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to change slides manually
function plusSlides(n) {
  slideIndex += n; // Change the slide index
  let slides = document.getElementsByClassName("slide");
  
  // Loop back if index is out of bounds
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  
  // Hide all slides and show the current one
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
}
