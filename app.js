/*Featured Product - Start*/
const fpDays = document.getElementById("fp-days");
const fpHours = document.getElementById("fp-hours");
const fpMinutes = document.getElementById("fp-minutes");
const fpSeconds = document.getElementById("fp-seconds");

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json));

let seconds = 86400;

function timer() {
  let days        = Math.floor(seconds/24/60/60);
  let hoursLeft   = Math.floor((seconds) - (days*86400));
  let hours       = Math.floor(hoursLeft/3600);
  let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  let minutes     = Math.floor(minutesLeft/60);
  let remainingSeconds = seconds % 60;

  function twoDigits(n) {
    return (n <= 9 ? "0" + n : n);
  }

  fpDays.innerText = twoDigits(days);
  localStorage.setItem('remainingDays', days);

  fpHours.innerText = twoDigits(hours);
  localStorage.setItem('remainingHours', hours);

  fpMinutes.innerText = twoDigits(minutes);
  localStorage.setItem('remainingMinutes', minutes);

  fpSeconds.innerText = twoDigits(remainingSeconds);
  localStorage.setItem('remainingSeconds', remainingSeconds);

  if (seconds === 0) {
    seconds = 86400;
  } else {
    seconds--;
  }
 
}

if(localStorage.getItem("remainingDays")){
    let remainingDays = parseInt(localStorage.getItem("remainingDays"));
    let remainingHours = parseInt(localStorage.getItem("remainingHours"));
    let remainingMinutes = parseInt(localStorage.getItem("remainingMinutes"));
    let remainingSeconds = parseInt(localStorage.getItem("remainingSeconds"));
    let totalSeconds = remainingDays*86400 + remainingHours*3600 + remainingMinutes*60 + remainingSeconds;
    seconds = totalSeconds;
}

setInterval('timer()', 1000);

/*Featured Product - End*/