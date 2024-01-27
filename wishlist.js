//id ile yapılabilir.

// document.getElementById('ornekcop').addEventListener('click', function () {
//     var parentElement = document.getElementById('ornekdiv');

//     if (parentElement.style.display !== 'none') {
//         parentElement.style.display = 'none';
//     } else {
//         parentElement.style.display = 'block';
//     }
// });

//class ile yapılabilir.
let dustbin = document.getElementsByClassName('wl-dustbin');
// Her birine tıklama olayı ekle
for (let i = 0; i < dustbin.length; i++) {
    dustbin[i].addEventListener('click', function () {
        // Tıklanan elementin parent'ını bul
        let parentElement = this.parentNode.parentNode.parentNode;
        // Toggle görünürlüğü kapat
        if (parentElement.style.display !== 'none') {
            parentElement.style.display = 'none';
        } else {
            parentElement.style.display = 'block';
        }
    });
}

let gucci = document.getElementById('gucci-bag');
let ikincialt_gucci = gucci.querySelector('.wl-explanations');

let isim_gucci = ikincialt_gucci.querySelector(".wl-item-name")
console.log(isim_gucci.textContent);

let gucci_fiyatlar = ikincialt_gucci.querySelector(".item-prices");

let gucci_guncel_fiyat = gucci_fiyatlar.querySelector(".wl-orange-price");
console.log(gucci_guncel_fiyat.textContent);

let gucci_square = gucci.querySelector('.wl-content-square');
let gucci_addtocart = gucci_square.querySelector(".wl-black-addtocart");
let gucci_addtocartbutton = gucci_addtocart.querySelector(".wl-addtocart-text");

console.log(gucci_addtocartbutton.textContent);

let cart = [];
gucci_addtocartbutton.addEventListener('click', function () {

    cart.push(isim_gucci);
    console.log(cart[0]);
    alert("ada");
});




let liquidcooler = document.getElementById('liquid-cooler');
let ikincialt_liquidcooler = liquidcooler.querySelector('.wl-explanations');

let isim_cooler = ikincialt_liquidcooler.querySelector(".wl-item-name")
console.log(isim_cooler.textContent);

let cooler_fiyatlar = ikincialt_liquidcooler.querySelector(".item-prices");

let cooler_guncel_fiyat = cooler_fiyatlar.querySelector(".wl-orange-price");
console.log(cooler_guncel_fiyat.textContent);






//  Wishlist item containerını seç
// let wishlistItem = document.querySelector('.wishlist-one-div');

//  Add To Cart butonunu seç
// let addToCartButton = wishlistItem.querySelector('.wl-addtocart-text');

//  Ürün adını gösteren elementi seç
// let itemNameElement = wishlistItem.querySelector('.wl-item-name');

//  Add To Cart butonuna tıklama olayını ekle
// addToCartButton.addEventListener('click', function () {
//     // Ürün adını al ve konsola yazdır
//     let itemName = itemNameElement.textContent.trim();
//     console.log('Ürün Adı: ' + itemName);

//      Burada istediğiniz işlemleri gerçekleştirebilirsiniz.
//      Örneğin, alınan ürün adını başka bir yere ekleyebilirsiniz.
// });


var openButton = document.getElementById('openButton');
var popupcart = document.getElementById('popup-cart');
var closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', function () {
    popupcart.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    popupcart.style.display = 'none';
});

popupcart.addEventListener('click', function (event) {
    if (event.target === popup - cart) {
        popupcart.style.display = 'none';
    }
});






















