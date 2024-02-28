const urunler = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];
// (Yakup/E--2-Homepage-Today's-Products) start
const todaysProduct = document.querySelector(".todays-frame-577");
const todaysBtnRight = document.querySelector(".todays-frame-726-btn-right");
const todaysBtnLeft = document.querySelector(".todays-frame-726-btn-left");
const todaysAllProduct = document.querySelector(".todays-btn");

function counterUpdate() {
  var discountEndDate = localStorage.getItem("discountEndDate");

  if (!discountEndDate) {
    discountEndDate = new Date();
    discountEndDate.setDate(discountEndDate.getDate() + 4);
    localStorage.setItem("discountEndDate", discountEndDate);
  } else {
    discountEndDate = new Date(discountEndDate);
  }

  var now = new Date();

  if (discountEndDate < now) {
    discountEndDate = new Date();
    discountEndDate.setDate(discountEndDate.getDate() + 4);
    localStorage.setItem("discountEndDate", discountEndDate);
  }

  var remainingTime = discountEndDate - now;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("todays-countdown-days").innerHTML =
    twoDigits(days) + ":";
  document.getElementById("todays-countdown-hours").innerHTML =
    twoDigits(hours) + ":";
  document.getElementById("todays-countdown-minutes").innerHTML =
    twoDigits(minutes) + ":";
  document.getElementById("todays-countdown-seconds").innerHTML =
    twoDigits(seconds);
}

counterUpdate();
var counterUpdateBetween = setInterval(counterUpdate, 1000);

function productCreateHeading(productHeading) {
  const returnHeading =
    productHeading.length > 15
      ? productHeading.substring(0, 15).concat("...")
      : productHeading.product.title;
  return returnHeading;
}

function todaysReturnStars(rate) {
  let stars = "";
  for (let i = 0; i < rate.toFixed(0); i++) {
    stars += `<img src="images/Vector-star.svg" >`;
  }
  return stars;
}

async function showAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const todaysData = await response.json();
  const productHtmlArray = todaysData.map((product) => {
    return ` 
<div class="cart-with-flat-discover">
  <div class="cart-frame-570">
    <div class="todays-discount-percent">-50%</div>
    <img src="${product.image}" alt="">
    <div class="todays-frame-575">
      <div>
        <img onclick="favoriteProduct(${
          product.id
        })"  class="todays-frame-575-wishlist-img" src="images/wishlist-icon.svg" >
      </div>
      <div>
        <img onclick="todaysSellCartProduct(${
          product.id
        })"  class="todays-frame-575-img" src="images/cart-icon.svg" >
      </div>
    </div>
  </div>
  <div class="cart-frame-569">
    <h2>${productCreateHeading(product.title)}</h2>
    <div class="frame-567-discount">
    <p>${product.price - product.price * 0.5}</p>
    <s>${product.price}</s>
    </div>
    <div class="frame-566-star-comment">
    <div class="frame-566-star">
    ${todaysReturnStars(product.rating.rate)}
    </div>
      <p>(${product.rating.count})</p>
    </div>
  </div>
</div>`;
  });
  todaysProduct.innerHTML = productHtmlArray.join("");
}
showAllProducts();

let todaysCurrentProductsAmountFirst = 0;
let todaysCurrentProductsAmountSecond = 4;

let todaysProducts = [];

async function urunleriGetir() {
  const response = await fetch("https://fakestoreapi.com/products");
  const todaysData = await response.json();
  todaysProducts = todaysData;

  const currentTodaysProducts = todaysData.slice(
    todaysCurrentProductsAmountFirst,
    todaysCurrentProductsAmountSecond
  );
  const productHtmlArray = currentTodaysProducts.map((product) => {
    return ` 
<div class="cart-with-flat-discover">
  <div class="cart-frame-570">
    <div class="todays-discount-percent">-50%</div>
    <img src="${product.image}" alt="">
    <div class="todays-frame-575">
      <div>
      <svg id="product-${product.id}" onclick="favoriteProduct(${
      product.id
    })" class="icon-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="products-${
      product.id
    }" d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div>
        <img onclick="todaysSellCartProduct(${
          product.id
        })" class="todays-frame-575-img" src="images/cart-icon.svg" >
      </div>
    </div>
  </div>
  <div class="cart-frame-569">
    <h2>${productCreateHeading(product.title)}</h2>
    <div class="frame-567-discount">
      <p>${product.price - product.price * 0.5}</p>
      <s>${product.price}</s>
    </div>
    <div class="frame-566-star-comment">
    <div class="frame-566-star">
      ${todaysReturnStars(product.rating.rate)}
      </div>
      <p>(${product.rating.count})</p>
    </div>
  </div>
</div>`;
  });
  todaysProduct.innerHTML = productHtmlArray.join("");
}

