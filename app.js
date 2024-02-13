const todaysProduct = document.querySelector(".todays-frame-577");
const todaysBtnRight = document.querySelector(".todays-frame-726-btn-right");
const todaysBtnLeft = document.querySelector(".todays-frame-726-btn-left");
const todaysAllProduct = document.querySelector(".todays-btn");
const todaysAddToWishlistToButton = document.querySelector(
  ".todays-frame-575-wishlist-img"
);

function todaysUpdateCountdown() {
  let todaysCurrent = new Date();
  let todaysRemainingTime = todaysCurrent.getTime();

  let todaysDays = Math.floor(todaysRemainingTime / (1000 * 60 * 60 * 24));
  let todaysHours = Math.floor(
    (todaysRemainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let todaysMins = Math.floor(
    (todaysRemainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  let todaysSecs = Math.floor((todaysRemainingTime % (1000 * 60)) / 1000);

  document.querySelector("#todays-countdown-days").textContent = todaysDays;
  document.querySelector("#todays-countdown-hours").textContent = todaysHours;
  document.querySelector("#todays-countdown-minutes").textContent = todaysMins;
  document.querySelector("#todays-countdown-seconds").textContent = todaysSecs;
}

todaysUpdateCountdown();
setInterval(todaysUpdateCountdown, 1000);

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
        <img class="todays-frame-575-wishlist-img" src="images/wishlist-icon.svg" >
      </div>
      <div>
        <img class="todays-frame-575-img" src="images/cart-icon.svg" >
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

async function urunleriGetir() {
  const response = await fetch("https://fakestoreapi.com/products");
  const todaysData = await response.json();
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
        <img class="todays-frame-575-wishlist-img" src="images/wishlist-icon.svg" >
      </div>
      <div>
        <img class="todays-frame-575-img" src="images/cart-icon.svg" >
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
  if (todaysCurrentProductsAmountSecond === 24) {
    todaysCurrentProductsAmountFirst = 0;
    todaysCurrentProductsAmountSecond = 4;
  } else {
    todaysCurrentProductsAmountFirst += 4;
    todaysCurrentProductsAmountSecond += 4;
  }
  urunleriGetir();
}
