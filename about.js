

const wishlistProducts = JSON.parse(localStorage.getItem("urunler"));

function cardColor(click, index) {
  const box = document.querySelectorAll(".box");

  box.forEach(function (card) {
    card.classList.remove("active");
  });

  click.classList.add("active");

 
  
}

const urunKart = document.querySelector(".container");
urunKart.innerHTML = wishlistProducts.map((urun) =>
  `
  <div class="box" onclick="cardColor(this, ${urun.id - 1})">
    <img class="orange" src="${urun.image}" alt="">
    <p class="price">${urun.price}</p>
    <p class="sl">${urun.title.substring(0, 20).concat("...")}</p>
  </div>
`
).join("");

const images = [
  "images/04-perfume.jpg",
  "images/01-playstation.jpg",
  "images/06-customer.png",
];

function changeImage(index) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = images[index];
  changeImage(index);
}
