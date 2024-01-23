const adevertTrans = document.querySelectorAll(".adevert-trans");
console.log(adevertTrans);

for (let i = 0; i < adevertTrans.length; i++) {
  adevertTrans[i].addEventListener("click", () => {
    for (let j = 0; j < adevertTrans.length; j++) {
      adevertTrans[j].style.background = "#fff";
      adevertTrans[j].style.border = "none";
      adevertTrans[j].style.opacity = "0.5";
    }
    adevertTrans[i].style.background = "#db4444";
    adevertTrans[i].style.border = "2px solid white";
    adevertTrans[i].style.opacity = "1";
  });
}
