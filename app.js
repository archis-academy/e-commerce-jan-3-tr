const apiEndPoint = "https://fakestoreapi.com/products";
const searchInput = document.querySelector("#searchInput");
async function getUrunlerByCategory(kategori) {
  const responseUrunler = await fetch(`${apiEndPoint}?category=${kategori}`);
  const urunler = await responseUrunler.json();
  return urunler;
}

function kategoriUrunEkleme(kategori) {
  const urunListesiDiv = document.getElementById("categoryData");
  const womansCategoryBtn = document.querySelector(".womans-dropdown");
  const mensCategoryBtn = document.querySelector(".mens-dropdown");
  let isOpenWoman = false;
  let isOpenMen = false;

  womansCategoryBtn.addEventListener("click", () => {
    if (!isOpenWoman) {
      urunListesiDiv.style.display = "block";
      isOpenMen = false;
      isOpenWoman = !isOpenWoman;

      console.log("deneme");
    } else {
      urunListesiDiv.style.display = "none";
      isOpenWoman = !isOpenWoman;
    }
  });
  mensCategoryBtn.addEventListener("click", () => {
    if (!isOpenMen) {
      urunListesiDiv.style.display = "block";
      isOpenWoman = false;
      isOpenMen = !isOpenMen;
    } else {
      urunListesiDiv.style.display = "none";
      isOpenMen = !isOpenMen;
    }
  });
  getUrunlerByCategory(kategori).then((urunler) => {
    searchInput.addEventListener("keyup", (event) => {
      const filteredProducts = urunler.filter((urun) => {
        return urun.title.toLowerCase();
      });
      console.log(filteredProducts);
    });

    urunler.forEach((urun) => {
      const urunDiv = document.createElement("div");
      urunDiv.className = "category-urun";

      urunDiv.innerHTML = `
      <img class="category-images" src="${urun.image}"/>
      <div>
      <h6 class="category-name">${urun.category}</h6>
      <p class="category-title">${urun.title}</p>
      </div>
       `;
      womansCategoryBtn.addEventListener("click", () => {
        if (urun.category == "women's clothing") {
          urunListesiDiv.appendChild(urunDiv);
        } else {
          urunListesiDiv.removeChild(urunDiv);
        }
      });
      mensCategoryBtn.addEventListener("click", () => {
        if (urun.category == "men's clothing") {
          urunListesiDiv.appendChild(urunDiv);
        } else {
          urunListesiDiv.removeChild(urunDiv);
        }
      });
    });
  });
}

kategoriUrunEkleme("title");
const adevertTrans = document.querySelectorAll(".adevert-trans");
const advertPages = document.querySelectorAll(".advertisement-image-text-box");
console.log(adevertTrans);
let advertİndex = 0;
let advertİnterval = setInterval(nextAdvert, 5000);
for (let i = 0; i < adevertTrans.length; i++) {
  adevertTrans[i].addEventListener("click", () => {
    advertİndex = i;
    clearInterval(advertİnterval);
    advertİnterval = setInterval(nextAdvert, 5000);
    console.log(advertİnterval);
    for (let j = 0; j < adevertTrans.length; j++) {
      adevertTrans[j].classList.remove("default-trans");
      advertPages[j].classList.remove("default-advert");
    }
    adevertTrans[i].classList.add("default-trans");
    advertPages[i].classList.add("default-advert");
  });
}
console.log(advertİndex);
console.log(advertİnterval);

function nextAdvert() {
  advertPages[advertİndex].classList.remove("default-advert");
  adevertTrans[advertİndex].classList.remove("default-trans");
  advertİndex = (advertİndex + 1) % advertPages.length;
  advertPages[advertİndex].classList.add("default-advert");
  adevertTrans[advertİndex].classList.add("default-trans");
}

const burgerMenu = document.querySelector(".navbar-burger-menu-icon");
const asideBar = document.querySelector(".exclusive-aside-continer");
const scrollBody = document.body;
let isBurgerOpen = false;
burgerMenu.addEventListener("click", () => {
  if (!isBurgerOpen) {
    asideBar.style.display = "inline-block";
    scrollBody.style.overflowY = "hidden";
    isBurgerOpen = !isBurgerOpen;
  } else {
    asideBar.style.display = "none";
    scrollBody.style.overflowY = "scroll";
    isBurgerOpen = !isBurgerOpen;
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1010) {
    asideBar.style.display = "inline-block";
    scrollBody.style.overflowY = "scroll";
    isBurgerOpen = !isBurgerOpen;
  } else {
    asideBar.style.display = "none";
    isBurgerOpen = !isBurgerOpen;
  }
});
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
