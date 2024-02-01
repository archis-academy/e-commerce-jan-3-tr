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


function openPopup(buttonId) {
    let yeniSatir = document.createElement("br");
    let popup = document.getElementById('popup');
    let popupContent = document.getElementById('popup-content');

    popup.style.display = 'block';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}

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




let items = [
    {
        id: 1,
        itemName: "Gucci Duffle Bag",
        price: "$960",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
    {
        id: 2,
        itemName: "RGB liquid CPU Cooler",
        price: "$1960",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
    {
        id: 3,
        itemName: "GP11 Shooter USB Gamepad",
        price: "$550",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
    {
        id: 4,
        itemName: "Quilted Satin Jacket",
        price: "$750",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
    {
        id: 5,
        itemName: "ASUS FHD Gaming Laptop",
        price: "$960",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
    {
        id: 6,
        itemName: "IPS LCD Gaming Monitor",
        price: "$1160",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
    {
        id: 7,
        itemName: "HAVIT HV-G92 Gamepad",
        price: "$560",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
    {
        id: 8,
        itemName: "AK-900 Wired Keyboard",
        price: "$200",
        image: "images/Gucci-Savoy-medium-duffle-bag 1.png",
        discount: true,
    },
];