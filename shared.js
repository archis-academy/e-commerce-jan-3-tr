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

const wishlistNotice = document.querySelector(".like-icon-notification");
const bottomBarWishlistNotice = document.getElementById("likeIconNotice");
function noticeWishlist() {
  const howMuchWishlist = localStorage.getItem("wishlistProducts");
  wishlistProducts = JSON.parse(howMuchWishlist) || [];
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
  const howMuchShopCart = localStorage.getItem("cartProducts");
  cartProducts = JSON.parse(howMuchShopCart) || [];

  if (cartProducts.length > 0) {
    shopingCartNotice.style.display = "inline-block";
    shopingCartNotice.innerHTML = `${cartProducts.length}`;
    bottomBarShopNotice.style.display = "inline-block";
    bottomBarShopNotice.innerHTML = `${cartProducts.length}`;
  } else {
    shopingCartNotice.style.display = "none";
    bottomBarShopNotice.style.display = "none";
  }
}
noticeShopingCart();
noticeWishlist();

isLogin = JSON.parse(localStorage.getItem("isLogin"));

document.querySelectorAll("#isLogOut").forEach((e) => {
  e.addEventListener("click", () => {
    isLogin = false;
    localStorage.setItem("isLogin", isLogin);
    if (isLogin == false) {
      window.location.href = "login.html";
    }
  });
});
if (isLogin == null) {
  window.location.href = "register.html";
} else if (isLogin == false) {
  window.location.href = "login.html";
}
