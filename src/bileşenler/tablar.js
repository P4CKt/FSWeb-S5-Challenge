import axios from 'axios';
const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const tMain = document.createElement("div");
  tMain.classList="topics";

//   const fTab = document.createElement("div");
//   fTab.classList="tab";
//  fTab.textContent="zıttırı pıt"
//   const sTab = document.createElement("div");
//   sTab.classList="tab";

//   const tTab = document.createElement("div");
//   tTab.classList="tab";

for(let item of konu){
  const fTab = document.createElement("div");
  fTab.classList="tab";
  fTab.textContent=item;
  tMain.appendChild(fTab);
}

  return tMain;
}

const dummy = {"konular":["javascript","bootstrap","teknoloji","jquery","node.js"]};



const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
const dataReserve = async function(){

await axios.get(`http://localhost:5001/api/konular`)
.then((response)=>{
console.log(response);
document.querySelector(secici).appendChild(Tablar(response.data.konular));
}).catch((error)=>{
  console.log(error)
})
}
return dataReserve();
}


export { Tablar, tabEkleyici }
