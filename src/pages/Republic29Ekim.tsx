import { useState } from "react";
import { MotionConfig, motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Moon, Sun } from "lucide-react";
import { Button, ButtonLink } from "../components/republic/Button";
import { HistoryTimeline } from "../components/republic/HistoryTimeline";
import { SouvenirCard } from "../components/republic/SouvenirCard";
import { Reveal } from "../components/republic/Reveal";
import { SpotifyPlayer } from "../components/republic/SpotifyPlayer";

const values = [
  ["Millî egemenlik", "Cumhuriyet, ülkenin geleceğinde milletin söz sahibi olması ilkesine dayanır. Bu ilkeyi yaşatmak, katılımı ve ortak sorumluluğu her gün güçlendirmeyi gerektirir.", "Oy vermek, toplumsal meseleleri takip etmek ve ortak yaşama katkı sunmak."],
  ["Eğitim ve bilim", "Eğitim ve bilim, Cumhuriyet’in gelişim sürecinde geleceği kurmanın temel araçları oldu. Öğrenme imkânlarını yaygınlaştırmak, bugün de sürdürülmesi gereken bir sorumluluk.", "Merak etmek, bilgiyi sorgulamak ve öğrenmeyi herkes için erişilebilir kılmak."],
  ["Eşit yurttaşlık", "Ortak haklar ve sorumluluklar, eşit yurttaşlık idealinin temelidir. Bu ideal, zaman içinde gelişen haklarla ve eşitliği güçlendiren çabalarla yaşatılır.", "Farklılıklara saygı duymak ve herkesin adil biçimde söz sahibi olmasını savunmak."],
  ["Üretim ve çağdaşlaşma", "Emek, bilgi ve üretim, toplumun kendi geleceğini kurmasına katkı sağlar. Çağdaşlaşma, tamamlanmış bir hedef değil; yenilenerek sürdürülen bir süreçtir.", "İşini özenle yapmak, yeni fikirler geliştirmek ve emeğin değerini gözetmek."],
];