todaysBtnLeft.addEventListener("click", todaysChangeProducts);
todaysBtnRight.addEventListener("click", todaysChangeProducts);
todaysAllProduct.addEventListener("click", showAllProducts);

function todaysChangeProducts() {
  if (todaysCurrentProductsAmountSecond === 20) {
    todaysCurrentProductsAmountFirst = 0;
    todaysCurrentProductsAmountSecond = 4;
  } else {
    todaysCurrentProductsAmountFirst += 4;
    todaysCurrentProductsAmountSecond += 4;
  }
  urunleriGetir();
}

function favoriteProduct(productId) {
  document.getElementById(`product-${productId}`).style.fill = "red";
  document.getElementById(`products-${productId}`).style.stroke = "red";
  const wishlistProducts =
    JSON.parse(localStorage.getItem("wishlistProducts")) || [];

  const wishlistProduct = wishlistProducts.find(
    (product) => product.id === productId
  );

  if (!wishlistProduct) {
    const productToAdd = todaysProducts.find(
      (product) => product.id === productId
    );
    const newWishlistProducts = [...wishlistProducts, productToAdd];
    localStorage.setItem(
      "wishlistProducts",
      JSON.stringify(newWishlistProducts)
    );
  } else {
    deleteWishlistProduct(productId);
  }
}

function deleteWishlistProduct(productId) {
  document.getElementById(`product-${productId}`).style.fill = "none";
  document.getElementById(`products-${productId}`).style.stroke = "black";
  const wishlistProducts =
    JSON.parse(localStorage.getItem("wishlistProducts")) || [];
  const newWishlistProducts = wishlistProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("wishlistProducts", JSON.stringify(newWishlistProducts));
}

function todaysSellCartProduct(productId) {
  const todaysSellProducts =
    JSON.parse(localStorage.getItem("cartProducts")) || [];

  const todaysCartProduct = todaysSellProducts.find(
    (product) => product.id === productId
  );

  if (!todaysCartProduct) {
    const productToAdd = todaysProducts.find(
      (product) => product.id === productId
    );
    const newTodaysSellProducts = [...todaysSellProducts, productToAdd];
    localStorage.setItem("cartProducts", JSON.stringify(newTodaysSellProducts));
  } else {
    deleteCartProduct(productId);
  }
}

function deleteCartProduct(productId) {
  const todaysSellProducts =
    JSON.parse(localStorage.getItem("cartProducts")) || [];
  const newTodaysSellProducts = todaysSellProducts.filter(
    (product) => product.id !== productId
  );
  localStorage.setItem("cartProducts", JSON.stringify(newTodaysSellProducts));
}
urunleriGetir();

// (Yakup/E--2-Homepage-Today's-Products) end

//  Yakup/E--3-Homepage-Browse-By-Category- start

let categoryItems = document.querySelectorAll(".browse-by-category-group");

categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    categoryItems.forEach((item) => {
      item.style.backgroundColor = "";
      item.style.color = "";
      item.querySelectorAll("path").forEach((path) => {
        path.style.stroke = ""; // Tüm path'ların stroke'unu sıfırla
      });
      item.querySelectorAll("line").forEach((linePath) => {
        linePath.style.stroke = ""; // line içindeki path'ların stroke'unu sıfırla
      });
    });
    item.style.backgroundColor = "#DB4444";
    item.style.color = "white";
    item.querySelectorAll("path").forEach((path) => {
      path.style.stroke = "white"; // Seçilen öğenin path'larının stroke'unu beyaz yap
    });
    item.querySelectorAll("line").forEach((linePath) => {
      linePath.style.stroke = "white"; // Seçilen öğenin line içindeki path'larının stroke'unu beyaz yap
    });
  });
});
//  Yakup/E--3-Homepage-Browse-By-Category- end

function indirimYap(fiyat, indirimYuzdesi) {
  return fiyat - (fiyat * indirimYuzdesi) / 100;
}

bestSellingProducts = [];
bestSellingProducts.push(urunler[2], urunler[7], urunler[4], urunler[5]);
const urunKart = document.querySelector(".cl-boxes");

