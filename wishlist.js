const productcard = document.getElementById("productcard");

function renderUrunler() {
  const wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts"));

  if(wishlistProducts){
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
        <p class="col-paragraph">Add To Cart</p>
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
  } else {
    productcard.innerHTML = `<p>Wishlist is empty</p>`;
  }
}

renderUrunler();

function deleteurun(urunId) {
  const wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts"));
  const kalanUrunler = wishlistProducts.filter((urun) => {
    return urun.id !== urunId;
  });
  localStorage.setItem("wishlistProducts", JSON.stringify(kalanUrunler));
  renderUrunler();
}
