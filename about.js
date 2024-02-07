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
    // Diğer kutuların üzerindeki vurguları kaldır
    boxes.forEach((otherBox) => {
      otherBox.classList.remove('clicked');
    });

    // Tıklanan kutuyu vurgula
    box.classList.add('clicked');
  });
});

  
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

  
 