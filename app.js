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
