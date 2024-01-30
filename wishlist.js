  const adimlar =JSON.parse(localStorage.getItem("ürünler"));
  console.log(adimlar);
  
  const kalanPaketler =[];
  const paketler = [];
  const justForYou=[];
  const justForYouList =document.getElementById("justForYou");
  justForYou.push(adimlar[1], adimlar[2], adimlar[3], adimlar[4]);

  paketler.push(adimlar[8], adimlar[9], adimlar[10], adimlar[11]);
  const paketcard = document.getElementById("paketcard");
  function deleteurun(urunId) {
     kalanPaketler = paketler.filter((urun) => {
      return urun.id !== urunId;
    });
    console.log(paketler);
  }
  paketcard.innerHTML = paketler.map((paket) => 
   `
   <div class="container-card">
   <img onclick="urunSil(1)" class="icons" src="images/icon-delete.svg"/>
     <img class="column-product" src="${paket.image}" alt="${paket.title}" />
     <p class="col-paragraph">Add To Cart</p>
     <img class="computer" src="images/Cart1.svg" alt="" />
     <div>
       <p class="explanation-product">${paket.title
           .substring(0, 20)
           .concat(" ...")
       }</p>
     </div>
     <div class="prices">
       <p>${paket.price}₺</p>
     </div>
   </div>
   `
  ).join("");

  justForYouList.innerHTML = justForYou.map((paket) => 
  `
  <div class="container-card">
    <img class="column-product" src="${paket.image}" alt="${paket.title}" />
    <p class="col-paragraph">Add To Cart</p>
    <div>
      <p class="explanation-product">${paket.title
          .substring(0, 20)
          .concat(" ...")
      }</p>
    </div>
    <div class="prices">
      <p>${paket.price}₺</p>
    </div>
    <div class="vectors">
    <img class="vector" src="images/Vector.png" alt="" />
    <img class="vector" src="images/Vector.png" alt="" />
    <img class="vector" src="images/Vector.png" alt="" />
    <img class="vector" src="images/Vector.png" alt="" />
    <img class="vector" src="images/Vector.png" alt="" />
  </div>
  </div>
  `
 ).join("");

 function urunSil(urunId) {
    const silinecekIndex = paketler.findIndex((urun) => urun.id === urunId);

    if (silinecekIndex !== -1) {
      paketler.splice(silinecekIndex, 1);

     
      renderUrunler();
      alert("Ürün başarıyla silindi!");
    } else {
      alert("Ürün bulunamadı!");
    }
  }
  function renderUrunler() {
    paketcard.innerHTML = paketler.map((paket) =>
      `
      <div class="container-card">
        <img onclick="urunSil(${paket.id})" class="icons" src="images/icon-delete.svg"/>
        <img class="column-product" src="${paket.image}" alt="${paket.title}" />
        <p class="col-paragraph">Add To Cart</p>
        <div>
          <p class="explanation-product">${paket.title.substring(0, 20).concat(" ...")}</p>
        </div>
        <div class="prices">
          <p>${paket.price}₺</p>
        </div>
      </div>
      `
    ).join("");
  }
  renderUrunler();

  