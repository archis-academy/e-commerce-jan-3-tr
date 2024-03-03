const advertTrans = document.querySelectorAll(".advert-trans");
const advertPages = document.querySelectorAll(".advertisement-image-text-box");
let advertIndex = 0;
let advertInterval = setInterval(nextAdvert, 5000);
for (let i = 0; i < advertTrans.length; i++) {
  advertTrans[i].addEventListener("click", () => {
    advertIndex = i;
    clearInterval(advertInterval);
    advertInterval = setInterval(nextAdvert, 5000);
    console.log(advertInterval);
    for (let j = 0; j < advertTrans.length; j++) {
      advertTrans[j].classList.remove("default-trans");
      advertPages[j].classList.remove("default-advert");
    }
    advertTrans[i].classList.add("default-trans");
    advertPages[i].classList.add("default-advert");
  });
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1010) {
    asideBar.style.display = "inline-block";
    scrollBody.style.overflowY = "scroll";
    isBurgerOpen = !isBurgerOpen;
  } else {
    asideBar.style.display = "none";
    isBurgerOpen = !isBurgerOpen;
  }
});
function nextAdvert() {
  advertPages[advertIndex].classList.remove("default-advert");
  advertTrans[advertIndex].classList.remove("default-trans");
  advertIndex = (advertIndex + 1) % advertPages.length;
  advertPages[advertIndex].classList.add("default-advert");
  advertTrans[advertIndex].classList.add("default-trans");
}

/*Featured Product - Start*/
const fpDays = document.getElementById("fp-days");
const fpHours = document.getElementById("fp-hours");
const fpMinutes = document.getElementById("fp-minutes");
const fpSeconds = document.getElementById("fp-seconds");

let seconds = 86400;

function timer() {
  let days = Math.floor(seconds / 24 / 60 / 60);
  let hoursLeft = Math.floor(seconds - days * 86400);
  let hours = Math.floor(hoursLeft / 3600);
  let minutesLeft = Math.floor(hoursLeft - hours * 3600);
  let minutes = Math.floor(minutesLeft / 60);
  let remainingSeconds = seconds % 60;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  fpDays.innerText = twoDigits(days);
  localStorage.setItem("remainingDays", days);

  fpHours.innerText = twoDigits(hours);
  localStorage.setItem("remainingHours", hours);

  fpMinutes.innerText = twoDigits(minutes);
  localStorage.setItem("remainingMinutes", minutes);

  fpSeconds.innerText = twoDigits(remainingSeconds);
  localStorage.setItem("remainingSeconds", remainingSeconds);

  if (seconds === 0) {
    seconds = 86400;
  } else {
    seconds--;
  }
}

if (localStorage.getItem("remainingDays")) {
  let remainingDays = parseInt(localStorage.getItem("remainingDays"));
  let remainingHours = parseInt(localStorage.getItem("remainingHours"));
  let remainingMinutes = parseInt(localStorage.getItem("remainingMinutes"));
  let remainingSeconds = parseInt(localStorage.getItem("remainingSeconds"));
  let totalSeconds =
    remainingDays * 86400 +
    remainingHours * 3600 +
    remainingMinutes * 60 +
    remainingSeconds;
  seconds = totalSeconds;
}

setInterval("timer()", 1000);

/*Featured Product - End*/
const apiEndPointt = "https://fakestoreapi.com/products";
async function getUrunlerByCategory(kategori) {
  const responseUrunler = await fetch(`${apiEndPointt}?category=${kategori}`);
  const urunler = await responseUrunler.json();
  return urunler;
}
function indirimYap(fiyat, indirimYuzdesi) {
  return fiyat - (fiyat * indirimYuzdesi) / 100;
}
bestSellingProducts = [];
getUrunlerByCategory().then((urunler) => {
  bestSellingProducts.push(urunler[2], urunler[3], urunler[4], urunler[6]);
  const urunKart = document.querySelector(".cl-boxes");
  function returnStars(rate) {
    let stars = "";
    for (let i = 0; i < rate.toFixed(0); i++) {
      stars += `<img class="newproduckt-stars" src="images/Vector.png" />`;
    }
    return stars;
  }
  urunKart.innerHTML = bestSellingProducts
    .map(
      (urun) =>
        `<section class="productCard">
    <div class="box-img">
        <div class="column-icons">
          <div class="icon-box wishlist-click"> 
          <svg id="product-${urun.id}" onclick="favoriteProduct(${
          urun.id
        })" class="icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="products-${
          urun.id
        }" d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div class="icon-box">
          <svg id="productShopCart-${urun.id}" onclick="shopCartProduct(${
          urun.id
        })" class="basket-icon" fill="#000000" width="32px" height="32px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"/> </g>

</svg>

<svg id="checkIcon-${urun.id}" class="check-icon " onclick="shopCartProduct(${
          urun.id
        })" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"/> <g> <path d="M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414"/> </g> </g>

</svg>
          </div>

        </div>
        <img class="product-images" src="${urun.image}" alt="${urun.title}" />
    </div>
    <div><p class="product-information">${urun.title
      .substring(0, 20)
      .concat(" ...")} </p>
    </div>
    <div class="prices">
      <p class="discounted-price">${indirimYap(urun.price, 20).toFixed(2)}₺</p>
      <strike class="price">${urun.price.toFixed(2)}₺</strike>
    </div>
    <div class="stars-icons">
      ${returnStars(urun.rating.rate)}
      <p class="point">(65)</p>
    </div>
    
  </section>`
    )
    .join("");
  defaultFavoriteProduct();
  defaultShopingProduct();
});
const todaysProduct = document.querySelector(".todays-frame-577");
const todaysBtnRight = document.querySelector(".todays-frame-726-btn-right");
const todaysBtnLeft = document.querySelector(".todays-frame-726-btn-left");

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
    stars += `<img src="images/Vector.png" >`;
  }
  return stars;
}

