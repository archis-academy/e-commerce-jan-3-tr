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
    <td class="cart-table-body">$${product.price}</td>
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
    <td class="cart-table-body cart-subtotal" id="cart-subtotal-${product.id}">$${product.price}</td></tr>`
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
  subtotalQuantity.innerHTML = `$${tableQuantity * productPrice}`;
  cartTotalPrice();
}

function cartTotalPrice() {
  const cartTotalSubtotal = document.querySelector(
    ".cart-total-subtotal-price"
  );

  const subTotalList = document.querySelectorAll(".cart-subtotal");
  let deneme = 0;
  subTotalList.forEach((element) => {
    const stringValue = element.innerHTML;
    const numericString = stringValue.replace(/[^0-9.]/g, "");
    const numberValue = parseFloat(numericString); // veya parseInt(stringValue, 10) kullanabilirsiniz
    deneme += numberValue;

    return (cartTotalSubtotal.innerHTML = `$${deneme}`);
  });
}

cartTotalPrice();
/*Cart Page End*/
