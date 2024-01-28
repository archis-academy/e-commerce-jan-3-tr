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

function openPopup(buttonId) {
    let yeniSatir = document.createElement("br");

    let popup = document.getElementById('popup');
    let popupContent = document.getElementById('popup-content');

    // Her butona özgü içerik ataması
    if (buttonId === 'gucci_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\nGucci Bag is added';

    } else if (buttonId === 'cooler_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\nCooler is added';

    } else if (buttonId === 'gp11_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\ngp11 is added';

    } else if (buttonId === 'jacket_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\njacket is added';

    } else if (buttonId === 'laptop_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\nLaptop is added';

    } else if (buttonId === 'monitor_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\nMonitor is added';

    } else if (buttonId === 'havit_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\nHavit is added';
    }
    else if (buttonId === 'ak900_added') {
        popupContent.appendChild(yeniSatir);
        popupContent.innerText = popupContent.textContent + '\nAk900 is added';
    }
    popup.style.display = 'block';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Butonlara tıklandığında ilgili popup'ı açan fonksiyon
document.getElementById('gucci_added').addEventListener('click', function () {
    openPopup('gucci_added');
});

document.getElementById('cooler_added').addEventListener('click', function () {
    openPopup('cooler_added');
});

document.getElementById('gp11_added').addEventListener('click', function () {
    openPopup('gp11_added');
});

document.getElementById('jacket_added').addEventListener('click', function () {
    openPopup('jacket_added');
});

document.getElementById('laptop_added').addEventListener('click', function () {
    openPopup('laptop_added');
});

document.getElementById('monitor_added').addEventListener('click', function () {
    openPopup('monitor_added');
});

document.getElementById('havit_added').addEventListener('click', function () {
    openPopup('havit_added');
});

document.getElementById('ak900_added').addEventListener('click', function () {
    openPopup('ak900_added');
});




let zoomContainers = document.querySelectorAll('.wl-only-image-div');

zoomContainers.forEach(function (zoomContainer) {
    let zoomImage = zoomContainer.querySelector('.wl-content-img');

    zoomContainer.addEventListener('mouseenter', function () {
        zoomImage.classList.add('zoomed');
    });

    zoomContainer.addEventListener('mouseleave', function () {
        zoomImage.classList.remove('zoomed');
    });

    zoomContainer.addEventListener('mousemove', function (e) {
        let x = (e.clientX - zoomContainer.offsetLeft) / zoomContainer.clientWidth;
        let y = (e.clientY - zoomContainer.offsetTop) / zoomContainer.clientHeight;

        zoomImage.style.transformOrigin = (x * 100) + '% ' + (y * 100) + '%';
    });
});