let todaysCurrentProductsAmountFirst = 0;
let todaysCurrentProductsAmountSecond = 4;

let todaysProducts = [];

async function urunleriGetir() {
  const response = await fetch("https://fakestoreapi.com/products");
  const todaysData = await response.json();

  urunler = todaysData.slice(
    todaysCurrentProductsAmountFirst,
    todaysCurrentProductsAmountSecond
  );
  todaysProduct.innerHTML = urunler
    .map((product) => {
      return ` 
<section class="productCard">
    <div class="box-img">
        <div class="column-icons">
          <div class="icon-box wishlist-click"> 
          <svg id="product-${product.id}" onclick="favoriteProduct(${
        product.id
      })" class="icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="products-${
        product.id
      }" d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div class="icon-box">
          <svg id="productShopCart-${product.id}" onclick="shopCartProduct(${
        product.id
      })" class="basket-icon" fill="#000000" width="32px" height="32px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"/> </g>

</svg>

<svg id="checkIcon-${
        product.id
      }" class="check-icon " onclick="shopCartProduct(${
        product.id
      })" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"/> <g> <path d="M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414"/> </g> </g>

</svg>
          </div>

        </div>
        <img class="product-images" src="${product.image}" alt="${
        product.title
      }" />
    </div>
    <div><p class="product-information">${product.title
      .substring(0, 20)
      .concat(" ...")} </p>
    </div>
    <div class="prices">
      <p class="discounted-price">${indirimYap(product.price, 20).toFixed(
        2
      )}₺</p>
      <strike class="price">${product.price.toFixed(2)}₺</strike>
    </div>
    <div class="stars-icons">
      ${todaysReturnStars(product.rating.rate)}
      <p class="point">(65)</p>
    </div>
  </section>
     `;
    })
    .join("");
}

todaysBtnLeft.addEventListener("click", todaysChangeProducts);
todaysBtnRight.addEventListener("click", todaysChangeProducts);

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

urunleriGetir();
const newProductsContainer = document.querySelector("#newProductsContainer");

let currentProductsAmountFirst = 0;
let currentProductsAmountSecond = 8;
let currentProducts = [];
async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  function returnStars(rate) {
    let stars = "";
    for (let i = 0; i < rate.toFixed(0); i++) {
      stars += `<img class="newproduckt-stars" src="images/Vector.png" />`;
    }
    return stars;
  }

  urunler = data.slice(currentProductsAmountFirst, currentProductsAmountSecond);

  newProductsContainer.innerHTML = urunler
    .map((product) => {
      return `
      <section class="productCard">
    <div class="box-img">
        <div class="column-icons">
          <div class="icon-box wishlist-click"> 
          <svg id="product-${product.id}" onclick="favoriteProduct(${
        product.id
      })" class="icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="products-${
        product.id
      }" d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div class="icon-box">
          <svg id="productShopCart-${product.id}" onclick="shopCartProduct(${
        product.id
      })" class="basket-icon" fill="#000000" width="32px" height="32px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"/> </g>

</svg>

<svg id="checkIcon-${
        product.id
      }" class="check-icon " onclick="shopCartProduct(${
        product.id
      })" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"/> <g> <path d="M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414"/> </g> </g>

</svg>
          </div>

        </div>
        <img class="product-images" src="${product.image}" alt="${
        product.title
      }" />
    </div>
    <div><p class="product-information">${product.title
      .substring(0, 20)
      .concat(" ...")} </p>
    </div>
    <div class="prices">
      <p class="discounted-price">${indirimYap(product.price, 20).toFixed(
        2
      )}₺</p>
      <strike class="price">${product.price.toFixed(2)}₺</strike>
    </div>
    <div class="stars-icons">
      ${returnStars(product.rating.rate)}
      <p class="point">(65)</p>
    </div>
  </section>
      `;
    })
    .join("");
  defaultFavoriteProduct();
  defaultShopingProduct();
}
fetchProducts();
let cartProducts = [];

