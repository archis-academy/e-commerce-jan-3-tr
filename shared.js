const apiEndPoint = "https://fakestoreapi.com/products";
const searchInput = document.querySelector("#searchInput");
async function getUrunlerByCategory(kategori) {
  const responseUrunler = await fetch(`${apiEndPoint}?category=${kategori}`);
  const urunler = await responseUrunler.json();
  return urunler;
}
function searchInputData(kategori) {
  const searchCategoryData = document.querySelector(".search-category-data");
  console.log(searchInput);
  getUrunlerByCategory(kategori).then((urunler) => {
    searchInput.addEventListener("search", (event) => {
      if (event.target.value == "") {
        searchCategoryData.style.display = "none";
      }
    });
    searchInput.addEventListener("keyup", (event) => {
      searchCategoryData.style.display = "block";

      if (event.target.value == "") {
        searchCategoryData.style.display = "none";
      }
      const filteredProducts = urunler.filter((urun) => {
        return urun.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      if (filteredProducts.length == 0) {
        searchCategoryData.style.display = "none";
      }
      searchCategoryData.innerHTML = "";
      filteredProducts.forEach((filteredProduct) => {
        const filteredProductDiv = document.createElement("div");
        filteredProductDiv.className = "category-urun";

        filteredProductDiv.innerHTML = `
        <img class="category-images" src="${filteredProduct.image}" />
        <div>
          <h6 class="category-name">${filteredProduct.category}</h6>
          <p class="category-title">${filteredProduct.title}</p>
        </div>
      `;
        searchCategoryData.appendChild(filteredProductDiv);
      });
    });
  });
}
const burgerMenu = document.querySelector(".navbar-burger-menu-icon");
const asideBar = document.querySelector(".exclusive-aside-continer");
const scrollBody = document.body;
let isBurgerOpen = false;
burgerMenu.addEventListener("click", () => {
  if (!isBurgerOpen) {
    asideBar.style.display = "inline-block";
    scrollBody.style.overflowY = "hidden";
    isBurgerOpen = !isBurgerOpen;
  } else {
    asideBar.style.display = "none";
    scrollBody.style.overflowY = "scroll";
    isBurgerOpen = !isBurgerOpen;
  }
});

function kategoriUrunEkleme(kategori) {
  const urunListesiDiv = document.getElementById("categoryData");
  const urunListesiMens = document.querySelector(".mens-category-data");
  const womansCategoryBtn = document.querySelector(".womans-dropdown");
  const mensCategoryBtn = document.querySelector(".mens-dropdown");

  womansCategoryBtn.addEventListener("mouseover", () => {
    urunListesiDiv.style.display = "block";
    console.log("deneme");
    urunListesiDiv.addEventListener("mouseout", () => {
      urunListesiDiv.style.display = "none";
    });
    womansCategoryBtn.addEventListener("mouseout", () => {
      urunListesiDiv.style.display = "none";
    });
  });
  mensCategoryBtn.addEventListener("mouseover", () => {
    urunListesiMens.style.display = "block";
    urunListesiMens.addEventListener("mouseout", () => {
      urunListesiMens.style.display = "none";
    });
    mensCategoryBtn.addEventListener("mouseout", () => {
      urunListesiMens.style.display = "none";
    });
  });
  getUrunlerByCategory(kategori).then((urunler) => {
    urunler.forEach((urun) => {
      const urunDiv = document.createElement("div");
      urunDiv.className = "category-urun";

      urunDiv.innerHTML = `
      <img class="category-images" src="${urun.image}"/>
      <div>
      <h6 class="category-name">${urun.category}</h6>
      <p class="category-title">${urun.title}</p>
      </div>
       `;
      womansCategoryBtn.addEventListener("mouseover", () => {
        if (urun.category == "women's clothing") {
          urunListesiDiv.appendChild(urunDiv);
        }
      });
      mensCategoryBtn.addEventListener("mouseover", () => {
        if (urun.category == "men's clothing") {
          urunListesiMens.appendChild(urunDiv);
        }
      });
    });
  });
}
kategoriUrunEkleme("title");
searchInputData("title");
const userIconOpen = document.querySelector(".navbar-user-icon");
const userIconCard = document.querySelector(".user-logIn-links-card");
const bottomBarUserIcon = document.querySelector(".bottom-side-user-box");
const bottomBarCard = document.querySelector(".bottom-side-bar-card");

let isOpenUserCard = false;
bottomBarUserIcon.addEventListener("click", () => {
  console.log(userIconCard);
  if (!isOpenUserCard) {
    bottomBarCard.style.display = "inline-block";
    isOpenUserCard = !isOpenUserCard;
  } else {
    bottomBarCard.style.display = "none";
    isOpenUserCard = !isOpenUserCard;
  }
});
userIconOpen.addEventListener("click", () => {
  console.log("test");
  if (!isOpenUserCard) {
    userIconCard.style.display = "block";
    isOpenUserCard = !isOpenUserCard;
  } else {
    userIconCard.style.display = "none";
    isOpenUserCard = !isOpenUserCard;
  }
});
function indirimYap(fiyat, indirimYuzdesi) {
  return fiyat - (fiyat * indirimYuzdesi) / 100;
}
bestSellingProducts = [];
getUrunlerByCategory().then((urunler) => {
  bestSellingProducts.push(urunler[2], urunler[3], urunler[4], urunler[6]);
  const urunKart = document.querySelector(".cl-boxes");

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
      <p class="price">${urun.price}₺</p>
      <strike class="discounted-price">${indirimYap(urun.price, 20)}₺</strike>
    </div>
    <div class="stars-icons">
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <p class="point">(65)</p>
    </div>
    
  </section>`
    )
    .join("");
  defaultFavoriteProduct();
  defaultShopingProduct();
});

let shopingProducts = [];
function shopCartProduct(productId) {
  document.getElementById(`productShopCart-${productId}`).style.display =
    "none";
  document.getElementById(`checkIcon-${productId}`).style.display =
    "inline-block";
  const newShopingProduct = bestSellingProducts.find(
    (product) => product.id === productId
  );

  const unparsedProducts = localStorage.getItem("shopingProducts");

  if (unparsedProducts) {
    shopingProducts = JSON.parse(unparsedProducts);
  }

  const isMatch = shopingProducts.find(
    (product) => product.id === newShopingProduct.id
  );

  if (!isMatch) {
    const productsToAdd = [...shopingProducts, newShopingProduct];

    localStorage.setItem("shopingProducts", JSON.stringify(productsToAdd));

    shopingProducts = productsToAdd;
  } else {
    shopingDeleteProduct(productId);
  }
  noticeShopingCart();
}

function shopingDeleteProduct(productId) {
  document.getElementById(`productShopCart-${productId}`).style.display =
    "inline-block";
  document.getElementById(`checkIcon-${productId}`).style.display = "none";
  const newShopingProduct = shopingProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("shopingProducts", JSON.stringify(newShopingProduct));
  shopingProducts = newShopingProduct;
  noticeShopingCart();
}
function defaultShopingProduct(productId) {
  const defaultShoping = localStorage.getItem("shopingProducts");
  shopingProducts = JSON.parse(defaultShoping);
  shopingProducts.forEach((i) => {
    productId = i.id;
    document.getElementById(`productShopCart-${productId}`).style.display =
      "none";
    document.getElementById(`checkIcon-${productId}`).style.display =
      "inline-block";
  });
}
let wishlistProducts = [];

function favoriteProduct(productId) {
  document.getElementById(`product-${productId}`).style.fill = "red";
  document.getElementById(`products-${productId}`).style.stroke = "red";

  const newWishlistProduct = bestSellingProducts.find(
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
  document.getElementById(`product-${productId}`).style.fill = "none";
  document.getElementById(`products-${productId}`).style.stroke = "black";
  const newWishlistProducts = wishlistProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("wishlistProducts", JSON.stringify(newWishlistProducts));
  wishlistProducts = newWishlistProducts;
  noticeWishlist();
}

function defaultFavoriteProduct(productId) {
  const defaultWishlist = localStorage.getItem("wishlistProducts");
  wishlistProducts = JSON.parse(defaultWishlist);
  wishlistProducts.forEach((i) => {
    productId = i.id;
    document.getElementById(`product-${productId}`).style.fill = "red";
    document.getElementById(`products-${productId}`).style.stroke = "red";
  });
}

const wishlistNotice = document.querySelector(".like-icon-notification");
const bottomBarWishlistNotice = document.getElementById("likeIconNotice");
function noticeWishlist() {
  const howMuchWishlist = localStorage.getItem("wishlistProducts");
  wishlistProducts = JSON.parse(howMuchWishlist);
  if (wishlistProducts.length > 0) {
    wishlistNotice.style.display = "inline-block";
    wishlistNotice.innerHTML = `${wishlistProducts.length}`;
    bottomBarWishlistNotice.style.display = "inline-block";
    bottomBarWishlistNotice.innerHTML = `${wishlistProducts.length}`;
  } else {
    wishlistNotice.style.display = "none";
    bottomBarWishlistNotice.style.display = "none";
  }
}
const shopingCartNotice = document.querySelector(".shop-icon-notification");
const bottomBarShopNotice = document.getElementById("shopIconNotice");
function noticeShopingCart() {
  const howMuchShopCart = localStorage.getItem("shopingProducts");
  shopingProducts = JSON.parse(howMuchShopCart);
  if (shopingProducts.length > 0) {
    shopingCartNotice.style.display = "inline-block";
    shopingCartNotice.innerHTML = `${shopingProducts.length}`;
    bottomBarShopNotice.style.display = "inline-block";
    bottomBarShopNotice.innerHTML = `${shopingProducts.length}`;
  } else {
    shopingCartNotice.style.display = "none";
    bottomBarShopNotice.style.display = "none";
  }
}
noticeShopingCart();
noticeWishlist();
const logOut = document.querySelector("#isLogOut");
isLogin = JSON.parse(localStorage.getItem("isLogin"));
console.log(logOut);
logOut.addEventListener("click", () => {
  isLogin = false;
  localStorage.setItem("isLogin", isLogin);
  if (isLogin == false) {
    window.location.href = "login.html";
  }
});
if (isLogin == null) {
  window.location.href = "register.html";
} else if (isLogin == false) {
  window.location.href = "login.html";
}
