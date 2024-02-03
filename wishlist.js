//const productcard = document.getElementById("productcard");

// function renderUrunler() {
//     const wishlistProducts = JSON.parse(localStorage.getItem("products"));

//     if (wishlistProducts) {
//         productcard.innerHTML = wishlistProducts
//             .map(
//                 (product) =>
//                     `
//       <div class="container-card">
//         <img onclick="deleteurun(${product.id
//                     })" class="icons" src="images/icon-delete.svg"/>
//         <img class="column-product" src="${product.image}" alt="${product.title
//                     }" />
//         <p class="col-paragraph">Add To Cart</p>
//         <div>
//           <p class="explanation-product">${product.title
//                         .substring(0, 20)
//                         .concat(" ...")}</p>
//         </div>
//         <div class="prices">
//           <p>${product.price}₺</p>
//         </div>
//       </div>
//       `
//             )
//             .join("");
//     } else {
//         productcard.innerHTML = `<p>Wishlist is empty</p>`;
//     }
// }

renderUrunler();

function deleteurun(urunId) {
  const wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts"));
  const kalanUrunler = wishlistProducts.filter((urun) => {
    return urun.id !== urunId; //burada ne yapıldı, ayrıca çalışmıyor silmiyor hata veriyor.
  });
  localStorage.setItem("wishlistProducts", JSON.stringify(kalanUrunler));
  renderUrunler(); //burada neden tekrar yazıldı
}

//buradan sonrası benim:

// süreç nasıl işliyor? Önce başka bir yerden 
//bilgileri fotoğrafları alıp html css yazıp sonra mı onları silip apı yazıyoruz. bunun süreçlerini baştan sonra görmem gerek.

const productcard = document.getElementById("productcard");
const wishlist_item_count = document.getElementById("wishlist-item-count");
let count = 0;

function renderUrunler() {
  // API'den ürün bilgilerini çek
  const wishlistProducts = JSON.parse(localStorage.getItem("products"));// bunda da hiçbirşey almıyoruz. localstoragede bir şey yok?


  if (wishlistProducts == null) { // buna girmediği zaman else de girmiyor, konsol boş

    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(products => {
        // Ürünleri işleyerek HTML içeriği oluştur
        console.log(products);
        let count = 0;
        const htmlContent = products
          .map(product => {
            count++;
            console.log(count);
            // burada neden return dedik? aşağıdakiler okunmaması gerekmez miydi?
            return ` 
        <div class="container-card">
          <!-- ... (diğer HTML içeriği) ... -->
          <img onclick="deleteurun(${product.id})" class="icons" src="/images/dustbin.png"/>
          <img class="column-product" src="${product.image}" alt="${product.title}" />
          <p class="col-paragraph">Add To Cart</p>
          <div>
            <p class="explanation-product">${product.title.substring(0, 20).concat(" ...")}</p>
          </div>
          <div class="prices">
            <p>${product.price}₺</p>
          </div>
        </div>
      `
          })
          .join("");

        // Oluşturulan HTML içeriğini sayfada göster
        productcard.innerHTML = htmlContent;

        wishlist_item_count.innerText = `(${count})`; // count değerini göster
        console.log(count);
      })
      .catch(error => console.error("API çağrısı başarısız:", error));
  }
  else {
    wishlist_item_count.innerText = `(${count})`;
    productcard.innerHTML = `<p>Wishlist is empty</p>`;
  }

}

//burası da çalışmadı
let dustbinElements = document.getElementsByClassName("icons");
// 'dustbin' adlı HTMLCollection üzerinde döngü yap
for (let i = 0; i < dustbinElements.length; i++) {
  // Her bir öğe için 'click' olay dinleyicisi ekle
  dustbinElements[i].addEventListener("click", function () {
    // 'invisible' sınıfını ekleyerek görünmez yap
    this.classList.add("invisible");
  });
}
