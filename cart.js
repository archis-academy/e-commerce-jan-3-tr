/*Cart Page Start*/
//cartProducts - localStorage

/*Cart Page End*/
const setProducts = document.getElementsByClassName("cart-products");

async function getUrunler(id) {
  const responseUrunler = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const urunler = await responseUrunler.json();
  return urunler;
}
const productsLocal = localStorage.getItem("cartProducts");

// const eachProduct = productsLocal.map((id) => id);
// console.log(eachProduct);
console.log(productsLocal);
console.log(setProducts);

/*

let cartProducts = [];

function shopingDeleteProduct(productId) {
  document.getElementById(`productShopCart-${productId}`).style.display =
    "inline-block";
  document.getElementById(`checkIcon-${productId}`).style.display = "none";
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
    document.getElementById(`productShopCart-${productId}`).style.display =
      "none";
    document.getElementById(`checkIcon-${productId}`).style.display =
      "inline-block";
  });
}
*/
