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
   <div class="card">
   <img onlick="deleteurun(${paket.id})" class="icons" src="images/icon-delete.svg"/>
     <img class="canta" src="${paket.image}" alt="${paket.title}" />
     <p class="lorem">Add To Cart</p>
     <img class="computer" src="images/Cart1.svg" alt="" />
     <div>
       <p class="gucci">${paket.title
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
  <div class="card">
    <img class="canta" src="${paket.image}" alt="${paket.title}" />
    <p class="lorem">Add To Cart</p>
    <div>
      <p class="gucci">${paket.title
          .substring(0, 20)
          .concat(" ...")
      }</p>
    </div>
    <div class="prices">
      <p>${paket.price}₺</p>
    </div>
    <div class="vectors">
    <img class="vector" src="images/Vector.png" alt="yıldızlar" />
    <img class="vector" src="images/Vector.png" alt="yıldızlar" />
    <img class="vector" src="images/Vector.png" alt="yıldızlar" />
    <img class="vector" src="images/Vector.png" alt="yıldızlar" />
    <img class="vector" src="images/Vector.png" alt="yıldızlar" />
  </div>
  </div>
  `
 ).join("");
  