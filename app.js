const todaysProduct = document.querySelector(".todays-frame-577");
const todaysBtnRight = document.querySelector(".todays-frame-726-btn-right");
const todaysBtnLeft = document.querySelector(".todays-frame-726-btn-left");
const todaysAllProduct = document.querySelector(".todays-btn");

var indirimBitisTarihi = localStorage.getItem("indirimBitisTarihi");
if (!indirimBitisTarihi) {
  indirimBitisTarihi = new Date();
  indirimBitisTarihi.setDate(indirimBitisTarihi.getDate() + 4);
  localStorage.setItem("indirimBitisTarihi", indirimBitisTarihi);
} else {
  indirimBitisTarihi = new Date(indirimBitisTarihi);
}

function sayaçGüncelle() {
  var şuAn = new Date();
  var kalanZaman = indirimBitisTarihi - şuAn;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  var gün = Math.floor(kalanZaman / (1000 * 60 * 60 * 24));
  var saat = Math.floor(
    (kalanZaman % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var dakika = Math.floor((kalanZaman % (1000 * 60 * 60)) / (1000 * 60));
  var saniye = Math.floor((kalanZaman % (1000 * 60)) / 1000);

  document.getElementById("todays-countdown-days").innerHTML = twoDigits(gün);
  document.getElementById("todays-countdown-hours").innerHTML = twoDigits(saat);
  document.getElementById("todays-countdown-minutes").innerHTML =
    twoDigits(dakika);
  document.getElementById("todays-countdown-seconds").innerHTML =
    twoDigits(saniye);
}

var sayaçGüncellemeAralığı = setInterval(sayaçGüncelle, 1000);

function productCreateHeading(productHeading) {
  const returnHeading =
    productHeading.length > 15
      ? productHeading.substring(0, 15).concat("...")
      : productHeading.product.title;
  return returnHeading;
}

function todaysReturnStars(rate) {
  let stars = "";
  for (let i = 0; i < rate.toFixed(0); i++) {
    stars += `<img src="images/Vector-star.svg" >`;
  }
  return stars;
}

async function showAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const todaysData = await response.json();
  const productHtmlArray = todaysData.map((product) => {
    return ` 
<div class="cart-with-flat-discover">
  <div class="cart-frame-570">
    <div class="todays-discont-percent">-50%</div>
    <img src="${product.image}" alt="">
    <div class="todays-frame-575">
      <div>
        <img onclick="favoriteProduct(${
          product.id
        })"  class="todays-frame-575-wishlist-img" src="images/wishlist-icon.svg" >
      </div>
      <div>
        <img onclick="todaysSellCartProduct(${
          product.id
        })"  class="todays-frame-575-img" src="images/cart-icon.svg" >
      </div>
    </div>
  </div>
  <div class="cart-frame-569">
    <h2>${productCreateHeading(product.title)}</h2>
    <div class="frame-567-discont">
    <p>${product.price - product.price * 0.5}</p>
    <s>${product.price}</s>
    </div>
    <div class="frame-566-star-comment">
    <div class="frame-566-star">
    ${todaysReturnStars(product.rating.rate)}
    </div>
      <p>(${product.rating.count})</p>
    </div>
  </div>
</div>`;
  });
  todaysProduct.innerHTML = productHtmlArray.join("");
}
let todaysCurrentProductsAmountFirst = 0;
let todaysCurrentProductsAmountSecond = 4;

let todaysProducts = [];

async function urunleriGetir() {
  const response = await fetch("https://fakestoreapi.com/products");
  const todaysData = await response.json();
  todaysProducts = todaysData;

  const currentTodaysProducts = todaysData.slice(
    todaysCurrentProductsAmountFirst,
    todaysCurrentProductsAmountSecond
  );
  const productHtmlArray = currentTodaysProducts.map((product) => {
    return ` 
<div class="cart-with-flat-discover">
  <div class="cart-frame-570">
    <div class="todays-discont-percent">-50%</div>
    <img src="${product.image}" alt="">
    <div class="todays-frame-575">
      <div>
        <img onclick="favoriteProduct(${
          product.id
        })" class="todays-frame-575-wishlist-img" fill="#000000" src="images/wishlist-icon.svg" >
      </div>
      <div>
        <img onclick="todaysSellCartProduct(${
          product.id
        })" class="todays-frame-575-img" src="images/cart-icon.svg" >
      </div>
    </div>
  </div>
  <div class="cart-frame-569">
    <h2>${productCreateHeading(product.title)}</h2>
    <div class="frame-567-discont">
      <p>${product.price - product.price * 0.5}</p>
      <s>${product.price}</s>
    </div>
    <div class="frame-566-star-comment">
    <div class="frame-566-star">
      ${todaysReturnStars(product.rating.rate)}
      </div>
      <p>(${product.rating.count})</p>
    </div>
  </div>
</div>`;
  });
  todaysProduct.innerHTML = productHtmlArray.join("");
}
showAllProducts();
urunleriGetir();

todaysBtnLeft.addEventListener("click", todaysChangeProducts);
todaysBtnRight.addEventListener("click", todaysChangeProducts);
todaysAllProduct.addEventListener("click", showAllProducts);

function todaysChangeProducts() {
  if (todaysCurrentProductsAmountSecond === 20) {
    todaysCurrentProductsAmountFirst = 0;
    todaysCurrentProductsAmountSecond = 4;
  } else {
    todaysCurrentProductsAmountFirst += 4;
    todaysCurrentProductsAmountSecond += 4;
  }
  urunleriGetir();
}

function favoriteProduct(productId) {
  const wishlistProducts =
    JSON.parse(localStorage.getItem("wishlistProducts")) || [];

  const wishlistProduct = wishlistProducts.find(
    (product) => product.id === productId
  );

  if (!wishlistProduct) {
    const productToAdd = todaysProducts.find(
      (product) => product.id === productId
    );
    const newWishlistProducts = [...wishlistProducts, productToAdd];
    localStorage.setItem(
      "wishlistProducts",
      JSON.stringify(newWishlistProducts)
    );
  } else {
    deleteWishlistProduct(productId);
  }
}

function deleteWishlistProduct(productId) {
  const wishlistProducts =
    JSON.parse(localStorage.getItem("wishlistProducts")) || [];
  const newWishlistProducts = wishlistProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("wishlistProducts", JSON.stringify(newWishlistProducts));
}
//! cart product

function todaysSellCartProduct(productId) {
  const todaysSellProducts =
    JSON.parse(localStorage.getItem("cartProducts")) || [];

  const todaysCartProduct = todaysSellProducts.find(
    (product) => product.id === productId
  );

  if (!todaysCartProduct) {
    const productToAdd = todaysProducts.find(
      (product) => product.id === productId
    );
    const newTodaysSellProducts = [...todaysSellProducts, productToAdd];
    localStorage.setItem("cartProducts", JSON.stringify(newTodaysSellProducts));
  } else {
    deleteCartProduct(productId);
  }
}

function deleteCartProduct(productId) {
  const todaysSellProducts =
    JSON.parse(localStorage.getItem("cartProducts")) || [];
  const newTodaysSellProducts = todaysSellProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("cartProducts", JSON.stringify(newTodaysSellProducts));
}
