import { MotionConfig, motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "../components/republic/Button";
import { Reveal } from "../components/republic/Reveal";

const ceremonies = [
  ["Anıtkabir", "Devlet erkânının katılımıyla yapılan törende Aslanlı Yol’da yürünür, mozoleye çelenk bırakılır, saat 09.05’te saygı duruşu yapılır ve İstiklâl Marşı okunur. Tören, Anıtkabir Özel Defteri’nin imzalanmasıyla sona erer."],
  ["Dolmabahçe Sarayı", "Atatürk’ün hayata veda ettiği Saray’da resmî ve askerî erkânın, sivil toplum kuruluşlarının, öğrencilerin ve halkın katıldığı anma törenleri düzenlenir. Törenin ardından Saray ziyaretçilere açılır."],
  ["Okullar", "Bayrak töreni, bayrağı yarıya indirecek öğrencinin selamıyla başlar. 10 Kasım’da saygı duruşu iki dakika sürer; bayrak İstiklâl Marşı eşliğinde yarıya indirilir."],
  ["Kurumlar ve şehirler", "Valilikler, kaymakamlıklar, kamu kurumları ve üniversiteler Atatürk anıtlarına ve büstlerine çelenk bırakır; konuşmalar, sergiler ve şiir dinletileri düzenlenir."],
];

// Content is Turkish-only by design; the /en route renders the same page.
export function Anma10KasimPage(_props: { lang: "en" | "tr" }) {
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, 60]);

  return (
    <MotionConfig reducedMotion="user">
    <div className="republic-page republic-black">
      <section className="r-opening r-dark-band">
        <motion.img src="/images/anma-10-kasim.jpg" width={1080} height={1613} alt="Anıtkabir önünde Mustafa Kemal Atatürk’ün siyah beyaz portresi ve “Saygı ve özlemle anıyoruz” yazısı." className="r-opening-art" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ y: portraitY }} />
        <div className="r-page-width r-opening-content">
          <Reveal as="p" className="r-eyebrow">10 KASIM 1938 — 2026 · 88. YIL</Reveal>
          <Reveal as="h1" delay={0.1}>10 Kasım,<br /><span className="italic">saat 09.05.</span></Reveal>
          <div className="r-headline-rule" aria-hidden />
          <Reveal as="p" delay={0.2} className="r-lead">Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk’ü, ebediyete intikalinin 88. yılında saygı, minnet ve özlemle anıyoruz.</Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink size="lg" variant="outline" href="#saygi-durusu">Bu gün nasıl anılır?<ArrowDown aria-hidden /></ButtonLink>
          </Reveal>
        </div>
      </section>

      <section id="saygi-durusu" className="r-section">
        <div className="r-page-width">
          <p className="r-section-label">SAAT 09.05</p>
          <Reveal as="h2" className="r-section-title">Bir ülke,<br /><span className="italic">iki dakika.</span></Reveal>
          <p className="r-muted mt-7 max-w-2xl">Atatürk, 10 Kasım 1938 günü saat 09.05’te İstanbul Beşiktaş’taki Dolmabahçe Sarayı’nda hayata gözlerini yumdu. Her yıl aynı dakikada Türkiye genelinde sirenler çalar ve iki dakikalık saygı duruşu yapılır.</p>
          <p className="mt-6 max-w-2xl">İnsanlar bulundukları yerde durur, araçlardakiler inip saygı duruşuna katılır ya da kornalarıyla sirene eşlik eder. Resmî binalarda ve dış temsilciliklerde bayraklar yarıya indirilir.</p>
        </div>
      </section>

      <section id="torenler" className="r-section r-soft border-t r-border">
        <div className="r-page-width">
          <p className="r-section-label">ANMA TÖRENLERİ</p>
          <Reveal as="h2" className="r-section-title">Ülkenin dört bir yanında<br />aynı saygı.</Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {ceremonies.map(([title, text], i) => (
              <Reveal as="article" key={title} delay={(i % 2) * 0.12} className="border-t r-border pt-6">
                <h3>{title}</h3>
                <p className="r-muted mt-5 max-w-[65ch]">{text}</p>
              </Reveal>
            ))}
          </div>
          <p className="r-muted mt-14 max-w-2xl">Her yıl yüz binlerce kişi Anıtkabir’i ziyaret eder; 2025’te ziyaretçi sayısı 1,2 milyonu aştı. Dolmabahçe’de ise ziyaretçiler karanfil bırakmak için uzun kuyruklar oluşturur.</p>
        </div>
      </section>

      <section id="hafta" className="r-section">
        <div className="r-page-width">
          <p className="r-section-label">ATATÜRK HAFTASI</p>
          <Reveal as="h2" className="r-section-title">10–16 Kasım.<br /><span className="italic">Bir hafta boyunca.</span></Reveal>
          <p className="r-muted mt-7 max-w-2xl">10–16 Kasım arasındaki Atatürk Haftası’nda Atatürk anılır, ilke ve devrimleri anlatılır; konuşmaları radyo ve televizyonda kendi sesinden yayımlanır, hayatını anlatan filmler gösterilir.</p>
        </div>
      </section>

      <section className="r-section r-soft border-t r-border">
        <div className="r-page-width max-w-4xl text-center">
          <div className="mx-auto mb-10 h-px w-20 r-rule" />
          <p className="r-serif text-lead italic">Yurtta sulh, cihanda sulh.</p>
          <p className="r-muted mt-6 text-small">Mustafa Kemal Atatürk</p>
          <p className="r-muted mt-12 text-small">Ruhu şad olsun. Saygı ve minnetle anıyoruz.</p>
        </div>
      </section>

      <div className="r-dark-band border-t r-border">
        <div className="r-page-width py-8">
          <details className="r-muted text-small">
            <summary className="cursor-pointer">Kaynak</summary>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              <li><a className="underline" href="https://tr.wikipedia.org/wiki/10_Kas%C4%B1m_Atat%C3%BCrk%27%C3%BC_anma_g%C3%BCn%C3%BC_ve_Atat%C3%BCrk_haftas%C4%B1" target="_blank" rel="noopener noreferrer">10 Kasım Atatürk’ü Anma Günü ve Atatürk Haftası · Vikipedi</a></li>
            </ul>
          </details>
        </div>
      </div>
    </div>
    </MotionConfig>
  );
}
