

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
