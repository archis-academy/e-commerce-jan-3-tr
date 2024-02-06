const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        boxes.forEach((box) => 
        box.classList.remove("active"));
        box.classList.add("active");
    })
});

 
  
const imageSets = [
    ["images/image 46.png", "images/image 47.png", "images/image 51.png"],
    ["images/iphone-pink.png", "images/login-image.png", "images/qr-code.png"],
    ["images/playstation5.png", "images/image 46.png", "images/image 51.png"]
  ];
  
  const roundButtons = document.querySelectorAll(".round-button");
  const columnImages = document.querySelectorAll(".column-img");
  
  const imagesPerSet = 3;
  
  function updateColumnImages(startIndex) {
    for (let i = 0; i < columnImages.length; i++) {
      const imageIndex = startIndex + i;
      if (imageIndex < imageSets[currentImageSetIndex].length) {
        columnImages[i].src = imageSets[currentImageSetIndex][imageIndex];
      } else {
        columnImages[i].src = ""; 
      }
    }
  }
  
  let currentImageSetIndex = 0;
  
  roundButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentImageSetIndex = index; 
      updateColumnImages(0);
    });
  });
  