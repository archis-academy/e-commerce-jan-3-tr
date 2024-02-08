const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        boxes.forEach((box) => 
        box.classList.remove("active"));
        box.classList.add("active");
    })
});




boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((otherBox) => {
      otherBox.classList.remove('clicked');
    });

    box.classList.add('clicked');
  });
});


const buttons = document.querySelectorAll(".round-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((otherBox)=> {
      otherBox.classList.remove('active');
    });
    button.classList.add('active');
  })
})
  
const imageSets = [
    ["images/image 46.png", "images/image 47.png", "images/image 51.png"],
    ["images/resim1.jpg", "images/resim2.jpg", "images/resim3.webp"],
    ["images/reism3.jpg", "images/image 46.png", "images/image 51.png"]
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

  
 