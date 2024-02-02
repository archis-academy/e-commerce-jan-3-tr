const productcard = document.getElementById("productcard");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())

// API'den ürün bilgilerini çek
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
productcard.innerHTML = htmlContent;


function renderUrunler() {
    const wishlistProducts = JSON.parse(localStorage.getItem("products"));

    if (wishlistProducts) {
        productcard.innerHTML = wishlistProducts
            .map(
                (product) =>
                    `
      <div class="container-card">
        <img onclick="deleteurun(${product.id
                    })" class="icons" src="images/icon-delete.svg"/>
        <img class="column-product" src="${product.image}" alt="${product.title
                    }" />
        <p class="col-paragraph">Add To Cart</p>
        <div>
          <p class="explanation-product">${product.title
                        .substring(0, 20)
                        .concat(" ...")}</p>
        </div>
        <div class="prices">
          <p>${product.price}₺</p>
        </div>
      </div>
      `
            )
            .join("");
    } else {
        productcard.innerHTML = `<p>Wishlist is empty</p>`;
    }
}

renderUrunler();

function deleteurun(urunId) {
    const wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts"));
    const kalanUrunler = wishlistProducts.filter((urun) => {
        return urun.id !== urunId;
    });
    localStorage.setItem("wishlistProducts", JSON.stringify(kalanUrunler));
    renderUrunler();
}

//buradan sonrası chatgpt

// birleştiremedim. çünkü idrak edemedim tam olarak. süreç nasıl işliyor? Önce başka bir yerden 
//bilgileri fotoğrafları alıp html css yazıp sonra mı onları silip apı yazıyoruz. bunun süreçlerini baştan sonra görmem gerek.
const productcard = document.getElementById("productcard");

// API'den ürün bilgilerini çek
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        // Ürünleri işleyerek HTML içeriği oluştur
        const htmlContent = products
            .map(product => `
        <div class="container-card">
          <!-- ... (diğer HTML içeriği) ... -->
          <img onclick="deleteurun(${product.id})" class="icons" src="images/icon-delete.svg"/>
          <img class="column-product" src="${product.image}" alt="${product.title}" />
          <p class="col-paragraph">Add To Cart</p>
          <div>
            <p class="explanation-product">${product.title.substring(0, 20).concat(" ...")}</p>
          </div>
          <div class="prices">
            <p>${product.price}₺</p>
          </div>
        </div>
      `)
            .join("");

        // Oluşturulan HTML içeriğini sayfada göster
        productcard.innerHTML = htmlContent;
    })
    .catch(error => console.error("API çağrısı başarısız:", error));
