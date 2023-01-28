import axios from 'axios';


const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cHeader = document.createElement("div");
  cHeader.classList="card";

  const cMain = document.createElement("div");
  cMain.classList="headline";
  cMain.textContent=makale.anabaslik;

  const cAuthor = document.createElement("div");
  cAuthor.classList="author";

  const cContainer = document.createElement("div");
  cContainer.classList="img-container";
  

  const cImg= document.createElement("img");
  cImg.src=makale.yazarFoto;

  const cSpan = document.createElement("span");
  cSpan.textContent=`${makale.yazarAdi} tarafından`;

  cHeader.appendChild(cMain);
  cHeader.appendChild(cAuthor);
  cAuthor.appendChild(cContainer);
  cContainer.appendChild(cImg);
  cAuthor.appendChild(cSpan);
  
  cHeader.addEventListener("click",()=>
  console.log(makale.anabaslik))

  return cHeader;
  
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const dataReserve = async function (){
    const select =document.querySelector(secici);
  
  axios
  .get(`http://localhost:5001/api/makaleler`)
  .then( function (response) {
    const dataAdress =response.data.makaleler;
    for(const obj in dataAdress){
      console.log("OBJ ŞEYSİ"+obj);
        for (let index = 0; index < 99; index++) {
            console.log("For Döngüsü"+Card(dataAdress[obj][index]));
            select.appendChild(Card(dataAdress[obj][index]));
          //burada arayin diğer elemanlarını döndürmesi gerekiyor ama olmadı
        }
      
    }


  }).catch((error)=> console.log(error));

}




return dataReserve();
}

export { Card, cardEkleyici }
