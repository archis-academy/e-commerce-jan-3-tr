/*Cart Page Start*/

const table = document.getElementById("table");
const setProducts = document.createElement("tbody");

function renderProduct() {
  const productsLocal = JSON.parse(localStorage.getItem("cartProducts"));
  setProducts.innerHTML = productsLocal
    .map(
      (product) =>
        `<tr><td class="cart-table-body">
    <span>
    <div class="cart-image-dlt-box">
    <span onclick="deleteCartProduct(${product.id})" class="delete-cart">X</span>
    <img class="cart-image" src="${product.image}" alt="${product.title}" />
    </div>
     ${product.title}
     </span>
    </td>
    <td class="cart-table-body">${product.price}₺</td>
    <td class="cart-table-body">
    <div class="cart-table-quantity-container">
      <select onchange="subtotalCart(${product.id} , ${product.price})" class="cart-table-quantity" name="Quantity" id="cart-table-option-${product.id}">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    </td>
    <td class="cart-table-body cart-subtotal" id="cart-subtotal-${product.id}">${product.price}₺</td></tr>`
    )
    .join("");
}
renderProduct();
table.appendChild(setProducts);
function deleteCartProduct(productId) {
  const newShopingProduct = cartProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("cartProducts", JSON.stringify(newShopingProduct));
  cartProducts = newShopingProduct;
  renderProduct();
  noticeShopingCart();
  cartTotalPrice();
  cartTotal();
  disSubtotal();
}
function subtotalCart(productId, productPrice) {
  const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  cartProducts.find((product) => {
    return product.id === productId, product.price === productPrice;
  });

  const tableQuantity = document.querySelector(
    `#cart-table-option-${productId}`
  ).value;
  const subtotalQuantity = document.querySelector(
    `#cart-subtotal-${productId}`
  );
  subtotalQuantity.innerHTML = `${tableQuantity * productPrice}₺`;
  cartTotalPrice();
  cartTotal();
  disSubtotal();
}
const cartTotalSubtotal = document.querySelector(".cart-total-subtotal-price");
let subtotal = 0;
function cartTotalPrice() {
  subtotal = 0;
  const subTotalList = document.querySelectorAll(".cart-subtotal");
  if (subTotalList.length == 0) {
    cartTotalSubtotal.innerHTML = "0₺";
  }
  subTotalList.forEach((element) => {
    const stringValue = element.innerHTML;
    const numericString = stringValue.replace(/[^0-9.]/g, "");
    const numberValue = parseFloat(numericString); // veya parseInt(stringValue, 10) kullanabilirsiniz
    subtotal += numberValue;
    console.log(element);
    return (cartTotalSubtotal.innerHTML = `${subtotal}₺`);
  });
}
cartTotalPrice();
const coupons = ["coupon40"];

const couponInput = document.querySelector(".cart-input-text");
const discountAmount = document.querySelector(".cart-total-discount-amount");
const totalPrice = document.querySelector(".cart-total-price");
const couponButtonClose = document.querySelector(".cart-input-btn-close");
const couponButton = document.querySelector(".cart-input-btn");
let couponInputValue = couponInput.value.toLowerCase();
if (couponInputValue === "") {
  couponButton.style.display = "none";
}

couponInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    couponButton.style.display = "none";
    couponButtonClose.style.display = "inline-block";
  } else {
    couponButtonClose.style.display = "none";
    couponButton.style.display = "inline-block";
    couponInputValue = e.target.value.toLowerCase();
  }
});
let couponPrice = 0;
couponButton.addEventListener("click", () => {
  for (let i = 0; i < coupons.length; i++) {
    if (couponInputValue === coupons[i]) {
      alert("Kupon Geçerli !!");
      coupons.splice(i, 1);
      couponPrice = (subtotal / 100) * 40;
      couponButton.style.display = "none";
      couponInput.style.display = "none";
      cartTotal();
      disSubtotal();
      break;
    } else {
      alert("Geçersiz Kupon!!!");
    }
  }
});

function disSubtotal() {
  if (couponPrice > 0) {
    discountAmount.innerHTML = `-${couponPrice}₺`;
  } else {
    discountAmount.innerHTML = `${couponPrice}₺`;
    couponPrice = 0;
  }
  cartTotal();
}
function cartTotal() {
  totalPrice.innerHTML = `${subtotal - couponPrice}₺`;
}
cartTotal();
/*Cart Page End*/
