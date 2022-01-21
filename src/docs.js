const docs = [
  {
    id: 1,
    title: "taahhütname",
    img: ["/img/taahhutname.jpg", "/img/taahhutname-1.jpg"],
    desc: "Z'den A'ya yapılan sıralamada karşılaşılan ilk; A'dan Z'ye yapılan sıralamada ise karşılaşılan son taahhütnamenin SGS ile ilgili olma ihtimali yüksek. Ancak en garanti yöntem olarak, eğer dosyanın içinde iki taahhütnameye rastlanmışsa, bu belgeler üzerindeki tarihler karşılaştırılır. Erken tarihli belge, SGS ile ilgili kategoriye, yani arama kısmına 'taahhütname' yazıldıktan sonra çıkan ilk sıradaki kategori başlığına; diğer belge ise stajla ilgili kategori başlığına gitmelidir.",
    keywords: "taahhütname taahhüt ederim tahütname taahütname"
  },
  {
    id: 2,
    title: "SGS sınav başvuru belgesi",
    img: ["/img/basvuru-belgesi.jpg"],
    desc: "Genellikle Staja Giriş Sınavı(SGS) ile ilgili belgelerin olduğu bölümde karşımıza çıkar. Yani, A-Z sıralaması seçiliyse sonlara doğru, Z-A sıralaması seçiliyse başlarda. Adayın fotoğrafının olması zorunlu değildir.",
    keywords: "kişisel bilgiler iletişim bilgileri sgs sınav başvuru belgesi belgesi başvuru sgs başvuru kişisel iletişim"
  },
  {
    id: 3,
    title: "hizmet listesi (aylık hizmet listesi)",
    img: ["/img/aylik-hizmet.jpg"],
    desc: "Çoğunlukla işyeri değişikliği dilekçelerinin yakınlarında karşınıza çıkar ve yine çoğunlukla birden fazla sayfadan oluşur. Meslek mensubunun yanında veya gözetiminde staj yapılmış ise bu belge dizisinin ilk sayfasında bir şirket adı yazılıdır, kategori eklenirken o şirketin vergi numarası da girilmelidir. Eğer meslek mensubu yanında staj yapılmışsa o meslek mensubunun vergi numarası girilmelidir.",
    keywords: "hizmet listesi ilk aylık hizmet listesi son aylık hizmet listesi sgk hizmet listesi"
  },
  {
    id: 4,
    title: "Meslek Mensubu Ruhsatı",
    img: ["/img/mensup-ruhsati.jpg"],
    desc: "Meslek mensubunun(SMMM) görev yapma yetkisini gösteren bu belge çoğunlukla 'Oda Kayıt Belgesi' veya 'Faaliyet Belgesi' ile birlikte arka arkaya gelecek şekilde karşımıza çıkar, 'Meslek Mensubunun Ruhsatı' kategorisine gider. Uygun vergi numarası girilmelidir.",
    keywords: "serbest mali müşavir ruhsatı ruhsat"
  },
  {
    id: 5,
    title: "Faaliyet Belgesi (Üye Sicil Kaydı)",
    img: ["/img/faaliyet-belgesi.jpg", "/img/faaliyet-belgesi-1.jpg"],
    desc: "Meslek mensubunun(SMMM) çeşitli bilgilerini içerir, 'Faaliyet Belgesi(Meslek mensubunun)' kategorisine gider.",
    keywords: "faaliyet belgesi üye sicil kaydı"
  },
  {
    id: 6,
    title: "Dilekçe (Evrak Teslim)",
    img: ["/img/evrak-teslim.jpg"],
    desc: "Kendine ait bir kategori yok. Arama kısmına 'dilekçe' yazılır ve listede 'Dilekçe (Diğer)' bulunur, bunun hemen üstündeki 'Dilekçe' kategorisine atılır.",
    keywords: "evrak teslim dilekçesi dilekçe"
  },
  {
    id: 7,
    title: "Dilekçe (Doğum İzni)",
    img: ["/img/dilekce-dogum-izni.jpg"],
    desc: "Üst kategori adı 'Dilekçe'dir. Bu dilekçelerin gidebileceği iki alt kategori mevcuttur; 'doğum ücretsiz izni' ve 'doğum izni'. Tekerrür var, bu sebeple hepsini 'doğum izni'ne atacağız.",
    keywords: "doğum izni dilekçesi izin dilekçe"
  },
  {
    id: 8,
    title: "Sosyal güvenlik kayıt sorgulama",
    img: ["/img/sosyal-guvenlik-kayit.jpg", "/img/sosyal-guvenlik-kayit-1.jpg"],
    desc: "Adayın sosyal güvence sorgulama sonuçlarını gösterir. 'Devam ettiği anlaşılmıştır', 'kayıtlara rastlanmıştır' gibi olumlu cümlelerin yer aldığı belgeler 'Sosyal Güvenlik kayıt belgesi(karekodlu)'; 'işten ayrıldığı anlaşılmıştır' gibi olumsuz yapılı cümlelerin yer aldığı belgeler ise diğer 'Sosyal Güvenlik kayıt belgesi' kategorisine gider",
    keywords: "ilgili makama sosyal güvenlik kayıt sorgulama"
  },
  {
    id: 10,
    title: "Çalışma Belgesi (Görev Tanımı)",
    img: ["/img/calisma-belgesi.jpg", "/img/calisma-belgesi-1.jpg", "/img/meslek-mensubu-gorevi.jpg"],
    desc: "Çoğunlukla meslek mensubunun(SMMM) isminin geçtiği bu tür belgeler, mensubun şirkette üstlendiği görevi tanımlayan ifadeler içermektedir. İşveren konumunda olan şirketten bir yetkilinin imzasını taşır. Ancak, şu anda uygun bir kategori olmadığı için, adayların isimlerinin geçtiği belgeler de aynı kategoriye gitmektedir.",
    keywords: "çalışma belgesi meslek mensubunun şirketteki görevini gösterir görev tanımı görevi yapmaktadır"
  },
  {
    id: 11,
    title: "İstirahat Raporu (İş Görmezlik)",
    img: ["/img/istirahat-raporu.jpg"],
    desc: "Çoğunlukla adaya aittir, adayın belli bir süre boyunca staja ara vereceği anlamına gelir, 'Sağlık raporu veya işgörmezlik belgesi' kategorisine gider.",
    keywords: "istirahat raporu rapor işgörmezlik belgesi"
  },
  {
    id: 12,
    title: "Vergi Dairesinden alınan",
    img: ["/img/vergi-dairesinden-alinan.jpg"],
    desc: "Vergi mükellefiyet belgesi ile karıştırılma ihtimali yüksek. Ancak, bu belge şirketin faaliyetleri ve mükellefiyeti hakkında bilgiler içermesiyle vergi mükellefiyet belgesinden ayırt edilebilir. ",
    keywords: "internet vergi dairesi şirket vergi faaliyetler mükellefiyet dairesinden alınan"
  },

  {
    id: 15,
    title: "mezun belgesi (E-Devlet)",
    img: ["/img/mezun-belgesi.jpg"],
    desc: "'Mezun Belgesi' başlıklı bu belge E-Devlet üzerinden alınmıştır ve genellikle SGS ile ilgili evrakların arasında karşımıza çıkar. Bu sebeple 'Mezun Belgesi(E-Devlet)' kategorisine gider.",
    keywords: "e-devlet mezun belgesi yök"
  },
  {
    id: 16,
    title: "Dilekçe (Meslek mensubu değişikliği)",
    img: ["/img/meslek-mensubu-degisikligi-dilekcesi.jpg"],
    desc: "'Meslek Mensubu Değişikliği Dilekçesi' kategorisine gider.",
    keywords: "meslek mensubu değişikliği dilekçesi"
  },
  {
    id: 17,
    title: "Vize Fotokopisi",
    img: ["/img/vize-fotokopisi.jpg"],
    desc: "Nadiren karşılaşırsınız, belki de hiç karşılaşmazsınız.",
    keywords: "vize pasaport yurtdışı"
  },

];

export default docs;