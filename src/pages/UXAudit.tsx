import { useEffect } from "react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Search, FileText, CheckCircle2, ChevronDown, Zap, User, Target, BarChart3, AlertCircle, Loader2 } from "lucide-react";

// Google Apps Script Web App URL
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbykh3fplObzwut9axlAixamrEpMfiJpHoFapEBrPtwCpDoKHN-MIU5kFtymDFMS14MbhQ/exec";

export function UXAuditPage({ lang }: { lang: "en" | "tr" }) {  useEffect(() => { document.title = lang === "en" ? "UX Audit | UXIPEK" : "UX Analizi | UXIPEK"; }, [lang]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    website: "",
    name: "",
    company: "",
    email: "",
    goal: "",
    challenge: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      alert(lang === 'en' ? "Webhook URL is not configured yet." : "Webhook URL'si henüz ayarlanmadı.");
      return;
    }
    
    setStatus("loading");
    try {
      const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website: formState.website,
          name: formState.name,
          company: formState.company,
          email: formState.email,
          goal: formState.goal,
          challenge: formState.challenge,
          timestamp: new Date().toISOString()
        }),
      });
      
      // Since mode is no-cors, we won't get a readable response back, but if it doesn't throw, we assume success.
      setStatus("success");
      setFormState({ website: "", name: "", company: "", email: "", goal: "", challenge: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const faqs = [
    {
      q: lang === 'en' ? 'What is a UX Audit?' : 'UX Audit (Analizi) Nedir?',
      a: lang === 'en' 
        ? 'A UX Audit is an expert evaluation of your website or product. We identify friction points, confusing navigation, and usability issues that are costing you conversions, providing you with actionable recommendations.'
        : 'UX Analizi, web sitenizin veya ürününüzün uzman değerlendirmesidir. Dönüşümlerinizi düşüren sürtünme noktalarını, kafa karıştırıcı gezinmeleri ve kullanılabilirlik sorunlarını belirleyip eyleme dönüştürülebilir öneriler sunarız.'
    },
    {
      q: lang === 'en' ? 'How long does it take?' : 'Ne kadar sürer?',
      a: lang === 'en'
        ? 'A Mini UX Audit is typically completed within 3-5 business days. A comprehensive full-product audit may take 2-4 weeks depending on the complexity of the platform.'
        : 'Mini UX Analizi genellikle 3-5 iş günü içinde tamamlanır. Kapsamlı bir ürün analizi, platformun karmaşıklığına bağlı olarak 2-4 hafta sürebilir.'
    },
    {
      q: lang === 'en' ? 'Who is it for?' : 'Kimin içindir?',
      a: lang === 'en'
        ? 'Founders, product teams, and marketers who have an existing product or website with traffic, but are experiencing low conversion rates, high bounce rates, or user drop-offs.'
        : 'Trafiği olan ancak düşük dönüşüm oranları, yüksek hemen çıkma oranları veya kullanıcı kayıpları yaşayan mevcut bir ürünü veya web sitesi olan kurucular, ürün ekipleri ve pazarlamacılar içindir.'
    },
    {
      q: lang === 'en' ? 'What happens after the audit?' : 'Analizden sonra ne olur?',
      a: lang === 'en'
        ? 'You receive a detailed report with prioritized action items. You can choose to implement these changes with your internal team, or hire UXipek to execute the redesign strategy for you.'
        : 'Önceliklendirilmiş aksiyon öğelerini içeren detaylı bir rapor alırsınız. Bu değişiklikleri kendi ekibinizle uygulamayı seçebilir veya yeniden tasarım stratejisini yürütmesi için UXipek ile çalışabilirsiniz.'
    }
  ];

  return (
    <div className="bg-[#FDFBF8] w-full mt-[-80px] pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <motion.div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ca006c]/20 to-purple/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-dark/5 shadow-sm text-xs font-bold uppercase tracking-widest text-dark/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#ca006c] animate-pulse"></span>
              {lang === 'en' ? 'EXPERT EVALUATION' : 'UZMAN DEĞERLENDİRMESİ'}
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-dark mb-8 leading-[1.05]">
              {lang === 'en' ? 'Is Your Website Actually ' : 'Web Siteniz Gerçekten '}<br className="hidden md:block" />
              <span className="text-[#ca006c] font-semibold">{lang === 'en' ? 'Converting?' : 'Dönüştürüyor mu?'}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-dark/60 max-w-2xl mx-auto leading-relaxed mb-12">
              {lang === 'en' 
                ? "A beautiful website doesn't always create business results. Discover usability issues before your users leave." 
                : "Güzel bir web sitesi her zaman iş sonuçları yaratmaz. Kullanıcılarınız ayrılmadan önce kullanılabilirlik sorunlarını keşfedin."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#audit-form" className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-[#1E293B] px-8 py-4 text-sm font-bold text-white transition-all shadow-[0_8px_30px_rgb(30,41,59,0.2)] hover:shadow-[0_8px_40px_rgb(30,41,59,0.4)] hover:-translate-y-1">
                {lang === 'en' ? 'Get a Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi Alın'} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://gamma.app/docs/Web-Sitenizin-Donusum-Potansiyelini-Olcun-r0d5y2nmgtuwgpj" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl border border-dark/10 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-white hover:-translate-y-1 shadow-sm">
                <FileText className="w-4 h-4" /> {lang === 'en' ? 'Measure Your Website\'s Conversion Potential' : 'Web Sitenizin Dönüşüm Potansiyelini Ölçün'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EXPLAIN SECTION */}
      <section className="px-6 py-24 bg-white relative border-y border-dark/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-dark mb-6">
                {lang === 'en' ? 'What is a UX Audit?' : 'UX Analizi Nedir?'}
              </h2>
              <p className="text-lg font-light leading-relaxed text-dark/70 mb-8">
                {lang === 'en'
                  ? 'A UX Audit identifies usability problems, friction points, confusing navigation, and conversion blockers before redesign begins. Stop guessing why users leave and start fixing what is actually broken.'
                  : 'UX Analizi, web sitenizde ziyaretçileri zorlayan ve kaçıran hataları tespit eder. İnsanların sitenizden neden ayrıldığını tahmin etmeyi bırakın; sorunu net olarak bulup düzeltmeye başlayalım.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: AlertCircle, text: lang === 'en' ? 'Identify friction points' : 'Sürtünme noktalarını bulun' },
                  { icon: Target, text: lang === 'en' ? 'Remove conversion blockers' : 'Dönüşüm engellerini kaldırın' },
                  { icon: User, text: lang === 'en' ? 'Understand user confusion' : 'Kullanıcı kafa karışıklığını anlayın' },
                  { icon: BarChart3, text: lang === 'en' ? 'Data-backed redesign strategy' : 'Veriye dayalı tasarım stratejisi' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#FDFBF8] border border-dark/5">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#ca006c]">
                      <item.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="font-medium text-sm text-dark/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg mx-auto">
              <div className="aspect-square rounded-[2rem] bg-gradient-to-tr from-dark/5 to-dark/10 p-1 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2rem]"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full p-8">
                  <div className="bg-white rounded-2xl shadow-sm border border-dark/5 flex items-center justify-center p-6"><Search className="w-12 h-12 text-dark/20 stroke-[1]" /></div>
                  <div className="bg-white rounded-2xl shadow-sm border border-dark/5 flex items-center justify-center p-6"><AlertCircle className="w-12 h-12 text-[#ca006c]/40 stroke-[1]" /></div>
                  <div className="bg-white rounded-2xl shadow-sm border border-dark/5 flex items-center justify-center p-6"><BarChart3 className="w-12 h-12 text-dark/20 stroke-[1]" /></div>
                  <div className="bg-[#1E293B] rounded-2xl shadow-xl flex items-center justify-center p-6"><CheckCircle2 className="w-12 h-12 text-white/50 stroke-[1]" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="px-6 py-24 bg-[#FDFBF8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-dark tracking-tight">{lang === 'en' ? 'Our Process' : 'Sürecimiz'}</h2>
          </div>
          
          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-dark/10 hidden md:block z-0"></div>
            
            {[
              { num: '1', title: lang === 'en' ? 'Website Review' : 'Web Sitesi İncelemesi' },
              { num: '2', title: lang === 'en' ? 'AI-Assisted Analysis' : 'Yapay Zeka Destekli Analiz' },
              { num: '3', title: lang === 'en' ? 'UX Audit Report' : 'UX Analiz Raporu' },
              { num: '4', title: lang === 'en' ? 'Actionable Recommendations' : 'Uygulanabilir Öneriler' },
              { num: '5', title: lang === 'en' ? 'Redesign Strategy' : 'Yeniden Tasarım Stratejisi' },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6 relative z-10 group bg-white p-6 rounded-2xl border border-dark/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-[#ca006c]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="w-14 h-14 rounded-full bg-[#1E293B] text-white flex flex-shrink-0 items-center justify-center font-serif text-xl italic group-hover:bg-[#ca006c] transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-medium text-dark">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY UXIPEK SECTION */}
      <section className="px-6 py-24 bg-white border-y border-dark/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-dark tracking-tight mb-4">{lang === 'en' ? 'Why UXipek?' : 'Neden UXipek?'}</h2>
            <p className="text-dark/60">{lang === 'en' ? 'A unique blend of technology and human expertise.' : 'Teknoloji ve insan uzmanlığının eşsiz birleşimi.'}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: lang === 'en' ? 'AI-Assisted Workflow' : 'Yapay Zeka İş Akışı' },
              { icon: User, title: lang === 'en' ? 'Human UX Expertise' : 'İnsan UX Uzmanlığı' },
              { icon: FileText, title: lang === 'en' ? 'Actionable Reports' : 'Uygulanabilir Raporlar' },
              { icon: Target, title: lang === 'en' ? 'Business-Focused Design' : 'İş Odaklı Tasarım' },
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#FDFBF8] border border-dark/5 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-dark mb-6">
                  <card.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-medium text-dark">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SAMPLE REPORT SECTION */}
      <section id="sample-report" className="px-6 py-24 bg-[#1E293B] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ca006c]/40 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FileText className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            {lang === 'en' ? 'Know what to expect.' : 'Neyle karşılaşacağınızı bilin.'}
          </h2>
          <p className="text-lg text-white/70 font-light mb-10 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Download a sample UX Audit report to see the level of detail, behavioral analysis, and actionable insights we provide.' 
              : 'Sağladığımız detay seviyesini, davranışsal analizi ve eyleme dönüştürülebilir içgörüleri görmek için örnek bir UX Analizi raporu indirin.'}
          </p>
          <a href="https://gamma.app/docs/Web-Sitenizin-Donusum-Potansiyelini-Olcun-r0d5y2nmgtuwgpj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-[#1E293B] px-8 py-4 text-sm font-bold transition-all shadow-lg hover:scale-105">
            <FileText className="w-4 h-4" /> {lang === 'en' ? 'Measure Your Website\'s Conversion Potential' : 'Web Sitenizin Dönüşüm Potansiyelini Ölçün'}
          </a>
        </div>
      </section>

      {/* 6. LEAD FORM SECTION */}
      <section id="audit-form" className="px-6 py-24 bg-[#FDFBF8] relative">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-medium text-dark mb-4">{lang === 'en' ? 'Request Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İsteyin'}</h2>
            <p className="text-dark/60 text-sm">
              {lang === 'en' ? 'Fill out the form below. We will review your website and get back to you.' : 'Aşağıdaki formu doldurun. Sitenizi inceleyip size dönüş yapacağız.'}
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-dark/5 shadow-xl shadow-dark/5">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-dark mb-2">
                  {lang === 'en' ? 'Request Sent Successfully!' : 'Talebiniz Başarıyla Alındı!'}
                </h3>
                <p className="text-dark/60 mb-8">
                  {lang === 'en' ? 'We will review your website and get back to you shortly.' : 'Web sitenizi inceleyip en kısa sürede size dönüş yapacağız.'}
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 rounded-xl bg-dark/5 text-dark font-medium hover:bg-dark/10 transition-colors"
                >
                  {lang === 'en' ? 'Submit Another Request' : 'Yeni Bir Talep Gönder'}
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 text-red-600 text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {lang === 'en' ? 'Something went wrong. Please try again.' : 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-dark/80 mb-2">{lang === 'en' ? 'Website URL' : 'Web Sitesi URL'}</label>
                  <input 
                    type="url" 
                    value={formState.website}
                    onChange={(e) => setFormState({...formState, website: e.target.value})}
                    placeholder="https://yourwebsite.com" 
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF8] border border-dark/10 focus:outline-none focus:border-[#ca006c] focus:ring-1 focus:ring-[#ca006c] transition-colors" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark/80 mb-2">{lang === 'en' ? 'Full Name' : 'Ad Soyad'}</label>
                    <input 
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF8] border border-dark/10 focus:outline-none focus:border-[#ca006c] focus:ring-1 focus:ring-[#ca006c] transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark/80 mb-2">{lang === 'en' ? 'Company' : 'Şirket'}</label>
                    <input 
                      type="text" 
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF8] border border-dark/10 focus:outline-none focus:border-[#ca006c] focus:ring-1 focus:ring-[#ca006c] transition-colors" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/80 mb-2">{lang === 'en' ? 'Email Address' : 'E-posta Adresi'}</label>
                  <input 
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF8] border border-dark/10 focus:outline-none focus:border-[#ca006c] focus:ring-1 focus:ring-[#ca006c] transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/80 mb-2">{lang === 'en' ? 'Business Goal' : 'İş Hedefi'}</label>
                  <input 
                    type="text" 
                    value={formState.goal}
                    onChange={(e) => setFormState({...formState, goal: e.target.value})}
                    placeholder={lang === 'en' ? 'e.g. Increase sign-ups' : 'örn. Kayıtları artırmak'} 
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF8] border border-dark/10 focus:outline-none focus:border-[#ca006c] focus:ring-1 focus:ring-[#ca006c] transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/80 mb-2">{lang === 'en' ? 'Biggest UX Challenge' : 'En Büyük UX Zorluğu'}</label>
                  <textarea 
                    rows={3} 
                    value={formState.challenge}
                    onChange={(e) => setFormState({...formState, challenge: e.target.value})}
                    placeholder={lang === 'en' ? 'Users are dropping off at checkout...' : 'Kullanıcılar ödeme sayfasında ayrılıyor...'} 
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF8] border border-dark/10 focus:outline-none focus:border-[#ca006c] focus:ring-1 focus:ring-[#ca006c] transition-colors resize-none"
                  ></textarea>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="legalConsent" 
                      required
                      className="mt-1 w-4 h-4 rounded border-dark/20 text-pink focus:ring-pink"
                    />
                    <label htmlFor="legalConsent" className="text-sm text-dark/70 font-light leading-relaxed">
                      {lang === 'en' ? (
                        <>I have read the <a href={`/${lang}/kvkk`} target="_blank" className="text-pink hover:underline font-medium">KVKK Information Notice</a> and <a href={`/${lang}/privacy-policy`} target="_blank" className="text-pink hover:underline font-medium">Privacy Policy</a>.</>
                      ) : (
                        <><a href={`/${lang}/kvkk`} target="_blank" className="text-pink hover:underline font-medium">KVKK Aydınlatma Metni</a>'ni ve <a href={`/${lang}/privacy-policy`} target="_blank" className="text-pink hover:underline font-medium">Gizlilik Politikası</a>'nı okudum.</>
                      )}
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="marketingConsent" 
                      className="mt-1 w-4 h-4 rounded border-dark/20 text-pink focus:ring-pink"
                    />
                    <label htmlFor="marketingConsent" className="text-sm text-dark/70 font-light leading-relaxed">
                      {lang === 'en' ? (
                        'I would like to receive content, announcements, and service updates from UXIPEK via email.'
                      ) : (
                        'UXIPEK tarafından e-posta yoluyla içerik, duyuru ve hizmet bilgilendirmeleri almak istiyorum.'
                      )}
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#1E293B] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#ca006c] mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> {lang === 'en' ? 'Sending...' : 'Gönderiliyor...'}</>
                  ) : (
                    <>{lang === 'en' ? 'Request Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İste'} <ArrowUpRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="px-6 py-24 bg-white border-y border-dark/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-dark tracking-tight">FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-dark/5 rounded-2xl overflow-hidden bg-[#FDFBF8]">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-dark">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-dark/40 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-dark/60 font-light text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SCARCITY CTA */}
      <section className="px-6 py-24 bg-[#FDFBF8] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ca006c]/10 text-[#ca006c] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ca006c] animate-pulse"></span>
            {lang === 'en' ? 'Limited Availability' : 'Sınırlı Kontenjan'}
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-dark mb-8">
            {lang === 'en' ? 'Only 5 Free Mini UX Audits Available This Week' : 'Bu Hafta Yalnızca 5 Ücretsiz Mini UX Analizi Kontenjanı Kaldı'}
          </h2>
          <a href="#audit-form" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#ca006c] px-10 py-5 text-base font-bold text-white transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-[#ca006c]/90">
            {lang === 'en' ? 'Apply Now' : 'Hemen Başvur'} <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
