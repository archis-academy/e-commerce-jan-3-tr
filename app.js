const advertTrans = document.querySelectorAll(".advert-trans");
const advertPages = document.querySelectorAll(".advertisement-image-text-box");
let advertIndex = 0;
let advertInterval = setInterval(nextAdvert, 5000);
for (let i = 0; i < advertTrans.length; i++) {
  advertTrans[i].addEventListener("click", () => {
    advertIndex = i;
    clearInterval(advertInterval);
    advertInterval = setInterval(nextAdvert, 5000);
    console.log(advertInterval);
    for (let j = 0; j < advertTrans.length; j++) {
      advertTrans[j].classList.remove("default-trans");
      advertPages[j].classList.remove("default-advert");
    }
    advertTrans[i].classList.add("default-trans");
    advertPages[i].classList.add("default-advert");
  });
}
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
function nextAdvert() {
  advertPages[advertIndex].classList.remove("default-advert");
  advertTrans[advertIndex].classList.remove("default-trans");
  advertIndex = (advertIndex + 1) % advertPages.length;
  advertPages[advertIndex].classList.add("default-advert");
  advertTrans[advertIndex].classList.add("default-trans");
}

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