urunKart.innerHTML = bestSellingProducts
  .map(
    (urun) =>
      `<section class="productCard">
    <div class="box-img">
        <div class="column-icons">
          <img src="images/heart small.png" alt="" />
          <img src="images/Group.png" alt="" />
        </div>
        <img src="${urun.image}" alt="${urun.title}" />
    </div>
    <div><p class="product-information">${urun.title
      .substring(0, 20)
      .concat(" ...")} </p>
    </div>
    <div class="prices">
      <p class="price">${urun.price}₺</p>
      <strike class="discounted-price">${indirimYap(urun.price, 20)}₺</strike>
    </div>
    <div class="stars-icons">
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <img src="images/Vector.png" alt="" />
      <p class="point">(65)</p>
    </div>
    
  </section>`
  )
  .join("");

/*Featured Product - Start*/
const fpDays = document.getElementById("fp-days");
const fpHours = document.getElementById("fp-hours");
const fpMinutes = document.getElementById("fp-minutes");
const fpSeconds = document.getElementById("fp-seconds");

let seconds = 86400;

function timer() {
  let days = Math.floor(seconds / 24 / 60 / 60);
  let hoursLeft = Math.floor(seconds - days * 86400);
  let hours = Math.floor(hoursLeft / 3600);
  let minutesLeft = Math.floor(hoursLeft - hours * 3600);
  let minutes = Math.floor(minutesLeft / 60);
  let remainingSeconds = seconds % 60;

  function twoDigits(n) {
    return n <= 9 ? "0" + n : n;
  }

  fpDays.innerText = twoDigits(days);
  localStorage.setItem("remainingDays", days);

  fpHours.innerText = twoDigits(hours);
  localStorage.setItem("remainingHours", hours);

  fpMinutes.innerText = twoDigits(minutes);
  localStorage.setItem("remainingMinutes", minutes);

  fpSeconds.innerText = twoDigits(remainingSeconds);
  localStorage.setItem("remainingSeconds", remainingSeconds);

  if (seconds === 0) {
    seconds = 86400;
  } else {
    seconds--;
  }
}

if (localStorage.getItem("remainingDays")) {
  let remainingDays = parseInt(localStorage.getItem("remainingDays"));
  let remainingHours = parseInt(localStorage.getItem("remainingHours"));
  let remainingMinutes = parseInt(localStorage.getItem("remainingMinutes"));
  let remainingSeconds = parseInt(localStorage.getItem("remainingSeconds"));
  let totalSeconds =
    remainingDays * 86400 +
    remainingHours * 3600 +
    remainingMinutes * 60 +
    remainingSeconds;
  seconds = totalSeconds;
}

setInterval("timer()", 1000);

/*Featured Product - End*/

const newProductsContainer = document.querySelector("#newProductsContainer");

let currentProductsAmountFirst = 0;
let currentProductsAmountSecond = 8;

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  function returnStars(rate) {
    let stars = "";
    for (let i = 0; i < rate.toFixed(0); i++) {
      stars += `<img class="newproduckt-stars" src="images/Vector.png" />`;
    }
    return stars;
  }

  const currentProducts = data.slice(
    currentProductsAmountFirst,
    currentProductsAmountSecond
  );

  newProductsContainer.innerHTML = currentProducts
    .map((product) => {
      return `<div class="newproduct-box" >
              <div class="newproduct-box-one">
               <img  class="newproduct-box-img" src="${product.image}"/>
              </div>
               <h1 class="newproduct-box-h1">${product.title}</h1>
               <div class="newproduct-box-two">
               <p class="newproduct-box-p">$</p>
               <p class="newproduct-box-p">${product.price}</p>
               <div class="newproduct-box-stars">
               ${returnStars(product.rating.rate)}
               </div>
               <p class="point">(32)</p>
              </div>
            </div>`;
    })
    .join("");
}
fetchProducts();

const changeBtnLeft = document.querySelector("#changeBtnLeft");

changeBtnLeft.addEventListener("click", changeProducts);

const changeBtnRight = document.querySelector("#changeBtnRight");

changeBtnRight.addEventListener("click", changeProducts);

function changeProducts() {
  if (currentProductsAmountSecond === 16) {
    currentProductsAmountFirst = 0;
    currentProductsAmountSecond = 8;
  } else {
    currentProductsAmountFirst += 8;
    currentProductsAmountSecond += 8;
  }
  fetchProducts();
}