// Content is Turkish-only by design; the /en route renders the same page.
export function Republic29EkimPage(_props: { lang: "en" | "tr" }) {
  // The night toggle is scoped to this page's wrapper so the rest of the site stays light.
  const [night, setNight] = useState(false);
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, 60]);

  return (
    <MotionConfig reducedMotion="user">
    <div className={`republic-page ${night ? "republic-night" : ""}`}>
      <div className="r-toolbar border-b r-border">
        <nav className="r-page-width r-toolbar-layout" aria-label="29 Ekim sayfa menüsü">
          <ul className="r-header-links">
            <li><a href="#donum-noktasi">Hikâye</a></li>
            <li><a href="#anlam">Değerler</a></li>
            <li><a href="#hatira-karti">Hatıra Kartı</a></li>
          </ul>
          <div role="group" aria-label="Sayfa teması" className="r-theme-switch">
            <Button variant={night ? "default" : "ghost"} aria-pressed={night} onClick={() => setNight(true)}><Moon aria-hidden />Gece</Button>
            <Button variant={night ? "ghost" : "default"} aria-pressed={!night} onClick={() => setNight(false)}><Sun aria-hidden />Aydınlık</Button>
          </div>
        </nav>
      </div>
      <section className="r-opening r-dark-band">
        <motion.img src="/images/ataturk-portre.jpg" width={736} height={920} alt="Türk bayrağı önünde Mustafa Kemal Atatürk portresi." className="r-opening-art" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ y: portraitY }} />
        <div className="r-page-width r-opening-content">
          <Reveal as="p" className="r-eyebrow">29 EKİM 1923 — 2026 · 103. YIL</Reveal>
          <Reveal as="h1" delay={0.1}>Dünden ilham.<br /><span className="italic">Yarına iz.</span></Reveal>
          <div className="r-headline-rule" aria-hidden />
          <Reveal as="p" delay={0.2} className="r-lead">Cumhuriyet, geçmişten devraldığımız bir miras ve geleceğe taşıdığımız ortak sorumluluk. 103. yılında hikâyesini keşfet, senin için taşıdığı değeri seç ve bu güne bir hatıra bırak.</Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink size="lg" href="#donum-noktasi">Hikâyeyi keşfet<ArrowDown aria-hidden /></ButtonLink>
            <ButtonLink size="lg" variant="outline" href="#hatira-karti">Hatıra kartımı oluştur<ArrowUpRight aria-hidden /></ButtonLink>
          </Reveal>
          <p className="r-small r-muted mt-8">Cumhuriyet’in 103. yılına UXipek’ten dijital bir armağan.</p>
        </div>
      </section>
      <section id="donum-noktasi" className="r-section"><div className="r-page-width"><p className="r-section-label">CUMHURİYET’E UZANAN YOL</p><Reveal as="h2" className="r-section-title">Bir günde ilan edildi.<br /><span className="italic">Bir mücadeleyle mümkün oldu.</span></Reveal><p className="r-muted mt-7 max-w-2xl">Cumhuriyet’in ilanı, bağımsızlık mücadelesinin ve millî egemenlik düşüncesinin yeni bir yönetim biçimine dönüşmesiydi.</p><HistoryTimeline /></div></section>
      <section id="anlam" className="r-section r-soft border-t r-border"><div className="r-page-width"><p className="r-section-label">GEÇMİŞTEN BUGÜNE</p><Reveal as="h2" className="r-section-title">Bugün hayatımıza<br />dokunan miras.</Reveal><div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">{values.map(([title, text, today]) => <Reveal as="article" key={title} delay={(values.findIndex(v => v[0] === title) % 2) * 0.12} className="border-t r-border pt-6"><h3>{title}</h3><p className="r-muted mt-5 max-w-[65ch]">{text}</p><p className="mt-6 text-sm font-semibold">Bugüne yansıması</p><p className="mt-1 max-w-[65ch]">{today}</p></Reveal>)}</div></div></section>
      <SouvenirCard />
      <section id="sarkilar" className="r-section r-soft border-t r-border"><div className="r-page-width grid items-center gap-10 md:grid-cols-2"><div><p className="r-section-label">BAYRAMIN SESİ</p><h2 className="r-section-title">Cumhuriyet’in sesi.</h2><a href="https://open.spotify.com/playlist/1rmV6jyWt6VnXwLRgga9ef" target="_blank" rel="noopener noreferrer" className="r-muted mt-5 inline-flex items-center gap-2 text-sm underline">Spotify çalma listesi<ArrowUpRight size={16} aria-hidden /></a></div><SpotifyPlayer /></div></section>
      <section id="gelecege" className="r-section r-dark-band"><div className="r-page-width max-w-4xl text-center"><p className="r-section-label">BİRLİKTE, YARINA</p><Reveal as="h2" className="r-section-title">Cumhuriyet, birlikte<br />yaşattığımız bir gelecek.</Reveal><p className="r-muted mx-auto mt-8 max-w-2xl">Gazi Mustafa Kemal Atatürk’ü, Millî Mücadele’nin kahramanlarını ve Cumhuriyet’e emek veren herkesi saygı ve minnetle anıyoruz.</p><div className="mx-auto my-10 h-px w-20 r-rule" /><p className="r-serif text-2xl italic sm:text-3xl">29 Ekim Cumhuriyet Bayramımız kutlu olsun.</p><p className="r-muted mt-8 text-sm">Cumhuriyet’in 103. yılına UXipek’ten dijital bir armağan.</p></div></section>
      <div className="r-dark-band border-t r-border"><div className="r-page-width py-8"><details className="r-muted text-sm"><summary className="cursor-pointer">Kaynaklar</summary><p className="mt-3">T.C. Kültür ve Turizm Bakanlığı</p><ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2"><li><a className="underline" href="https://www.ktb.gov.tr/TR-96300/ataturk39un-hayati.html" target="_blank" rel="noopener noreferrer">Atatürk’ün Hayatı · 1919 ve 1923</a></li><li><a className="underline" href="https://www.ktb.gov.tr/TR-96327/1920.html" target="_blank" rel="noopener noreferrer">1920 kronolojisi</a></li><li><a className="underline" href="https://www.ktb.gov.tr/TR-96329/1922.html" target="_blank" rel="noopener noreferrer">1922 kronolojisi</a></li></ul></details></div></div>
    </div>
    </MotionConfig>
  );
}
