const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
let currentIndex = 0;
const totalImages = document.querySelectorAll('.slider-img').length;
const sliderWrapper = document.querySelector('.slider-wrapper');
const slideDuration = 3000; // Duration of each slide in milliseconds

// Function to slide images
function slideImages() {
    // Calculate the transform value to move by 100% (one image width)
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the start after the last image
    
    // Apply the transform to move the wrapper
    sliderWrapper.style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Clone the first image to the end for seamless loop
function cloneImages() {
    const firstImage = document.querySelector('.slider-img');
    const clone = firstImage.cloneNode(true);
    sliderWrapper.appendChild(clone);
}

// Function to reset the slider for an infinite loop effect
function resetSlider() {
    if (currentIndex === totalImages) {
        sliderWrapper.style.transition = 'none'; // Disable transition during reset
        sliderWrapper.style.transform = 'translateX(0)'; // Reset the position
        currentIndex = 0; // Reset the index
        setTimeout(() => {
            sliderWrapper.style.transition = 'transform 1s ease-in-out'; // Re-enable transition
        }, 50); // Allow a small time for reset
    }
}

// Initialize cloning of the first image
cloneImages();

// Slide the images at regular intervals
setInterval(() => {
    slideImages();
    resetSlider();
}, slideDuration);
