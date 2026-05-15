const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
];

// Write your code here
let index = 0;
let intervalId = null;

const img = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

// Manual forward
forwardBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});

// Manual backward
backwardBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
});

// Disable auto buttons
function disableAutoButtons() {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

// Enable auto buttons
function enableAutoButtons() {
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

// Auto forward
autoForwardBtn.addEventListener("click", () => {
  disableAutoButtons();

  intervalId = setInterval(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
  }, 2000);
});

// Auto backward
autoBackwardBtn.addEventListener("click", () => {
  disableAutoButtons();

  intervalId = setInterval(() => {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
  }, 2000);
});

// Stop auto movement
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  enableAutoButtons();
});
