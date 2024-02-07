window.addEventListener("resize", () => {
  if (window.innerWidth >= 1010) {
    asideBar.style.display = "none";
    scrollBody.style.overflowY = "scroll";
    isBurgerOpen = !isBurgerOpen;
  } else {
    asideBar.style.display = "none";
    isBurgerOpen = !isBurgerOpen;
  }
});
