let slideIndex = 1; // Start with the first slide

// Initial call to display the first slide
showSlides(slideIndex);

// Function to change the slide index
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Main function to show the correct slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");

  // Loop back to the first slide if we go past the end
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Loop to the last slide if we go before the start
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }

  // Show the current slide
  slides[slideIndex - 1].classList.add("active-slide");
}

function dismissBanner() {
  const banner = document.querySelector(".fixed-promo-banner");
  if (banner) {
    // Add the 'hidden' class to trigger the CSS transition
    banner.classList.add("hidden");

    // Optional: Set a cookie or local storage here
    // to keep the banner dismissed on future page loads
    // localStorage.setItem('promoBannerDismissed', 'true');
  }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
