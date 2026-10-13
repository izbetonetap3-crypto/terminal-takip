# Terminal Takip – iPhone Kurulum Rehberi

Bu klasör, Terminal Takip'in iPhone ve iPad'de çalışan sürümüdür. Android sürümüyle aynı uygulamadır; Safari üzerinden **Ana Ekrana Ekle** ile kurulur, simgesiyle tam ekran açılır ve ilk açılıştan sonra **internetsiz çalışır**.

> Not: iPhone, bilgisayardan gönderilen bir HTML dosyasını uygulama gibi çalıştıramaz. Bu yüzden klasörün bir kez internette (HTTPS) yayınlanması gerekir. Ücretsizdir ve 5 dakika sürer.

---

## 1. Klasörü internette yayınlayın (bir kez yapılır)

### Seçenek A – Netlify Drop (en kolayı)
1. Bilgisayardan **https://app.netlify.com/drop** adresine gidin, ücretsiz hesap açın.
2. `TerminalTakip_iPhone` klasörünü (zip'ten çıkarılmış hâlini) sayfaya sürükleyip bırakın.
3. Size `https://xxxx.netlify.app` gibi bir adres verilir. **Site settings → Change site name** ile adı `terminaltakip` gibi kolay bir isim yapabilirsiniz.

### Seçenek B – GitHub Pages
1. GitHub'da yeni bir depo açın, klasörün **içindeki** tüm dosyaları yükleyin (`index.html` en üst seviyede olmalı).
2. **Settings → Pages → Branch: main / (root)** seçip kaydedin.
3. Adres: `https://KULLANICIADI.github.io/DEPOADI/`

---

## 2. iPhone'a kurun (her telefonda)
1. Adresi iPhone'da **Safari** ile açın (Chrome değil).
2. Alttaki **Paylaş** düğmesine (□↑) dokunun.
3. **Ana Ekrana Ekle** → **Ekle**.
4. Ana ekranda Terminal Takip simgesi oluşur; buradan açın.

İlk açılışta internet gerekir, sonrasında sahada internetsiz kullanılabilir.

---

## 3. Bilmeniz gerekenler
- **Veriler telefonda saklanır.** Uygulamayı ana ekrandan silmek verileri de siler. Önemli şantiyeleri düzenli olarak PDF alın.
- Uygulamayı **her zaman ana ekrandaki simgeden** açın. Safari sekmesinden açılan sürümün verileri ayrı tutulur ve iOS, uzun süre kullanılmayan Safari sitelerinin verilerini silebilir.
- **Fotoğraf:** "Kamera" ile iPhone kamerası açılır, galeriden seçim de çalışır.
- **PDF:** Rapor oluşturulunca iPhone paylaş menüsü açılır → **Dosyalar'a Kaydet**, WhatsApp, Mail vb. seçebilirsiniz.
- **Yazdır:** iPhone yazdırma ekranı açılır (AirPrint yazıcı veya "PDF olarak paylaş").

## 4. Güncelleme nasıl yapılır?
`index.html` dosyasında değişiklik yaptığınızda, `sw.js` dosyasının en üstündeki `VERSION` değerini artırın (örn. `tt-v01-2`) ve klasörü aynı yere tekrar yükleyin. Telefonlar uygulamayı bir sonraki açılışta günceller.

## 5. App Store'da yayınlamak isterseniz
Uygulama Capacitor ile yapıldığı için aynı kodla gerçek bir iOS uygulaması da üretilebilir. Bunun için şunlar gerekir:
- Bir **Mac** bilgisayar ve **Xcode**
- **Apple Developer** hesabı (yıllık 99 USD)
- Projede `npx cap add ios` → Xcode'da imzalama → App Store Connect'e yükleme ve Apple incelemesi

Ekip içi kullanım için yukarıdaki Ana Ekrana Ekle yöntemi bu masraflar olmadan aynı işi görür.