let wishlistProducts = [];
const changeBtnLeft = document.querySelector("#changeBtnLeft");
const changeBtnRight = document.querySelector("#changeBtnRight");

function changeProducts() {
  if (currentProductsAmountSecond === 16) {
    currentProductsAmountFirst = 0;
    currentProductsAmountSecond = 8;
  } else {
    currentProductsAmountFirst += 8;
    currentProductsAmountSecond += 8;
  }
  fetchProducts();
}

function shopCartProduct(productId) {
  document
    .querySelectorAll(`#productShopCart-${productId}`)
    .forEach((e) => (e.style.display = "none"));
  document
    .querySelectorAll(`#checkIcon-${productId}`)
    .forEach((a) => (a.style.display = "inline-block"));
  const newShopingProduct = urunler.find((product) => product.id === productId);

  const unparsedProducts = localStorage.getItem("cartProducts");

  if (unparsedProducts) {
    cartProducts = JSON.parse(unparsedProducts);
  }

  const isMatch = cartProducts.find(
    (product) => product.id === newShopingProduct.id
  );

  if (!isMatch) {
    const productsToAdd = [...cartProducts, newShopingProduct];

    localStorage.setItem("cartProducts", JSON.stringify(productsToAdd));

    cartProducts = productsToAdd;
  } else {
    shopingDeleteProduct(productId);
  }
  noticeShopingCart();
}

function shopingDeleteProduct(productId) {
  document
    .querySelectorAll(`#productShopCart-${productId}`)
    .forEach((e) => (e.style.display = "inline-block"));
  document
    .querySelectorAll(`#checkIcon-${productId}`)
    .forEach((a) => (a.style.display = "none"));
  const newShopingProduct = cartProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("cartProducts", JSON.stringify(newShopingProduct));
  cartProducts = newShopingProduct;
  noticeShopingCart();
}
function defaultShopingProduct(productId) {
  const defaultShoping = localStorage.getItem("cartProducts");
  cartProducts = JSON.parse(defaultShoping) || [];
  cartProducts.forEach((i) => {
    productId = i.id;
    document
      .querySelectorAll(`#productShopCart-${productId}`)
      .forEach((e) => (e.style.display = "none"));
    document
      .querySelectorAll(`#checkIcon-${productId}`)
      .forEach((a) => (a.style.display = "inline-block"));
  });
}

function favoriteProduct(productId) {
  document
    .querySelectorAll(`#product-${productId}`)
    .forEach((e) => (e.style.fill = "red"));
  document
    .querySelectorAll(`#products-${productId}`)
    .forEach((a) => (a.style.stroke = "red"));

  const newWishlistProduct = urunler.find(
    (product) => product.id === productId
  );

  const unparsedProducts = localStorage.getItem("wishlistProducts");

  if (unparsedProducts) {
    wishlistProducts = JSON.parse(unparsedProducts);
  }

  const isMatch = wishlistProducts.find(
    (product) => product.id === newWishlistProduct.id
  );

  if (!isMatch) {
    const productsToAdd = [...wishlistProducts, newWishlistProduct];

    localStorage.setItem("wishlistProducts", JSON.stringify(productsToAdd));

    wishlistProducts = productsToAdd;
  } else {
    deleteProduct(productId);
  }
  noticeWishlist();
}
function deleteProduct(productId) {
  document
    .querySelectorAll(`#product-${productId}`)
    .forEach((x) => (x.style.fill = "none"));
  document
    .querySelectorAll(`#products-${productId}`)
    .forEach((y) => (y.style.stroke = "black"));
  const newWishlistProducts = wishlistProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("wishlistProducts", JSON.stringify(newWishlistProducts));
  wishlistProducts = newWishlistProducts;
  noticeWishlist();
}

function defaultFavoriteProduct(productId) {
  const defaultWishlist = localStorage.getItem("wishlistProducts");
  wishlistProducts = JSON.parse(defaultWishlist) || [];
  wishlistProducts.forEach((i) => {
    productId = i.id;
    document
      .querySelectorAll(`#product-${productId}`)
      .forEach((e) => (e.style.fill = "red"));
    document
      .querySelectorAll(`#products-${productId}`)
      .forEach((a) => (a.style.stroke = "red"));
  });
}
