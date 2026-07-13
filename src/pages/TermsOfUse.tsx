import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LegalSupportCard } from "../components/LegalSupportCard";

export function TermsOfUsePage({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => {
    document.title = lang === 'en' ? "Terms of Use | UXIPEK" : "Kullanım Koşulları | UXIPEK";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = lang === 'en' 
      ? "Review the terms of use and intellectual property guidelines for the UXIPEK website." 
      : "UXIPEK web sitesinin kullanımına ilişkin koşulları ve fikri mülkiyet esaslarını inceleyin.";
    
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }
  }, [lang]);

  return (
    <div className="bg-[#FDFBF8] w-full min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <Link to={`/${lang}`} className="inline-flex items-center gap-2 text-dark/60 hover:text-pink transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-dark mb-6">
          {lang === 'en' ? 'Terms of Use' : 'Kullanım Koşulları'}
        </h1>
        <p className="text-dark/70 text-lg font-light mb-8 leading-relaxed max-w-2xl">
          {lang === 'en'
            ? 'Guidelines and rules for using the UXIPEK website, content, and digital assets.'
            : 'UXIPEK web sitesinin, içeriklerinin ve dijital varlıklarının kullanımına dair kurallar ve esaslar.'}
        </p>
        <p className="text-dark/40 text-xs font-bold mb-16 uppercase tracking-[0.2em]">
          {lang === 'en' ? 'Last Updated: 12 July 2026' : 'Son Güncelleme: 12 Temmuz 2026'}
        </p>

        <div className="space-y-16 text-dark/80 font-light leading-relaxed">
          
          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">01</span> 
              {lang === 'en' ? 'Website Purpose & Services' : 'Web Sitesinin Amacı ve Hizmetler'}
            </h2>
            <p className="mb-4">
              {lang === 'en'
                ? 'The UXIPEK website (https://www.uxipek.com) serves as an informational platform and portfolio showcasing our AI-Native Product Design Studio services. It presents our expertise in UX/UI design, UX audits, product strategy, and digital consulting.'
                : 'UXIPEK web sitesi (https://www.uxipek.com), Yapay Zeka-Destekli Ürün Tasarım Stüdyosu hizmetlerimizi sergileyen bilgilendirici bir portfolyo platformudur. UX/UI tasarımı, UX analizi, ürün stratejisi ve dijital danışmanlık uzmanlıklarımızı sunar.'}
            </p>
            <div className="p-5 rounded-xl bg-dark/5 border border-dark/10">
              <p className="text-sm font-medium text-dark">
                {lang === 'en'
                  ? 'Important Note: Project scopes, pricing, revisions, payment terms, and intellectual property transfers are defined separately through written proposals and official project agreements, not directly through this website.'
                  : 'Önemli Not: Proje kapsamı, fiyatlandırma, revizyon hakları, ödeme koşulları ve fikri mülkiyet devirleri bu web sitesi üzerinden değil; taraflar arasında yapılacak yazılı teklifler ve resmi proje sözleşmeleri ile ayrıca belirlenir.'}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">02</span> 
              {lang === 'en' ? 'User Responsibilities' : 'Kullanıcı Sorumlulukları'}
            </h2>
            <p>
              {lang === 'en'
                ? 'By using our website, you agree to use it only for lawful purposes. You are responsible for ensuring that any information you submit via our forms is accurate and does not violate the rights of third parties.'
                : 'Web sitemizi kullanarak, yalnızca yasal amaçlarla hareket etmeyi kabul edersiniz. Formlarımız aracılığıyla gönderdiğiniz bilgilerin doğru olduğundan ve üçüncü tarafların haklarını ihlal etmediğinden emin olmak sizin sorumluluğunuzdadır.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">03</span> 
              {lang === 'en' ? 'Intellectual Property & Ownership' : 'Fikri Mülkiyet ve Mülkiyet Hakları'}
            </h2>
            <p className="mb-4">
              {lang === 'en'
                ? 'All content on this website, including but not limited to typography, interface design, text, logos, code, case studies, and portfolio imagery, is the intellectual property of UXIPEK or our respective clients.'
                : 'Bu web sitesinde yer alan tipografi, arayüz tasarımı, metin, logolar, kodlar, vaka çalışmaları ve portfolyo görselleri dahil tüm içerikler UXIPEK\'in veya ilgili müşterilerimizin fikri mülkiyetindedir.'}
            </p>
            <p>
              {lang === 'en'
                ? 'You may not copy, reproduce, distribute, or create derivative works from our portfolio or case studies without explicit written permission.'
                : 'Açık yazılı izin olmaksızın portfolyomuzu, vaka çalışmalarımızı veya diğer tasarım ögelerini kopyalayamaz, çoğaltamaz, dağıtamaz veya bunlardan türetilmiş çalışmalar yapamazsınız.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">04</span> 
              {lang === 'en' ? 'Prohibited Use' : 'Yasaklı Kullanımlar'}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-dark mt-2.5 flex-shrink-0"></div>
                <span>{lang === 'en' ? 'Using automated systems, scrapers, or bots to extract data or portfolio images.' : 'Veri veya portfolyo görselleri çekmek için otomatik sistemler, scraper veya botlar kullanmak.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-dark mt-2.5 flex-shrink-0"></div>
                <span>{lang === 'en' ? 'Submitting false, misleading, or spam information through contact forms.' : 'İletişim formları üzerinden yanıltıcı, sahte veya spam bilgiler göndermek.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-dark mt-2.5 flex-shrink-0"></div>
                <span>{lang === 'en' ? 'Attempting to interfere with the website\'s security features or performance.' : 'Web sitesinin güvenlik özelliklerine veya performansına müdahale etmeye çalışmak.'}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">05</span> 
              {lang === 'en' ? 'External Links' : 'Dış Bağlantılar'}
            </h2>
            <p>
              {lang === 'en'
                ? 'Our website may contain links to external platforms (such as LinkedIn, Behance, or Calendly). We do not control these third-party websites and are not responsible for their content, privacy practices, or availability.'
                : 'Web sitemiz dış platformlara (LinkedIn, Behance vb.) bağlantılar içerebilir. Bu üçüncü taraf siteleri kontrol etmiyoruz ve içeriklerinden, gizlilik uygulamalarından veya erişilebilirliklerinden sorumlu değiliz.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">06</span> 
              {lang === 'en' ? 'Limitation of Liability' : 'Sorumluluğun Sınırlandırılması'}
            </h2>
            <p>
              {lang === 'en'
                ? 'While we strive to keep the website up to date and functional, UXIPEK cannot be held liable for temporary downtime, technical errors, or indirect damages resulting from the use of this website.'
                : 'Web sitesini güncel ve işlevsel tutmak için çaba göstersek de, UXIPEK geçici kesintilerden, teknik hatalardan veya bu web sitesinin kullanımından doğabilecek dolaylı zararlardan sorumlu tutulamaz.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">07</span> 
              {lang === 'en' ? 'Changes & Applicable Law' : 'Değişiklikler ve Uygulanacak Hukuk'}
            </h2>
            <p>
              {lang === 'en'
                ? 'We reserve the right to modify these terms at any time. Your continued use of the website confirms your acceptance of the updated terms. These terms are governed by the laws of the Republic of Turkey.'
                : 'Bu koşulları dilediğimiz zaman değiştirme hakkımız saklıdır. Web sitesini kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir. Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir.'}
            </p>
          </section>
        </div>

        <LegalSupportCard lang={lang} />
      </div>
    </div>
  );
}
