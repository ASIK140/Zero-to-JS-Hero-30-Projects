let counter = 0;
let direction = 1; // 1 for forward, -1 for reverse
const images = document.querySelectorAll(".slider");

// Position each image side by side
images.forEach((image, index) => {
  image.style.left = `${index * 100}%`;
});

// Slide function
function slideImage() {
  images.forEach(image => {
    image.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// Auto slide with reverse at ends
setInterval(() => {
  counter += direction;

  // If we reach the last image, reverse direction
  if (counter === images.length - 1) {
    direction = -1;
  }
  // If we reach the first image, go forward
  else if (counter === 0) {
    direction = 1;
  }
  console.log(-(counter*100));
  
  slideImage();
}, 4000);
