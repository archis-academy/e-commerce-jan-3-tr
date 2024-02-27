/*Cart Page Start*/

const productsLocal = JSON.parse(localStorage.getItem("cartProducts"));
const table = document.getElementById("table");
const setProducts = document.createElement("tbody");

setProducts.innerHTML = productsLocal.map(
  (product) =>
    `<tr><td class="cart-table-body">
    <span><img src="${product.image}" alt="${product.title}" /> ${product.title}</span>
    </td>
    <td class="cart-table-body">$${product.price}</td>
    <td class="cart-table-body">
    <div class="cart-table-quantity-container">
      <select class="cart-table-quantity" name="Quantity" id="cart-table-option">
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
    <td class="cart-table-body" id="cart-subtotal-${product.id}"></td></tr>`
);

table.appendChild(setProducts);
/*Cart Page End*/
