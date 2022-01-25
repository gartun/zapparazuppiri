const docs = [
  {
    id: 1,
    title: "taahhütname",
    img: ["/img/taahhutname.jpg", "/img/taahhutname-1.jpg"],
    desc: "Her ildeki aday dosyası düzenine bağlı olmakla birlikte, çoğunlukla bir tane taahhütname karşımıza çıkar ve bu taahhütname SGS ile ilgili evraklar arasında yer alır. Ancak en garanti yöntem olarak, eğer dosyanın içinde iki taahhütnameye rastlanmışsa, bu belgeler üzerindeki tarihler karşılaştırılır ve belge içeriklerine göz atılır. Erken tarihli belge, SGS ile ilgili kategoriye, yani arama kısmına 'taahhütname' yazıldıktan sonra çıkan ilk sıradaki kategori başlığına; diğer belge ise, eğer içeriği staja yönelikse, stajla ilgili kategori başlığına gitmelidir.",
    keywords: "taahhütname taahhüt ederim tahütname taahütname"
  },
  {
    id: 2,
    title: "SGS sınav başvuru belgesi",
    img: ["/img/basvuru-belgesi.jpg", "/img/basvuru-belgesi-1.jpg"],
    desc: "Genellikle Staja Giriş Sınavı(SGS) ile ilgili belgelerin olduğu bölümde karşımıza çıkar. Adayın fotoğrafının olması zorunlu değildir. Format olarak 'Staja başlama ön başvuru formu'na benzemektedir, karıştırılabilir. Ekseriyetle sınava giriş başvuru belgelerinde bir başlık görülmezken, Staja başlama önbaşvuru formlarında, sayfanın en üstünde, belgenin niteliğini belli eden bir başlık vardır.",
    keywords: "kişisel bilgiler iletişim bilgileri sgs sınav başvuru belgesi belgesi başvuru sgs başvuru kişisel iletişim staja giriş sınav başvurusu kayıt kontrol"
  },
  {
    id: 1212,
    title: "Adli Sicil belgesi",
    img: ["/img/adli-sicil.webp", "/img/adli-sicil-1.webp", "/img/adli-sicil-2.jpg"],
    desc: "Adaydan, hem SGS öncesi hem de SGS sonrası staj evvelinde, istenir. İki 'Adli Sicil' kategorisi vardır, ayrım SGS ve staj olarak yapılır. Adli sicil istemiyle yazılan dilekçeler de 'Adli Sicil' kategorisine gider.",
    keywords: "adli sicil belgesi cumhuriyet başsavcılığına"
  },
  {
    id: 70,
    title: "Kimlik (Nüfus cüzdanı örneği)",
    img: ["/img/kimlik.jpg", "/img/kimlik-1.webp"],
    desc: "Adaya ait vatandaşlık bilgilerinin yer aldığı belgeler. 'Kimlik belgesi(Nüfus)' kategorisine gider.",
    keywords: "nüfus cüzdanı örneği kimlik tc kimlik"
  },
  {
    id: 71,
    title: "İkametgah belgesi (Yerleşim yerini gösterir belge)",
    img: ["/img/ikametgah.webp", "/img/ikametgah-1.webp"],
    desc: "Adaya ait yerleşim yerini gösteren belgeler. 'İkametgah belgesi(Adres)' kategorisine gider.",
    keywords: "ikametgah ilmuhaberi adres yerleşim yeri"
  },
  {
    id: 72,
    title: "stajyer hakkında bilgi alınacak kişiler",
    img: ["/img/bilgi-alinacak-kisiler.jpg"],
    desc: "SGS ile ilgili belgelerin arasında karşımıza çıkar, kendine ait kategorisi vardır, arama kısmına 'kişiler' yazıldığında listede bu kategori görülür.",
    keywords: "stajyer hakkında bilgi alınacak kişiler"
  },
  {
    id: 73,
    title: "staj başvuru formu (staj başlama evrak bilgi formu)",
    img: ["/img/staj-basvuru-formu.jpg", "/img/staj-basvuru-formu-2.jpg"],
    desc: "'Staj başvuru formu' kategorisine gider.",
    keywords: "staj başvuru formu staj başlama evrak bigi formu"
  },
  {
    id: 3,
    title: "hizmet listesi (aylık hizmet listesi)",
    img: ["/img/aylik-hizmet.jpg"],
    desc: "Çoğunlukla işyeri değişikliği dilekçelerinin yakınlarında karşınıza çıkar ve yine çoğunlukla birden fazla sayfadan oluşur. Meslek mensubunun yanında veya gözetiminde staj yapılmış ise bu belge dizisinin ilk sayfasında bir şirket adı yazılıdır, kategori eklenirken o şirketin vergi numarası da girilmelidir. Eğer meslek mensubu yanında staj yapılmışsa o meslek mensubunun vergi numarası girilmelidir.",
    keywords: "hizmet listesi ilk aylık hizmet listesi son aylık hizmet listesi sgk hizmet listesi"
  }, 
  {
    id: 368,
    title: "SGK işten ayrılış bildirgesi",
    img: ["/img/isten-ayrilis.jpg"],
    desc: "Adayın staj yaptığı firma ile bağlarının kopuşunun bildirgesidir. Uygun vergi no girilmelidir.",
    keywords: "sgk işten ayrılış bildirgesi"
  }, 
  {
    id: 3689,
    title: "Sözleşme (Ek Protokol)",
    img: ["/img/sözlesme.jpg", "/img/sözlesme-1.jpg"],
    desc: "Meslek mensubu/mesleki şirket ve işveren konumundaki şirket arasında kurulan iş anlaşmasının belgeleridir. 'Sözleşme' kategorisine gider.",
    keywords: "Sözleşme ek protokol tasdik sözleşmesi"
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
    img: ["/img/faaliyet-belgesi.jpg", "/img/faaliyet-belgesi-1.jpg", "/img/faaliyet-belgesi-2.jpg"],
    desc: "Meslek mensubunun(SMMM) çeşitli bilgilerini içerir, 'Faaliyet Belgesi(Meslek mensubunun)' kategorisine gider. Üye Sicil Kayıtları da buraya gider. Uygun vergi numarası girilmelidir.",
    keywords: "faaliyet belgesi üye sicil kaydı"
  },
  {
    id: 55,
    title: "tek kişi staj belgesi",
    img: ["/img/tek-kisi.jpg"],
    desc: "'Tek kişi staj belgesi' kategorisine gider. Uygun vergi numarası girilmelidir.",
    keywords: "tek kişi staj belgesi"
  },
  {
    id: 465,
    title: "staj onay belgesi",
    img: ["/img/staj-onay.jpg"],
    desc: "'Staj onay belgesi' kategorisine gider. İşveren durumundaki şirket ve yanında veya gözetiminde staj yapılacak olan meslek mensubu gibi bilgiler bu belgeden elde edilebilir. Uygun vergi numarası girilmelidir.",
    keywords: "staj onay belgesi"
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
    img: ["/img/sosyal-guvenlik-kayit.jpg", "/img/sosyal-guvenlik-kayit-1.jpg", "/img/sosyal-guvenlik-kayit-2.jpg"],
    desc: "Adayın sosyal güvence sorgulama sonuçlarını gösterir. 'İşe devam ettiği anlaşılmıştır', 'kayıtlara rastlanmıştır' gibi olumlu cümlelerin yer aldığı belgeler 'Sosyal Güvenlik kayıt belgesi(karekodlu)'; 'işten ayrıldığı anlaşılmıştır', 'kayda rastlanılmamıştır' gibi olumsuz yapılı cümlelerin yer aldığı belgeler ise diğer 'Sosyal Güvenlik kayıt belgesi' kategorisine gider",
    keywords: "ilgili makama sosyal güvenlik kayıt sorgulama"
  },
  {
    id: 10,
    title: "Çalışma Belgesi (Görev Tanımı)",
    img: ["/img/calisma-belgesi.jpg", "/img/calisma-belgesi-1.jpg", "/img/meslek-mensubu-gorevi.jpg", "/img/calisma-belgesi-2.jpg"],
    desc: "Çoğunlukla meslek mensubunun(SMMM) isminin geçtiği bu tür belgeler, mensubun şirkette üstlendiği görevi tanımlayan ifadeler içermektedir. İşveren konumunda olan şirketten bir yetkilinin imzasını taşır. Ancak, şu anda uygun bir kategori olmadığı için, adayların isimlerinin geçtiği belgeler de aynı kategoriye gitmektedir.",
    keywords: "çalışma belgesi meslek mensubunun şirketteki görevini gösterir görev tanımı görevi yapmaktadır"
  },
  {
    id: 11,
    title: "İstirahat Raporu (İş Görmezlik)",
    img: ["/img/istirahat-raporu.jpg", "/img/istirahat-raporu-1.jpg"],
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
    id: 13,
    title: "ticaret sicili gazetesi (sirküler, imza beyannamesi, vekaletname vs.)",
    img: ["/img/sicil-gazetesi.jpg", "/img/sicil-gazetesi-1.jpg", "/img/sicil-gazetesi-2.jpg"],
    desc: "Çoğunlukla işveren konumundaki şirketin ismini içeren ticaret sicili gazetesi sayfalarından, bu şirketin imza sirkülerinden, şirket sahiplerinin kimlik fotokopilerinden, vekaletnamelerden, imza beyannamelerinden oluşur.",
    keywords: "ticaret sicil gazetesi imza sirküleri imza beyannamesi vekaletname"
  },
  {
    id: 14,
    title: "SGS ile ilgili yazışmalar",
    img: ["/img/sgs-yazismalar.jpg", "/img/sgs-yazismalar-1.jpg"],
    desc: "Belgelerin konusu Staja giriş sınavı ile alakalıdır. 'SGS ile ilgili yazışmalar' kategorisine gider.",
    keywords: "sgs hakkında sgs sonucu hakkında"
  },
  {
    id: 141,
    title: "SGS sonuç belgesi",
    img: ["/img/sgs-sonuc.jpg"],
    desc: "Belgelerin konusu Staja giriş sınavı ile alakalıdır. 'SGS ile ilgili yazışmalar' kategorisine gider.",
    keywords: "ticaret sicil gazetesi imza sirküleri imza beyannamesi vekaletname"
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
    id: 276,
    title: "serbest meslek makbuzu/faturası",
    img: ["/img/makbuz-fatura.jpg"],
    desc: "Mesleki şirketlerce, işveren konumundaki şirketlere yönelik düzenlenir. 'Serbest meslek makbuzu/faturası' kategorisine gider. Uygun vergi numarası girilmelidir.",
    keywords: "serbest meslek faturası serbest meslek makbuzu"
  },
  {
    id: 280,
    title: "TEOS (Tesmer Modülü)",
    img: ["/img/teos.jpg"],
    desc: "Teos belgeleri, daha önceden 'Diğer' kategorisine gidiyordu. Artık 'Diğer muhtelif belgeler' kategorisine gidiyor.",
    keywords: "teos tesmer modülü"
  },
  {
    id: 777,
    title: "Ödeme Belgesi",
    img: ["/img/ödeme-belgesi.jpg"],
    desc: "'Ödeme belgesi' kategorisine gider.",
    keywords: "ödeme belgesi bordro zarfı"
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
