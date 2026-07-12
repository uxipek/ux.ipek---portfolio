import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LegalSupportCard } from "../components/LegalSupportCard";

export function PrivacyPolicyPage({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => {
    document.title = lang === 'en' ? "Privacy Policy | UXIPEK" : "Gizlilik Politikası | UXIPEK";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = lang === 'en' 
      ? "Discover how UXIPEK collects, uses, and protects your personal information on our website." 
      : "UXIPEK web sitesinde kişisel bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu inceleyin.";
    
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
        <Link to="/" className="inline-flex items-center gap-2 text-dark/60 hover:text-pink transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-dark mb-6">
          {lang === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
        </h1>
        <p className="text-dark/70 text-lg font-light mb-8 leading-relaxed max-w-2xl">
          {lang === 'en' 
            ? 'We are committed to protecting your privacy and ensuring your personal information is handled securely and transparently.' 
            : 'Gizliliğinizi korumayı, kişisel bilgilerinizin şeffaf ve güvenli bir şekilde işlenmesini taahhüt ediyoruz.'}
        </p>
        <p className="text-dark/40 text-xs font-bold mb-16 uppercase tracking-[0.2em]">
          {lang === 'en' ? 'Last Updated: 12 July 2026' : 'Son Güncelleme: 12 Temmuz 2026'}
        </p>

        <div className="space-y-16 text-dark/80 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">01</span> 
              {lang === 'en' ? 'Purpose' : 'Amaç'}
            </h2>
            <p className="mb-4">
              {lang === 'en' 
                ? 'This Privacy Policy explains how UXIPEK ("we", "us", or "our") collects, uses, and protects the personal data of users interacting with our website (https://www.uxipek.com).' 
                : 'Bu Gizlilik Politikası, UXIPEK ("biz", "bizim" veya "UXIPEK") web sitesini (https://www.uxipek.com) ziyaret eden ve hizmetlerimizle etkileşime giren kullanıcıların kişisel bilgilerinin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.'}
            </p>
            <p>
              {lang === 'en' 
                ? 'Our goal is to build trust through transparent data practices, aligning with our premium design standards.' 
                : 'Amacımız, şeffaf veri uygulamaları ile güven inşa etmek ve profesyonel tasarım standartlarımızla uyumlu hareket etmektir.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">02</span> 
              {lang === 'en' ? 'Information We Collect' : 'Topladığımız Bilgiler'}
            </h2>
            <p className="mb-6">
              {lang === 'en' 
                ? 'When you use our contact forms, project inquiry features, or browse our website, we may collect the following information:' 
                : 'İletişim formlarımızı, proje talep özelliklerini kullandığınızda veya web sitemizde gezindiğinizde aşağıdaki bilgileri toplayabiliriz:'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-dark/5">
                <h4 className="font-medium text-dark mb-2 text-sm">{lang === 'en' ? 'Provided by You' : 'Sizin Sağladıklarınız'}</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink/50"></div> Name</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink/50"></div> Email address</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink/50"></div> Phone number</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink/50"></div> Company name (if provided)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink/50"></div> Project information and goals</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-dark/5">
                <h4 className="font-medium text-dark mb-2 text-sm">{lang === 'en' ? 'Collected Automatically' : 'Otomatik Toplananlar'}</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-dark/20"></div> Browser information</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-dark/20"></div> Device information</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-dark/20"></div> Website analytics data</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-dark/20"></div> IP address</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">03</span> 
              {lang === 'en' ? 'Why We Process Data' : 'Verileri Neden İşliyoruz?'}
            </h2>
            <p className="mb-4">
              {lang === 'en' ? 'We process your data for the following core purposes:' : 'Verilerinizi şu temel amaçlar doğrultusunda işliyoruz:'}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-dark"></div></div>
                <span>{lang === 'en' ? 'To respond to your inquiries and project requests.' : 'Taleplerinize ve proje isteklerinize yanıt vermek.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-dark"></div></div>
                <span>{lang === 'en' ? 'To prepare strategic project proposals and UX analyses.' : 'Stratejik proje teklifleri ve UX analizleri hazırlamak.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-dark"></div></div>
                <span>{lang === 'en' ? 'To improve our website experience and digital presence.' : 'Web sitemizi ve dijital varlığımızı iyileştirmek.'}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark/5 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-dark"></div></div>
                <span>{lang === 'en' ? 'To send relevant service updates (if you opted in).' : '(Onay verdiyseniz) hizmetlerimizle ilgili güncellemeler göndermek.'}</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">04</span> 
              {lang === 'en' ? 'Data Security' : 'Veri Güvenliği'}
            </h2>
            <p>
              {lang === 'en' 
                ? 'We implement industry-standard technical and administrative measures to secure your personal information. We focus on modern infrastructure, encrypted communication channels, and secure data handling practices to prevent unauthorized access or disclosure.' 
                : 'Kişisel bilgilerinizi güvence altına almak için endüstri standartlarında teknik ve idari güvenlik önlemleri alıyoruz. Yetkisiz erişimi ve ifşayı önlemek amacıyla modern altyapılar, şifrelenmiş iletişim kanalları ve güvenli veri işleme pratikleri kullanıyoruz.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">05</span> 
              {lang === 'en' ? 'Third Party Services' : 'Üçüncü Taraf Hizmetleri'}
            </h2>
            <p className="mb-4">
              {lang === 'en' 
                ? 'To operate effectively and deliver premium experiences, we integrate with secure third-party platforms. These currently include:' 
                : 'Web sitemizi etkili bir şekilde yönetmek ve profesyonel bir deneyim sunmak için güvenli üçüncü taraf platformlarla çalışıyoruz. Bunlar şunları içerir:'}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-dark/10 bg-white text-sm">Google Analytics</span>
              <span className="px-4 py-2 rounded-full border border-dark/10 bg-white text-sm">Vercel</span>
            </div>
            <p className="mt-6 text-sm text-dark/50">
              {lang === 'en' 
                ? 'These services process data according to their own privacy policies. We do not sell your data to third parties.' 
                : 'Bu servisler, verileri kendi gizlilik politikalarına göre işler. Verilerinizi asla üçüncü taraflara satmıyoruz.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">06</span> 
              {lang === 'en' ? 'Data Retention' : 'Veri Saklama Süresi'}
            </h2>
            <p>
              {lang === 'en' 
                ? 'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable legal obligations. Once the data is no longer needed, it is securely deleted or anonymized.' 
                : 'Kişisel verilerinizi yalnızca bu politikada belirtilen amaçları yerine getirmek için gerekli olan süre boyunca veya yasal yükümlülüklerin gerektirdiği süre kadar saklarız. Verilere artık ihtiyaç duyulmadığında, güvenli bir şekilde silinir veya anonimleştirilir.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-dark mb-6 flex items-baseline gap-4">
              <span className="text-pink text-sm font-bold">07</span> 
              {lang === 'en' ? 'Your Rights' : 'Haklarınız'}
            </h2>
            <p className="mb-4">
              {lang === 'en' 
                ? 'Depending on your jurisdiction, you have specific rights regarding your personal data:' 
                : 'Kişisel verilerinizle ilgili olarak yürürlükteki yasalara göre çeşitli haklara sahipsiniz:'}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="p-4 rounded-xl bg-dark/5 text-sm">{lang === 'en' ? 'Right to access your data' : 'Verilerinize erişim sağlama hakkı'}</li>
              <li className="p-4 rounded-xl bg-dark/5 text-sm">{lang === 'en' ? 'Right to correct inaccuracies' : 'Hatalı verileri düzelttirme hakkı'}</li>
              <li className="p-4 rounded-xl bg-dark/5 text-sm">{lang === 'en' ? 'Right to request deletion' : 'Verilerinizin silinmesini talep etme hakkı'}</li>
              <li className="p-4 rounded-xl bg-dark/5 text-sm">{lang === 'en' ? 'Right to withdraw consent' : 'Onayınızı geri çekme hakkı'}</li>
            </ul>
          </section>
        </div>

        <LegalSupportCard lang={lang} />
      </div>
    </div>
  );
}
