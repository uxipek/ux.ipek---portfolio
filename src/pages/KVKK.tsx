import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LegalSupportCard } from "../components/LegalSupportCard";

export function KVKKPage({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => {
    document.title = "KVKK Aydınlatma Metni | UXIPEK";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "UXIPEK tarafından kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metnini inceleyin.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "UXIPEK tarafından kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metnini inceleyin.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-background w-full min-h-screen pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <Link to={`/${lang}`} className="inline-flex items-center gap-2 text-text-primary/80 hover:text-brand-transformation transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary mb-6">
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-text-primary/70 text-lg font-light mb-8 leading-[1.7] max-w-2xl">
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, verilerinizin nasıl işlendiği ve korunduğu hakkında şeffaf bilgilendirme.
        </p>
        <p className="text-text-primary/40 text-xs font-bold mb-16 uppercase tracking-[0.2em]">
          Son Güncelleme: 12 Temmuz 2026
        </p>

        <div className="space-y-16 text-text-primary/80 font-light leading-[1.7]">
          
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">01</span> 
              Veri Sorumlusu
            </h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, UXIPEK marka ve web sitesi faaliyetlerini yürüten hizmet sağlayıcısı ("Veri Sorumlusu") olarak, kişisel verilerinizi işbu aydınlatma metninde açıklanan şartlar dahilinde işliyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">02</span> 
              İşlenme Amaçları
            </h2>
            <p className="mb-4">
              Kişisel verileriniz aşağıdaki profesyonel amaçlarla işlenmektedir:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-brand-primary"></div></div>
                <span>Taleplerinizin ve form gönderimlerinizin değerlendirilip size dönüş yapılması.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-brand-primary"></div></div>
                <span>Tasarım ve danışmanlık hizmetlerine yönelik proje tekliflerinin hazırlanması.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-brand-primary"></div></div>
                <span>Web sitesi altyapısının güvenliğinin sağlanması ve performans analizlerinin yürütülmesi.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-brand-primary"></div></div>
                <span>İzin vermiş olmanız halinde, tasarım, büyüme stratejileri ve içeriklerle ilgili bülten iletimi.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">03</span> 
              Toplama Yöntemi ve Hukuki Sebepler
            </h2>
            <p className="mb-4">
              Kişisel verileriniz, web sitemiz (https://www.uxipek.com) üzerinde yer alan iletişim ve başvuru formlarının doldurulması ile çerezler vasıtasıyla elektronik ortamda toplanmaktadır. Bu veriler KVKK'nın 5. maddesinde belirtilen şu hukuki sebeplere dayanarak işlenmektedir:
            </p>
            <ul className="space-y-2">
              <li className="p-4 rounded-xl bg-white border border-brand-primary/5 text-sm">Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması.</li>
              <li className="p-4 rounded-xl bg-white border border-brand-primary/5 text-sm">İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatlerimiz için zorunlu olması.</li>
              <li className="p-4 rounded-xl bg-white border border-brand-primary/5 text-sm">Pazarlama iletişimleri için açık rızanızın bulunması.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">04</span> 
              Olası Alıcılar ve Veri Aktarımı
            </h2>
            <p>
              Kişisel verileriniz, yalnızca iş süreçlerimizin gerektirdiği durumlarda, güvenli altyapı hizmeti sağlayan iş ortaklarımıza (örneğin; sunucu ve barındırma hizmeti alınan bulut platformları, analitik hizmet sağlayıcıları) aktarılabilir. Yasal yükümlülüklerin gerektirdiği hallerde yetkili kamu kurumlarına aktarım yapılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">05</span> 
              Saklama Süresi ve Güvenlik Tedbirleri
            </h2>
            <p className="mb-4">
              Verileriniz, işleme amacının gerektirdiği süre boyunca güvenle saklanır ve bu süre sona erdiğinde mevzuata uygun olarak imha edilir. Veri güvenliği için:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-full bg-brand-primary/5 text-sm font-medium">SSL Şifreleme</div>
              <div className="px-5 py-3 rounded-full bg-brand-primary/5 text-sm font-medium">Güvenli Veri Tabanı Mimarisi</div>
              <div className="px-5 py-3 rounded-full bg-brand-primary/5 text-sm font-medium">Erişim Yetki Sınırlandırmaları</div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">06</span> 
              KVKK Madde 11 Kapsamındaki Haklarınız
            </h2>
            <p className="mb-4">
              Kanun'un 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></div> Verilerinizin işlenip işlenmediğini öğrenme.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></div> Verileriniz işlenmişse bilgi talep etme.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></div> İşlenme amacını ve uygun kullanımını öğrenme.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></div> Yurt içi/yurt dışı aktarılan üçüncü kişileri bilme.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></div> Eksik/yanlış işlenmişse düzeltilmesini isteme.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></div> Kanuni şartlar dahilinde silinmesini isteme.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5"></div> Otomatik sistemler aleyhinize sonuç doğuruyorsa itiraz etme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">07</span> 
              Başvuru Yöntemi
            </h2>
            <p>
              Söz konusu haklarınızı kullanmak için kimliğinizi tespit edici belgeler ile birlikte talebinizi "uxdesigneripek@gmail.com" adresine e-posta yoluyla iletebilirsiniz. Talebiniz, niteliğine göre en kısa sürede ve en geç 30 gün içinde sonuçlandırılacaktır.
            </p>
          </section>
        </div>

        <LegalSupportCard lang={lang} />
      </div>
    </div>
  );
}
