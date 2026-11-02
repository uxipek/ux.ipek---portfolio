import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, ExternalLink, AlertTriangle, Lightbulb, Target } from "lucide-react";

export function AkademiOzalitCaseStudy({ lang, project, otherProjects }: { lang: "en" | "tr", project: any, otherProjects: any[] }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project?.title]);

  if (!project) {
    return <Navigate to={`/${lang}/portfolio`} />;
  }

  const relatedProject = otherProjects.find(p => p.id === "zeka-oyunlari");

  return (
    <div className="bg-background min-h-screen pt-24 pb-0 w-full text-ink">
      {/* 1. Hero */}
      <section className="container-app py-12 relative z-10">
        <Link to={`/${lang}/portfolio`} className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors mb-8 text-small font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Portfolio' : 'Portfolyoya Dön'}
        </Link>
        
        <div className="mb-12 max-w-4xl">
          <span className="inline-block mb-4 text-accent font-semibold tracking-wider text-small uppercase">
            {project.category[lang]}
          </span>
          <h1 className="text-title md:text-display font-display font-bold tracking-tight mb-6 text-ink">
            {project.title}
          </h1>
          <p className="text-lead text-ink font-normal leading-relaxed max-w-2xl">
            {project.description[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-y border-brand-primary/10">
          <div>
            <h4 className="text-caption uppercase tracking-widest text-ink-muted font-bold mb-2">{lang === 'en' ? 'Timeline' : 'Süre'}</h4>
            <p className="text-small font-medium text-ink">{project.timeline}</p>
          </div>
          <div>
            <h4 className="text-caption uppercase tracking-widest text-ink-muted font-bold mb-2">{lang === 'en' ? 'Role' : 'Rol'}</h4>
            <p className="text-small font-medium text-ink">{project.role}</p>
          </div>
          <div>
            <h4 className="text-caption uppercase tracking-widest text-ink-muted font-bold mb-2">{lang === 'en' ? 'Tools' : 'Araçlar'}</h4>
            <p className="text-small font-medium text-ink">{project.tools.join(", ")}</p>
          </div>
          <div>
            <h4 className="text-caption uppercase tracking-widest text-ink-muted font-bold mb-2">{lang === 'en' ? 'Services' : 'Hizmetler'}</h4>
            <p className="text-small font-medium text-ink">{project.services.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="container-app mb-24 relative z-10">
        <div className="aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-brand-primary shadow-2xl relative">
          <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover opacity-90 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent"></div>
        </div>
      </section>

      <div className="container-app w-[min(100%-32px,850px)] mx-auto text-lead font-normal text-ink leading-relaxed space-y-24 mb-24">
        
        {/* 2. Project overview */}
        <section>
          <h2 className="text-title font-display font-bold text-ink mb-8">{lang === 'en' ? 'Overview' : 'Genel Bakış'}</h2>
          <p className="text-lead leading-relaxed mb-6">
            Akademi Ozalit'in üretim gücünü kullanıcıların kolayca anlayabileceği ve harekete geçebileceği bir web deneyimine dönüştürmek amacıyla yürütülen kapsamlı UX Audit ve yeniden tasarım çalışması.
          </p>
          <p className="mb-6">
            Yapay zekâ destekli araçlar arayüz alternatiflerini ve içerik yapısını hızlandırmak için kullanıldı. UX değerlendirmesi, problem önceliklendirmesi, tasarım yönü ve nihai kararlar UXipek tarafından gerçekleştirildi.
          </p>
        </section>

        {/* 3. Context and challenge */}
        <section>
          <h2 className="text-title font-display font-bold text-ink mb-8">{lang === 'en' ? 'Context & Challenge' : 'Bağlam ve Zorluk'}</h2>
          <div className="p-8 rounded-2xl bg-white border border-brand-primary/5 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-transformation"></div>
             <p className="text-lead text-ink font-medium">
               Makine parkuru ve hizmetler bulunmasına rağmen gerçek işler, üretim süreci ve müşteri kanıtları yeterince görünür değildi.
             </p>
          </div>
        </section>

        {/* BUTTERFLY STAGE 1: FRICTION */}
        <div className="flex items-center gap-4 py-8 border-b border-brand-primary/10">
          <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-caption uppercase tracking-widest text-accent font-bold mb-1">Aşama 1</h3>
            <h2 className="text-heading font-bold text-ink">Friction (Sürtünme)</h2>
          </div>
        </div>

        {/* 4. UX audit findings & 5. Severity and prioritisation */}
        <section>
          <h2 className="text-heading font-display font-bold text-ink mb-6">UX Audit Bulguları</h2>
          <p className="mb-8">
            Mevcut deneyimde tespit edilen temel sürtünme noktaları ve önceliklendirilen kullanılabilirlik sorunları:
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-red-500/20 shadow-sm flex gap-4">
              <span className="font-mono font-bold text-red-500 mt-1">Yüksek</span>
              <div>
                <h4 className="font-bold text-ink mb-2">Belirsiz Değer Önerisi ve Hiyerarşi</h4>
                <p className="text-body text-ink-muted">Görsele gömülü mesajlar okunabilirliği düşürüyor. Gerçek, okunabilir başlık ve tıklanabilir CTA eksikliği dönüşümü engelliyor.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-orange-500/20 shadow-sm flex gap-4">
              <span className="font-mono font-bold text-orange-500 mt-1">Orta</span>
              <div>
                <h4 className="font-bold text-ink mb-2">Hizmetlerin Keşfedilebilirliği</h4>
                <p className="text-body text-ink-muted">Mevcut yapıda sadece üç temel hizmet sunulurken, üretim örnekleri, konum ve şeffaf süreç anlatımı gibi güven unsurları eksik.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-orange-500/20 shadow-sm flex gap-4">
              <span className="font-mono font-bold text-orange-500 mt-1">Orta</span>
              <div>
                <h4 className="font-bold text-ink mb-2">Tek İletişim Kanalı Kısıtlaması</h4>
                <p className="text-body text-ink-muted">WhatsApp ağırlıklı tek iletişim yolu sunuluyor. Hizmet bazlı teklif ve çoklu iletişim seçenekleri kullanıcı niyetlerini karşılamıyor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Existing experience */}
        <section>
          <h2 className="text-heading font-display font-bold text-ink mb-6">Mevcut Deneyim</h2>
          <p className="mb-8">
            Canlı site incelemesi sırasında tespit edilen ekranların mevcut durumları, kullanıcıların yaşadığı kafa karışıklığını doğrular nitelikteydi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="aspect-[3/4] bg-brand-primary/5 rounded-xl border border-brand-primary/10 flex items-center justify-center p-6 text-center text-small font-medium text-ink-muted">
              Mevcut Ana Sayfa
            </div>
            <div className="aspect-[3/4] bg-brand-primary/5 rounded-xl border border-brand-primary/10 flex items-center justify-center p-6 text-center text-small font-medium text-ink-muted">
              Mevcut Hizmetler
            </div>
            <div className="aspect-[3/4] bg-brand-primary/5 rounded-xl border border-brand-primary/10 flex items-center justify-center p-6 text-center text-small font-medium text-ink-muted">
              Mevcut Makine Parkuru
            </div>
          </div>
        </section>

        {/* BUTTERFLY STAGE 2: STRATEGY */}
        <div className="flex items-center gap-4 py-8 border-b border-brand-primary/10">
          <div className="w-12 h-12 rounded-full bg-brand-technology text-white flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-caption uppercase tracking-widest text-accent font-bold mb-1">Aşama 2</h3>
            <h2 className="text-heading font-bold text-ink">Strategy (Strateji)</h2>
          </div>
        </div>

        {/* 7. Redesign strategy */}
        <section>
          <h2 className="text-heading font-display font-bold text-ink mb-6">Yeniden Tasarım Stratejisi</h2>
          <p className="mb-6">
            Kullanıcının hizmeti anlama, üretim gücüne güven duyma ve doğru teklif kanalına ulaşma yolculuğunu dört aşamalı net bir çerçevede kurguladık:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
              <span>Hizmetleri ve değer önerisini ilk bakışta anlaşılır hâle getirmek.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
              <span>Üretim kapasitesini ve iş örneklerini görünür kılmak.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
              <span>Fiyatı ve teklif sürecini etkileyen kriterleri açıklamak.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
              <span>Her hizmetten bağlama özel teklif alma adımı sunmak.</span>
            </li>
          </ul>
        </section>

        {/* 8. Key interface improvements & 9. Before and after comparison */}
        <section>
          <h2 className="text-heading font-display font-bold text-ink mb-6">Temel Arayüz İyileştirmeleri</h2>
          
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-[2rem] border border-brand-primary/5 shadow-sm">
              <h3 className="text-heading font-bold text-ink mb-6">Ana Sayfa Redesign</h3>
              <div className="aspect-video bg-brand-primary/5 rounded-xl border border-brand-primary/10 flex items-center justify-center mb-6 text-ink-muted text-small font-medium">
                Yeni Ana Sayfa Ekranı
              </div>
              <ul className="space-y-3">
                <li><strong className="text-ink">Net değer önerisi:</strong> İşletmenin hizmeti ve konumu ilk ekranda açıkça anlatılıyor.</li>
                <li><strong className="text-ink">Çoklu CTA yapısı:</strong> WhatsApp ve hizmetleri inceleme seçenekleri farklı kullanıcı niyetlerini destekliyor.</li>
                <li><strong className="text-ink">Güven ve üretim kanıtı:</strong> Üretim yaklaşımı ve iş örnekleri satın alma kararını destekliyor.</li>
                <li><strong className="text-ink">Şeffaf fiyatlandırma:</strong> Fiyatı belirleyen temel kriterler kullanıcıya açıklanıyor.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-brand-primary/5 shadow-sm">
              <h3 className="text-heading font-bold text-ink mb-6">Hizmetlerimiz Sayfası</h3>
              <ul className="space-y-3 mb-6">
                <li><strong className="text-ink">Hedef Kitle:</strong> Her hizmetin hedef kullanıcıları açıklanıyor.</li>
                <li><strong className="text-ink">Teklif için gerekenler:</strong> Ölçü, adet, malzeme ve dosya formatı gibi girdiler önceden belirtiliyor.</li>
                <li><strong className="text-ink">Hizmete özel CTA:</strong> Kullanıcı ilgili hizmet için doğrudan teklif akışına geçebiliyor.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-brand-primary/5 shadow-sm">
              <h3 className="text-heading font-bold text-ink mb-6">İletişim ve Teklif Formu</h3>
              <ul className="space-y-3 mb-6">
                <li><strong className="text-ink">Yapılandırılmış teklif formu:</strong> Hizmet türü, boyut, adet, renk ve termin alanlarıyla daha net talep toplama.</li>
                <li><strong className="text-ink">Güven sinyalleri:</strong> Adres, çalışma saatleri ve harita entegrasyonu işletmeyi somutlaştırıyor.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. Responsive considerations & 11. Accessibility considerations */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-brand-primary/5">
            <h3 className="text-lead font-bold text-ink mb-4">Erişilebilirlik (Accessibility)</h3>
            <p className="text-body text-ink">
              Görsellere gömülü metinler kaldırılarak SEO uyumlu ve ekran okuyucu dostu gerçek HTML metinler kullanıldı. Kontrast oranları artırıldı ve odaklanılabilir (focusable) CTA butonları eklendi.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-brand-primary/5">
            <h3 className="text-lead font-bold text-ink mb-4">Mobil Uyum (Responsive)</h3>
            <p className="text-body text-ink">
              Mobil cihazlarda dikey alan optimizasyonu yapıldı. Çoklu kolonlar mobil ekranlarda tek kolona düşürülerek okunabilirlik ve en az 44px dokunma hedefleri güvence altına alındı.
            </p>
          </div>
        </section>

        {/* BUTTERFLY STAGE 3: GROWTH */}
        <div className="flex items-center gap-4 py-8 border-b border-brand-primary/10">
          <div className="w-12 h-12 rounded-full bg-brand-transformation text-white flex items-center justify-center">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-caption uppercase tracking-widest text-ink font-bold mb-1">Aşama 3</h3>
            <h2 className="text-heading font-bold text-accent">Growth (Büyüme)</h2>
          </div>
        </div>

        {/* 12. Honest outcomes */}
        <section>
          <h2 className="text-heading font-display font-bold text-ink mb-6">Sonuçlar ve Etki</h2>
          <p className="mb-6 font-medium text-ink">
            * Aşağıdaki çıktılar tasarım hedeflerini ifade eder; henüz ölçülmüş bir performans iyileştirmesi değildir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-brand-primary/10 rounded-2xl text-center">
              <div className="font-mono text-heading font-bold text-accent mb-2">Netlik</div>
              <p className="text-small font-medium text-ink-muted">Teklif alma sürecindeki belirsizliğin azalması</p>
            </div>
            <div className="p-6 bg-white border border-brand-primary/10 rounded-2xl text-center">
              <div className="font-mono text-heading font-bold text-accent mb-2">Güven</div>
              <p className="text-small font-medium text-ink-muted">Üretim kapasitesine yönelik güvenin artması</p>
            </div>
            <div className="p-6 bg-white border border-brand-primary/10 rounded-2xl text-center">
              <div className="font-mono text-heading font-bold text-accent mb-2">Dönüşüm</div>
              <p className="text-small font-medium text-ink-muted">Yapılandırılmış formlar ile daha nitelikli talep (lead) toplama</p>
            </div>
          </div>
        </section>

        {/* 13. Next steps */}
        <section>
          <h2 className="text-heading font-display font-bold text-ink mb-6">Sonraki Adımlar</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-primary/5">
              <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center font-mono font-bold text-ink text-small">1</div>
              <span className="font-medium">Gerçek içerik ve görsellerin toplanması</span>
            </li>
            <li className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-primary/5">
              <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center font-mono font-bold text-ink text-small">2</div>
              <span className="font-medium">Mobil ekranların ve teklif formunun detaylandırılması</span>
            </li>
            <li className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-primary/5">
              <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center font-mono font-bold text-ink text-small">3</div>
              <span className="font-medium">Geliştirme ve kullanılabilirlik testi</span>
            </li>
          </ul>
        </section>
      </div>

      {/* 14. UXipek CTA */}
      <section className="py-24 bg-brand-primary text-center">
        <div className="w-[min(100%-32px,850px)] mx-auto">
          <h2 className="text-h2 mb-6 text-white">
            {lang === 'en' ? 'Ready to elevate your product?' : 'Ürününüzü bir üst seviyeye taşımaya hazır mısınız?'}
          </h2>
          <p className="text-on-ink-muted text-lead mb-10 max-w-xl mx-auto font-normal">
            {lang === 'en' ? 'Let’s discuss how strategic UX design can drive growth for your business.' : 'Stratejik UX tasarımının işletmeniz için nasıl büyüme sağlayabileceğini konuşalım.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link to={`/${lang}/contact`} className="btn-primary-pink">
               <Mail className="w-4 h-4" /> {lang === 'en' ? 'Contact UXipek' : 'UXipek İle İletişime Geçin'}
             </Link>
             <Link to={`/${lang}/ux-audit`} className="btn-outline-light">
               {lang === 'en' ? 'Request a Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İste'}
             </Link>
          </div>
        </div>
      </section>

      {/* 15. Related projects */}
      <section className="py-24 bg-background">
        <div className="container-app">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-h2 text-ink">
              {lang === 'en' ? 'Next Project' : 'Sıradaki Proje'}
            </h2>
            <Link to={`/${lang}/portfolio`} className="hidden sm:flex items-center gap-2 text-accent font-semibold hover:text-ink transition-colors">
              {lang === 'en' ? 'View All' : 'Tümünü Gör'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProject && (
              <a href={`/${lang}/portfolio/zeka-oyunlari`} className="group block">
                <div className="aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden bg-brand-primary/5 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 relative">
                  <img src={relatedProject.coverImage} alt={relatedProject.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {relatedProject.services.slice(0,4).map((tag: string) => (
                    <span key={tag} className="text-caption font-mono font-medium tracking-wide text-accent uppercase bg-brand-transformation/5 px-3 py-1 rounded-full border border-brand-transformation/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-ink text-heading mb-2 group-hover:text-accent transition-colors">{relatedProject.title}</h3>
                <p className="text-ink-muted font-normal leading-relaxed mb-2">{relatedProject.category[lang]}</p>
                <p className="text-ink-muted text-small">{relatedProject.description[lang]}</p>
              </a>
            )}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <Link to={`/${lang}/portfolio`} className="btn-outline-dark">
               {lang === 'en' ? 'View All Projects' : 'Tüm Projeleri Gör'} <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
