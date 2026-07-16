import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LegalSupportCard } from "../components/LegalSupportCard";

export function CookiePolicyPage({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => {
    document.title = lang === 'en' ? "Cookie Policy | UXIPEK" : "Çerez Politikası | UXIPEK";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = lang === 'en' 
      ? "Learn about the cookies we use on the UXIPEK website and how you can manage your preferences." 
      : "UXIPEK web sitesinde kullanılan çerezler ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi alın.";
    
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
    <div className="bg-background w-full min-h-screen pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <Link to={`/${lang}`} className="inline-flex items-center gap-2 text-text-primary/80 hover:text-brand-transformation transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary mb-6">
          {lang === 'en' ? 'Cookie Policy' : 'Çerez Politikası'}
        </h1>
        <p className="text-text-primary/70 text-lg font-light mb-8 leading-[1.7] max-w-2xl">
          {lang === 'en'
            ? 'We use cookies to ensure our website functions securely and to understand how you interact with our content.'
            : 'Web sitemizin güvenli bir şekilde çalışmasını sağlamak ve içeriklerimizle nasıl etkileşime girdiğinizi anlamak için çerezler kullanıyoruz.'}
        </p>
        <p className="text-text-primary/40 text-xs font-bold mb-16 uppercase tracking-[0.2em]">
          {lang === 'en' ? 'Last Updated: 12 July 2026' : 'Son Güncelleme: 12 Temmuz 2026'}
        </p>

        <div className="space-y-16 text-text-primary/80 font-light leading-[1.7]">
          
          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">01</span> 
              {lang === 'en' ? 'What Are Cookies?' : 'Çerezler (Cookies) Nedir?'}
            </h2>
            <p>
              {lang === 'en'
                ? 'Cookies are small text files that are stored on your browser or device by websites you visit. They are widely used to make websites work more efficiently and to provide analytical information to the site owners.'
                : 'Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza veya cihazınıza kaydedilen küçük metin dosyalarıdır. Web sitelerinin daha verimli çalışmasını sağlamak ve site sahiplerine analitik bilgiler sunmak için yaygın olarak kullanılırlar.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">02</span> 
              {lang === 'en' ? 'Types of Cookies We Use' : 'Kullandığımız Çerez Türleri'}
            </h2>
            
            <div className="space-y-8 mt-6">
              <div className="p-6 rounded-2xl bg-white border border-brand-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <h3 className="font-medium text-text-primary text-lg">{lang === 'en' ? 'Necessary Cookies' : 'Zorunlu Çerezler'}</h3>
                </div>
                <p className="text-sm">
                  {lang === 'en'
                    ? 'These cookies are essential for the website to function properly. They cannot be disabled in our systems. They enable core features like security, network management, and accessibility.'
                    : 'Web sitesinin düzgün çalışması için kesinlikle gerekli olan çerezlerdir. Sistemlerimizde devre dışı bırakılamazlar. Güvenlik ve ağ yönetimi gibi temel işlevleri sağlarlar.'}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-brand-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-brand-transformation"></div>
                  <h3 className="font-medium text-text-primary text-lg">{lang === 'en' ? 'Analytics Cookies' : 'Analitik Çerezler'}</h3>
                </div>
                <p className="text-sm mb-3">
                  {lang === 'en'
                    ? 'These cookies help us understand how visitors interact with our website. We use tools like Google Analytics to collect anonymous traffic data, page views, and interaction metrics.'
                    : 'Ziyaretçilerin web sitemizle nasıl etkileşime girdiğini anlamamıza yardımcı olur. Anonim trafik verileri ve sayfa görüntülemelerini analiz etmek için Google Analytics kullanıyoruz.'}
                </p>
                <div className="inline-block px-3 py-1 bg-brand-primary/5 rounded-md text-xs font-medium text-text-primary/70">
                  {lang === 'en' ? 'Status: Active (Requires Consent)' : 'Durum: Aktif (Onaya Tabi)'}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-brand-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-brand-primary/20"></div>
                  <h3 className="font-medium text-text-primary text-lg">{lang === 'en' ? 'Functional Cookies' : 'İşlevsel Çerezler'}</h3>
                </div>
                <p className="text-sm">
                  {lang === 'en'
                    ? 'These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personal features.'
                    : 'Web sitesinin yaptığınız seçimleri (dil tercihiniz gibi) hatırlamasına ve daha kişiselleştirilmiş özellikler sunmasına olanak tanır.'}
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white border border-brand-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-brand-primary/20"></div>
                  <h3 className="font-medium text-text-primary text-lg">{lang === 'en' ? 'Marketing Cookies' : 'Pazarlama Çerezleri'}</h3>
                </div>
                <p className="text-sm mb-3">
                  {lang === 'en'
                    ? 'These cookies are used to track visitors across websites to display relevant advertisements.'
                    : 'Kullanıcıları web siteleri arasında takip etmek ve ilgili reklamları göstermek için kullanılır.'}
                </p>
                <div className="inline-block px-3 py-1 bg-brand-primary/5 rounded-md text-xs font-medium text-text-primary/70">
                  {lang === 'en' ? 'Status: Not used on this project' : 'Durum: Bu projede kullanılmamaktadır'}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">03</span> 
              {lang === 'en' ? 'How to Manage Cookies' : 'Çerezleri Nasıl Yönetebilirsiniz?'}
            </h2>
            <p className="mb-4">
              {lang === 'en'
                ? 'You can manage your cookie preferences through our website\'s cookie banner or via your browser settings.'
                : 'Çerez tercihlerinizi web sitemizdeki çerez onay başlığı (banner) üzerinden veya tarayıcı ayarlarınızdan yönetebilirsiniz.'}
            </p>
            <p>
              {lang === 'en'
                ? 'Most web browsers allow you to control cookies through their settings preferences. You can clear existing cookies and set your browser to reject new ones. However, if you disable necessary cookies, some parts of our website may not function correctly.'
                : 'Çoğu web tarayıcısı, ayarları aracılığıyla çerezleri kontrol etmenize olanak tanır. Mevcut çerezleri silebilir ve yenilerini reddedecek şekilde tarayıcınızı yapılandırabilirsiniz. Ancak zorunlu çerezleri devre dışı bırakırsanız sitemizin bazı bölümleri doğru çalışmayabilir.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-text-primary mb-6 flex items-baseline gap-4">
              <span className="text-brand-transformation text-sm font-bold">04</span> 
              {lang === 'en' ? 'Policy Updates' : 'Politika Güncellemeleri'}
            </h2>
            <p>
              {lang === 'en'
                ? 'We may update this Cookie Policy periodically to reflect changes in our technology or legal requirements. The latest version will always be available on this page.'
                : 'Teknolojimizdeki veya yasal gerekliliklerdeki değişiklikleri yansıtmak amacıyla bu Çerez Politikası\'nı periyodik olarak güncelleyebiliriz. En güncel sürüm her zaman bu sayfada bulunacaktır.'}
            </p>
          </section>
        </div>

        <LegalSupportCard lang={lang} />
      </div>
    </div>
  );
}
