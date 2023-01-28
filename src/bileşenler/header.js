const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const mHeader = document.createElement("div");
  mHeader.classList="header";

  const dateSpan = document.createElement("span");
  dateSpan.classList="date";
  dateSpan.textContent=tarih;

  const bMain = document.createElement("h1");
  bMain.textContent=baslik;

  const tempSpan = document.createElement("span");
  tempSpan.classList="temp";
  tempSpan.textContent=yazi;

//Sıralama
mHeader.appendChild(dateSpan);
mHeader.appendChild(bMain);
mHeader.appendChild(tempSpan);

return mHeader;

}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  document.querySelector(secici).appendChild(Header("Günce","28.01.2023","Haberlerin Merkezi"));
 
}

export { Header, headerEkleyici }
