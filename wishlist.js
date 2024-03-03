const productcard = document.getElementById("productcard");

console.log("test");
function renderUrunler() {
  let test = localStorage.getItem("wishlistProducts");
  wishlistProducts = JSON.parse(test);

  if (wishlistProducts) {
    productcard.innerHTML = wishlistProducts
      .map(
        (product) =>
          `
      <div class="container-card">
        <img onclick="deleteurun(${
          product.id
        })" class="icons" src="images/icon-delete.svg"/>
        <img class="column-product" src="${product.image}" alt="${
            product.title
          }" />
        <p onclick="addCartProduct(${
          product.id
        })" class="col-paragraph">Add To Cart</p>
        <div>
          <p class="explanation-product">${product.title
            .substring(0, 20)
            .concat(" ...")}</p>
        </div>
        <div class="prices">
          <p>${product.price}₺</p>
        </div>
      </div>
      `
      )
      .join("");
  }
}

renderUrunler();
function addCartProduct(productId) {
  const newShopingProduct = wishlistProducts.find(
    (product) => product.id === productId
  );

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
  }
  noticeShopingCart();
}
function deleteurun(urunId) {
  const wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts"));
  const kalanUrunler = wishlistProducts.filter((urun) => {
    return urun.id !== urunId;
  });
  localStorage.setItem("wishlistProducts", JSON.stringify(kalanUrunler));
  renderUrunler();
  noticeWishlist();
  wishlistQuantity();
}
const wishlistPcs = document.getElementById("wishlistPcs");

function wishlistQuantity() {
  const howMuchWishlist = localStorage.getItem("wishlistProducts");
  wishlistProducts = JSON.parse(howMuchWishlist);

  if (wishlistProducts.length > 0) {
    wishlistPcs.innerHTML = `${wishlistProducts.length}`;
  } else {
    wishlistPcs.innerHTML = "0";
  }
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1010) {
    asideBar.style.display = "none";
    scrollBody.style.overflowY = "scroll";
    isBurgerOpen = !isBurgerOpen;
  } else {
    asideBar.style.display = "none";
    isBurgerOpen = !isBurgerOpen;
  }
});
wishlistQuantity();
