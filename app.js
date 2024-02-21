// (Yakup/E--2-Homepage-Today's-Products) start
const todaysProduct = document.querySelector(".todays-frame-577");
const todaysBtnRight = document.querySelector(".todays-frame-726-btn-right");
const todaysBtnLeft = document.querySelector(".todays-frame-726-btn-left");
const todaysAllProduct = document.querySelector(".todays-btn");

function counterUpdate() {
  var discountEndDate = localStorage.getItem("discountEndDate");

  if (!discountEndDate) {
    discountEndDate = new Date();
    discountEndDate.setDate(discountEndDate.getDate() + 4);
    localStorage.setItem("discountEndDate", discountEndDate);
  } else {
    discountEndDate = new Date(discountEndDate);
  }

  var now = new Date();

  if (discountEndDate < now) {
    discountEndDate = new Date();
    discountEndDate.setDate(discountEndDate.getDate() + 4);
    localStorage.setItem("discountEndDate", discountEndDate);
  }

  var remainingTime = discountEndDate - now;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("todays-countdown-days").innerHTML =
    twoDigits(days) + ":";
  document.getElementById("todays-countdown-hours").innerHTML =
    twoDigits(hours) + ":";
  document.getElementById("todays-countdown-minutes").innerHTML =
    twoDigits(minutes) + ":";
  document.getElementById("todays-countdown-seconds").innerHTML =
    twoDigits(seconds);
}

counterUpdate();
var counterUpdateBetween = setInterval(counterUpdate, 1000);

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
    <div class="todays-discount-percent">-50%</div>
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
    <div class="frame-567-discount">
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
    <div class="todays-discount-percent">-50%</div>
    <img src="${product.image}" alt="">
    <div class="todays-frame-575">
      <div>
      <svg id="product-${product.id}" onclick="favoriteProduct(${
      product.id
    })" class="icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="products-${
      product.id
    }" d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
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
    <div class="frame-567-discount">
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
  document.getElementById(`product-${productId}`).style.fill = "red";
  document.getElementById(`products-${productId}`).style.stroke = "red";
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
  document.getElementById(`product-${productId}`).style.fill = "none";
  document.getElementById(`products-${productId}`).style.stroke = "black";
  const wishlistProducts =
    JSON.parse(localStorage.getItem("wishlistProducts")) || [];
  const newWishlistProducts = wishlistProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("wishlistProducts", JSON.stringify(newWishlistProducts));
}

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
urunleriGetir();

// (Yakup/E--2-Homepage-Today's-Products) end
