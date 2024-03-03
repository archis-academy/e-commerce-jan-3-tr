const elemanlar = document.querySelectorAll(".services-categories");

elemanlar.forEach((link) => {
  link.addEventListener("click", () => {
    elemanlar.forEach((link) => {
      link.style.backgroundColor = "white";
    });
    link.style.backgroundColor = "#DB4444";
  });
});

const buttons = document.querySelectorAll(".round-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((otherBox) => {
      otherBox.classList.remove("active");
    });
    button.classList.add("active");
  });
});

const imageSets = [
  [
    "images/about-images/customer-first.png",
    "images/about-images/customer-second.png",
    "images/about-images/customer-third.png",
  ],
  [
    "images/about-images/customer-first.png",
    "images/about-images/customer-second.png",
    "images/about-images/customer-third.png",
  ],
  [
    "images/about-images/customer-first.png",
    "images/about-images/customer-second.png",
    "images/about-images/customer-third.png",
  ],
];

const roundButtons = document.querySelectorAll(".round-button");
const columnImages = document.querySelectorAll(".column-img");
let currentImageSetIndex = 0;
updateColumnImages();
function updateColumnImages() {
  for (let i = 0; i < columnImages.length; i++) {
    columnImages[i].src = imageSets[currentImageSetIndex][i];
  }
}
let imgIndex = 0;
roundButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentImageSetIndex = index;
    updateColumnImages();
  });
});
