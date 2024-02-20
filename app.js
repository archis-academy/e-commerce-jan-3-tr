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
          <img src="images/heart-small.png" alt="" />
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
