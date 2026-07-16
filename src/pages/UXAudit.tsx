import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Search, FileText, CheckCircle2, ChevronDown, Zap, User, Target, BarChart3, AlertCircle, Loader2 } from "lucide-react";

const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbykh3fplObzwut9axlAixamrEpMfiJpHoFapEBrPtwCpDoKHN-MIU5kFtymDFMS14MbhQ/exec";

export function UXAuditPage({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => { document.title = lang === "en" ? "UX Audit | UXIPEK" : "UX Analizi | UXIPEK"; }, [lang]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    website: "",
    name: "",
    company: "",
    email: "",
    goal: "",
    challenge: "",
    legalConsent: false
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const pushToDataLayer = (data: any) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push(data);
    }
  };

  const handleCtaClick = (location: string) => {
    pushToDataLayer({
      event: "ux_analysis_cta_click",
      cta_location: location
    });
  };

  const handleSampleProjectClick = () => {
    pushToDataLayer({
      event: "view_sample_ux_audit",
      project_name: "akademi_ozalit"
    });
  };

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
        mode: "no-cors",
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
      
      setStatus("success");
      setFormState({ website: "", name: "", company: "", email: "", goal: "", challenge: "", legalConsent: false });
      
      pushToDataLayer({
        event: "generate_lead",
        form_name: "free_mini_ux_analysis"
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const faqs = [
    {
      q: lang === 'en' ? 'What is a UX Audit?' : 'UX analizi nedir?',
      a: lang === 'en' 
        ? 'A UX audit identifies points in your website where visitors struggle, hesitate, or leave without completing a transaction. The goal is not just to list problems, but to provide actionable solutions to improve user experience and conversion potential.'
        : 'UX analizi, web sitenizde ziyaretçilerin zorlandığı, kararsız kaldığı veya işlemi tamamlamadan ayrıldığı noktaları ortaya çıkarır. Amaç yalnızca sorunları listelemek değil; kullanıcı deneyimini ve dönüşüm potansiyelini geliştirecek uygulanabilir çözümler sunmaktır.'
    },
    {
      q: lang === 'en' ? 'What does the free mini audit cover?' : 'Ücretsiz mini analiz neleri kapsar?',
      a: lang === 'en'
        ? 'It covers an evaluation of your website to identify the top 3 most critical issues affecting user experience, along with our initial recommendations for improvement.'
        : 'Web sitenizi inceleyip kullanıcı deneyimini etkileyen en kritik 3 sorunu ve ilk iyileştirme önerilerini kapsar.'
    },
    {
      q: lang === 'en' ? 'How long does the audit take?' : 'Analiz ne kadar sürer?',
      a: lang === 'en'
        ? 'We will share the mini UX audit report with you via email within 3 business days.'
        : 'Mini UX analizi raporunu 3 iş günü içinde e-posta ile sizinle paylaşacağız.'
    },
    {
      q: lang === 'en' ? 'Who is this for?' : 'Kimler için uygundur?',
      a: lang === 'en'
        ? 'It is suitable for businesses and product teams that have an existing website or platform and want to improve user experience and conversion rates.'
        : 'Mevcut bir web sitesi veya platformu olan, kullanıcı deneyimini ve dönüşüm oranlarını artırmak isteyen işletmeler ve ürün ekipleri için uygundur.'
    },
    {
      q: lang === 'en' ? 'What happens after the audit?' : 'Analiz sonrasında ne olur?',
      a: lang === 'en'
        ? 'You will receive actionable recommendations. You can implement these changes with your team or choose to work with us for a comprehensive redesign.'
        : 'Uygulanabilir öneriler alırsınız. Bu değişiklikleri kendi ekibinizle uygulayabilir veya kapsamlı bir yeniden tasarım için bizimle çalışmayı seçebilirsiniz.'
    },
    {
      q: lang === 'en' ? 'Is the redesign service included in the audit?' : 'Yeniden tasarım hizmeti analize dahil mi?',
      a: lang === 'en'
        ? 'No, the free mini audit only provides the evaluation and top 3 recommendations. Redesign services are separate and can be discussed based on your needs.'
        : 'Hayır, ücretsiz mini analiz yalnızca değerlendirmeyi ve en önemli 3 öneriyi sunar. Yeniden tasarım hizmetleri ayrıdır ve ihtiyaçlarınıza göre görüşülebilir.'
    }
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background w-full mt-[-80px] pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24 lg:pb-32 w-full">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <motion.div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-transformation/20 to-brand-secondary/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container-app text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-primary/5 shadow-sm text-[0.875rem] font-semibold uppercase tracking-widest text-text-primary/70 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-transformation animate-pulse"></span>
              {lang === 'en' ? 'UXIPEK UX EVALUATION' : 'UXİPEK UX DEĞERLENDİRMESİ'}
            </div>
            
            <h1 className="text-h1 text-[clamp(2.5rem,5vw,4.75rem)] text-text-primary mb-6 mx-auto">
              {lang === 'en' ? 'Is Your Website Actually ' : 'Web Siteniz Gerçekten '}
              <br className="hidden md:block" />
              <span className="text-brand-transformation">{lang === 'en' ? 'Converting?' : 'Dönüştürüyor mu?'}</span>
            </h1>
            
            <p className="text-body-lg text-text-primary/70 max-w-[680px] mx-auto mb-8">
              {lang === 'en' 
                ? "A beautiful website doesn't always create results. Let's discover together where users struggle, why they don't take action, and which areas need improvement." 
                : "Güzel görünen bir web sitesi her zaman sonuç yaratmaz. Kullanıcıların nerede zorlandığını, neden harekete geçmediğini ve hangi noktaların iyileştirilmesi gerektiğini birlikte keşfedelim."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="#ux-analizi-formu" 
                onClick={(e) => { smoothScroll(e, 'ux-analizi-formu'); handleCtaClick('hero'); }} 
                className="w-full sm:w-auto min-h-[48px] px-6 rounded-2xl bg-brand-primary text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-brand-primary/90 focus-visible:ring-4 focus-visible:ring-brand-primary/30 shadow-lg"
              >
                {lang === 'en' ? 'Request Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İste'} <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#ornek-ux-calismasi" 
                onClick={(e) => smoothScroll(e, 'ornek-ux-calismasi')} 
                className="w-full sm:w-auto min-h-[48px] px-6 rounded-2xl bg-white border border-brand-primary/10 text-brand-primary text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-background focus-visible:ring-4 focus-visible:ring-brand-primary/10 shadow-sm"
              >
                <FileText className="w-4 h-4" /> {lang === 'en' ? 'Review Sample Work' : 'Örnek Çalışmayı İncele'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EXPLAIN SECTION */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative border-y border-brand-primary/5 w-full">
        <div className="container-app ">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 w-full">
              <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary mb-6">
                {lang === 'en' ? 'What is a UX Audit?' : 'UX Analizi Nedir?'}
              </h2>
              <p className="text-body-lg text-text-primary/70 max-w-[680px] mb-12">
                {lang === 'en'
                  ? 'A UX audit identifies points in your website where visitors struggle, hesitate, or leave without completing a transaction. The goal is not just to list problems, but to provide actionable solutions to improve user experience and conversion potential.'
                  : 'UX analizi, web sitenizde ziyaretçilerin zorlandığı, kararsız kaldığı veya işlemi tamamlamadan ayrıldığı noktaları ortaya çıkarır. Amaç yalnızca sorunları listelemek değil; kullanıcı deneyimini ve dönüşüm potansiyelini geliştirecek uygulanabilir çözümler sunmaktır.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { icon: AlertCircle, text: lang === 'en' ? 'Identify friction points' : 'Kullanıcıların zorlandığı noktaları belirleme' },
                  { icon: Target, text: lang === 'en' ? 'Evaluate content & visual hierarchy' : 'İçerik ve görsel hiyerarşiyi değerlendirme' },
                  { icon: User, text: lang === 'en' ? 'Reveal conversion blockers' : 'Dönüşüm engellerini ortaya çıkarma' },
                  { icon: BarChart3, text: lang === 'en' ? 'Provide data-driven recommendations' : 'Veriye dayalı iyileştirme önerileri sunma' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-brand-primary/5 h-full">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex shrink-0 items-center justify-center text-brand-transformation">
                      <item.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="font-semibold text-base leading-[1.65] text-text-primary mt-1.5">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg mx-auto">
              <div className="aspect-square rounded-[2rem] bg-gradient-to-tr from-dark/5 to-dark/10 p-1 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2rem]"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full p-8">
                  <div className="bg-white rounded-2xl shadow-sm border border-brand-primary/5 flex items-center justify-center p-6"><Search className="w-12 h-12 text-text-primary/20 stroke-[1]" /></div>
                  <div className="bg-white rounded-2xl shadow-sm border border-brand-primary/5 flex items-center justify-center p-6"><AlertCircle className="w-12 h-12 text-brand-transformation/40 stroke-[1]" /></div>
                  <div className="bg-white rounded-2xl shadow-sm border border-brand-primary/5 flex items-center justify-center p-6"><BarChart3 className="w-12 h-12 text-text-primary/20 stroke-[1]" /></div>
                  <div className="bg-brand-primary rounded-2xl shadow-xl flex items-center justify-center p-6"><CheckCircle2 className="w-12 h-12 text-white/50 stroke-[1]" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAMPLE PROJECT SECTION */}
      <section id="ornek-ux-calismasi" className="py-16 md:py-24 lg:py-32 bg-brand-primary text-white relative w-full">
        <div className="container-app ">
          <div className="mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-[0.875rem] font-semibold uppercase tracking-widest mb-4">
              {lang === 'en' ? 'SAMPLE UX AUDIT CASE STUDY' : 'ÖRNEK UX AUDIT ÇALIŞMASI'}
            </div>
            <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.08] text-white mb-6 max-w-[820px]">
              {lang === 'en' ? (
                <>I Didn't Just Redesign a Website.<br className="hidden md:block" />I Made Its Problems Visible.</>
              ) : (
                <>Bir Web Sitesini Yalnızca<br className="hidden md:block" />Yeniden Tasarlamadım.<br className="hidden md:block" />Sorunlarını Görünür Hâle Getirdim.</>
              )}
            </h2>
            <p className="text-body-lg text-white/80 max-w-[680px]">
              {lang === 'en' 
                ? 'I analyzed the Akademi Ozalit website in terms of user experience, content hierarchy, accessibility, and conversion. I presented the core issues I identified, along with actionable improvement recommendations and redesigned screens.' 
                : 'Akademi Ozalit web sitesini kullanıcı deneyimi, içerik hiyerarşisi, erişilebilirlik ve dönüşüm açısından analiz ettim. Belirlediğim temel sorunları, uygulanabilir iyileştirme önerileri ve yeniden tasarlanan ekranlarla birlikte sundum.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <div className="aspect-[4/3] bg-brand-primary relative flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt={lang === 'en' ? 'Akademi Ozalit UX audit and website redesign project' : 'Akademi Ozalit UX audit ve web sitesi yeniden tasarım çalışması'}
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-h3 !text-white mb-2">Akademi Ozalit</div>
                  <div className="text-white/70 text-base">UX Audit & Redesign</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-[0.875rem] leading-[1.55] text-white/60 mb-2">{lang === 'en' ? 'Service Type' : 'Çalışma Türü'}</div>
                  <div className="text-base font-semibold leading-[1.65] text-white">UX Audit & Redesign</div>
                </div>
                <div>
                  <div className="text-[0.875rem] leading-[1.55] text-white/60 mb-2">{lang === 'en' ? 'Industry' : 'Sektör'}</div>
                  <div className="text-base font-semibold leading-[1.65] text-white">{lang === 'en' ? 'Education & Publishing' : 'Eğitim ve Yayıncılık'}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-[0.875rem] leading-[1.55] text-white/60 mb-2">{lang === 'en' ? 'Areas Evaluated' : 'İncelenen Alanlar'}</div>
                  <div className="text-base font-semibold leading-[1.65] text-white">{lang === 'en' ? 'User experience, accessibility, and content hierarchy' : 'Kullanıcı deneyimi, erişilebilirlik ve içerik hiyerarşisi'}</div>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-[0.875rem] leading-[1.55] text-white/60 mb-2">{lang === 'en' ? 'Deliverables' : 'Çıktı'}</div>
                  <div className="text-base font-semibold leading-[1.65] text-white">{lang === 'en' ? 'Prioritized findings and redesign recommendations' : 'Önceliklendirilmiş bulgular ve yeniden tasarım önerileri'}</div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-h3 !text-white mb-4">
                  {lang === 'en' ? 'Key Deliverables:' : 'Üç Temel Çıktı:'}
                </h3>
                <ul className="flex flex-col gap-3 text-white/90 text-base leading-[1.65]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-transformation shrink-0 mt-0.5" />
                    <span>{lang === 'en' ? 'UX and accessibility issues' : 'UX ve erişilebilirlik sorunları'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-transformation shrink-0 mt-0.5" />
                    <span>{lang === 'en' ? 'Prioritized improvement recommendations' : 'Önceliklendirilmiş iyileştirme önerileri'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-transformation shrink-0 mt-0.5" />
                    <span>{lang === 'en' ? 'Redesigned user interface' : 'Yeniden tasarlanmış kullanıcı arayüzü'}</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4">
                <Link 
                  href="https://akademozalit-uxaudit-redesign.lovable.app/#ux-audit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={handleSampleProjectClick}
                  className="w-full sm:w-auto min-h-[48px] px-6 rounded-2xl bg-white text-brand-primary text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-background focus-visible:ring-4 focus-visible:ring-white/30 shadow-lg"
                >
                  <FileText className="w-4 h-4" /> {lang === 'en' ? 'Review Sample UX Audit' : 'Örnek UX Çalışmasını İncele'}
                </Link>
                <Link 
                  href="#ux-analizi-formu" 
                  onClick={(e) => { smoothScroll(e, 'ux-analizi-formu'); handleCtaClick('sample_project'); }} 
                  className="w-full sm:w-auto min-h-[48px] px-6 rounded-2xl bg-transparent border border-white/20 text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 focus-visible:ring-4 focus-visible:ring-white/20"
                >
                  {lang === 'en' ? 'Analyze My Site Too' : 'Benim Sitemi de Analiz Et'}
                </Link>
              </div>
              
              <p className="text-[0.875rem] leading-[1.55] text-white/50 mt-2">
                {lang === 'en' 
                  ? '*This project was prepared to demonstrate my UX audit process and recommended design approach.' 
                  : '*Bu çalışma, UX analiz sürecimi ve önerdiğim tasarım yaklaşımını göstermek amacıyla hazırlanmıştır.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEAD FORM SECTION */}
      <section id="ux-analizi-formu" className="py-16 md:py-24 lg:py-32 bg-background relative border-y border-brand-primary/5 w-full">
        <div className="w-[min(100%-32px,640px)] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary mb-4">
              {lang === 'en' ? 'Request Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İsteyin'}
            </h2>
            <p className="text-body-lg text-text-primary/70 max-w-[680px] mx-auto">
              {lang === 'en' 
                ? 'I will review your website and share the top 3 critical UX issues and initial improvement recommendations via email within 3 business days.' 
                : 'Web sitenizi inceleyip kullanıcı deneyimini etkileyen en kritik 3 sorunu ve ilk iyileştirme önerilerimi 3 iş günü içinde e-posta ile paylaşacağım.'}
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] border border-brand-primary/5 shadow-xl shadow-dark/5">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-h3 font-bold text-text-primary mb-4">
                  {lang === 'en' ? 'Request Sent Successfully!' : 'Talebiniz Başarıyla Alındı!'}
                </h3>
                <p className="text-base leading-[1.65] text-text-primary/70 mb-8">
                  {lang === 'en' ? 'I will review your website and get back to you shortly.' : 'Web sitenizi inceleyip en kısa sürede size dönüş yapacağım.'}
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="min-h-[48px] px-6 rounded-2xl bg-brand-primary text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-brand-primary/90 focus-visible:ring-4 focus-visible:ring-brand-primary/30"
                >
                  {lang === 'en' ? 'Submit Another Request' : 'Yeni Bir Talep Gönder'}
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 text-red-600 text-[0.9375rem] font-semibold leading-[1.2] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {lang === 'en' ? 'An error occurred. Please try again.' : 'Bir hata oluştu. Lütfen tekrar deneyin.'}
                  </div>
                )}
                <div>
                  <label htmlFor="website" className="block text-[0.9375rem] font-semibold text-text-primary mb-2">
                    {lang === 'en' ? 'Website URL' : 'Web Sitesi URL’si'} <span className="text-brand-transformation">*</span>
                  </label>
                  <input 
                    id="website"
                    type="url" 
                    value={formState.website}
                    onChange={(e) => setFormState({...formState, website: e.target.value})}
                    placeholder="https://" 
                    className="w-full min-h-[48px] px-4 rounded-xl bg-background border border-brand-primary/10 focus:outline-none focus:border-brand-transformation focus:ring-2 focus:ring-brand-transformation/20 transition-all text-text-primary placeholder-dark/30 text-base" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[0.9375rem] font-semibold text-text-primary mb-2">
                      {lang === 'en' ? 'Full Name' : 'Ad Soyad'} <span className="text-brand-transformation">*</span>
                    </label>
                    <input 
                      id="name"
                      type="text" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full min-h-[48px] px-4 rounded-xl bg-background border border-brand-primary/10 focus:outline-none focus:border-brand-transformation focus:ring-2 focus:ring-brand-transformation/20 transition-all text-text-primary placeholder-dark/30 text-base" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[0.9375rem] font-semibold text-text-primary mb-2">
                      {lang === 'en' ? 'Email Address' : 'E-posta Adresi'} <span className="text-brand-transformation">*</span>
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full min-h-[48px] px-4 rounded-xl bg-background border border-brand-primary/10 focus:outline-none focus:border-brand-transformation focus:ring-2 focus:ring-brand-transformation/20 transition-all text-text-primary placeholder-dark/30 text-base" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-[0.9375rem] font-semibold text-text-primary mb-2">
                    {lang === 'en' ? 'Company / Brand Name' : 'Şirket / Marka Adı'} <span className="text-text-primary/50 font-normal text-[0.875rem] ml-1">({lang === 'en' ? 'Optional' : 'İsteğe bağlı'})</span>
                  </label>
                  <input 
                    id="company"
                    type="text" 
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                    className="w-full min-h-[48px] px-4 rounded-xl bg-background border border-brand-primary/10 focus:outline-none focus:border-brand-transformation focus:ring-2 focus:ring-brand-transformation/20 transition-all text-text-primary placeholder-dark/30 text-base" 
                  />
                </div>
                
                <div>
                  <label htmlFor="goal" className="block text-[0.9375rem] font-semibold text-text-primary mb-2">
                    {lang === 'en' ? 'What is the primary goal you want to achieve with your website?' : 'Web sitenizle ulaşmak istediğiniz temel hedef nedir?'} <span className="text-brand-transformation">*</span>
                  </label>
                  <input 
                    id="goal"
                    type="text" 
                    value={formState.goal}
                    onChange={(e) => setFormState({...formState, goal: e.target.value})}
                    className="w-full min-h-[48px] px-4 rounded-xl bg-background border border-brand-primary/10 focus:outline-none focus:border-brand-transformation focus:ring-2 focus:ring-brand-transformation/20 transition-all text-text-primary placeholder-dark/30 text-base" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="challenge" className="block text-[0.9375rem] font-semibold text-text-primary mb-2">
                    {lang === 'en' ? 'What is the most important problem you want to solve on your website?' : 'Web sitenizde çözmek istediğiniz en önemli sorun nedir?'} <span className="text-brand-transformation">*</span>
                  </label>
                  <textarea 
                    id="challenge"
                    value={formState.challenge}
                    onChange={(e) => setFormState({...formState, challenge: e.target.value})}
                    className="w-full min-h-[120px] p-4 rounded-xl bg-background border border-brand-primary/10 focus:outline-none focus:border-brand-transformation focus:ring-2 focus:ring-brand-transformation/20 transition-all text-text-primary placeholder-dark/30 resize-none text-base"
                    required
                  ></textarea>
                </div>
                
                <div className="flex flex-col gap-4 pt-4 border-t border-brand-primary/5">
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="legalConsent" 
                      checked={formState.legalConsent}
                      onChange={(e) => setFormState({...formState, legalConsent: e.target.checked})}
                      required
                      className="mt-1 w-4 h-4 rounded border-brand-primary/20 text-brand-transformation focus:ring-brand-transformation shrink-0 cursor-pointer"
                    />
                    <label htmlFor="legalConsent" className="text-[0.875rem] leading-[1.55] text-text-primary/80 cursor-pointer select-none">
                      {lang === 'en' ? (
                        <>I have read the <Link to={`/${lang}/kvkk`} target="_blank" rel="noopener noreferrer" className="text-brand-transformation hover:underline font-semibold">KVKK Information Notice</Link> and agree to the processing of my personal data to evaluate my request.</>
                      ) : (
                        <><Link to={`/${lang}/kvkk`} target="_blank" rel="noopener noreferrer" className="text-brand-transformation hover:underline font-semibold">KVKK Aydınlatma Metni</Link>'ni okudum ve kişisel verilerimin talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum.</>
                      )}
                    </label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="marketingConsent" 
                      className="mt-1 w-4 h-4 rounded border-brand-primary/20 text-brand-transformation focus:ring-brand-transformation shrink-0 cursor-pointer"
                    />
                    <label htmlFor="marketingConsent" className="text-[0.875rem] leading-[1.55] text-text-primary/80 cursor-pointer select-none">
                      {lang === 'en' ? (
                        'I would like to receive content and information from UXipek via email.'
                      ) : (
                        'UXipek\'e ait içerik ve bilgilendirmeleri e-posta yoluyla almak istiyorum.'
                      )}
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-primary-pink w-full sm:w-auto text-[0.9375rem] mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                     <><Loader2 className="w-5 h-5 animate-spin" /> {lang === 'en' ? 'Sending...' : 'Gönderiliyor...'}</>
                  ) : (
                    <>{lang === 'en' ? 'Request My Free Mini Audit' : 'Ücretsiz Mini Analizimi İste'} <ArrowUpRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-[0.875rem] leading-[1.55] text-center text-text-primary/60 mt-2">
                  {lang === 'en' 
                    ? 'Your information is used only to evaluate your request and is not shared with third parties.' 
                    : 'Bilgileriniz yalnızca talebinizi değerlendirmek için kullanılır ve üçüncü kişilerle paylaşılmaz.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-16 md:py-24 lg:py-32 bg-white w-full">
        <div className="w-[min(100%-32px,1000px)] mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary mb-6">
              {lang === 'en' ? 'Our Process' : 'Sürecimiz'}
            </h2>
            <p className="text-body-lg text-text-primary/70 max-w-[680px] mx-auto">
              {lang === 'en' 
                ? 'I combine AI-assisted analysis tools with expert evaluation to prioritize issues and turn them into an actionable roadmap.' 
                : 'Yapay zekâ destekli analiz araçlarını uzman değerlendirmesiyle birleştirerek sorunları önceliklendiriyor ve uygulanabilir bir yol haritasına dönüştürüyorum.'}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
            <div className="absolute top-[3.5rem] left-[3.5rem] right-[3.5rem] h-px bg-brand-primary/10 hidden md:block z-0"></div>
            <div className="absolute left-[3.5rem] top-[3.5rem] bottom-[3.5rem] w-px bg-brand-primary/10 md:hidden z-0"></div>
            
            {[
              { num: '1', title: lang === 'en' ? 'Website Review' : 'Web Sitesi İncelemesi' },
              { num: '2', title: lang === 'en' ? 'AI-Assisted Pre-Analysis' : 'AI Destekli Ön Analiz' },
              { num: '3', title: lang === 'en' ? 'Expert UX Evaluation' : 'Uzman UX Değerlendirmesi' },
              { num: '4', title: lang === 'en' ? 'Findings and Actionable Recommendations' : 'Bulgular ve Uygulanabilir Öneriler' },
              { num: '5', title: lang === 'en' ? 'Redesign Strategy' : 'Yeniden Tasarım Stratejisi' },
            ].map((step, i) => (
              <div key={i} className="flex flex-row md:flex-col items-center gap-6 md:gap-4 relative z-10 group flex-1">
                <div className="w-14 h-14 rounded-full bg-white text-brand-primary border-2 border-brand-primary/10 flex flex-shrink-0 items-center justify-center font-bold text-xl group-hover:border-brand-transformation group-hover:text-brand-transformation transition-colors shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-base font-semibold leading-[1.65] text-text-primary md:text-center px-2">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY UXIPEK SECTION */}
      <section className="py-16 md:py-24 lg:py-32 bg-background border-y border-brand-primary/5 relative w-full">
        <div className="container-app ">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary mb-6">
              {lang === 'en' ? 'Why UXipek?' : 'Neden UXipek?'}
            </h2>
            <p className="text-body-lg text-text-primary/70 max-w-[680px] mx-auto">
              {lang === 'en' 
                ? 'I combine technology and human experience in a balanced, strategic, and actionable process.' 
                : 'Teknoloji ve insan deneyimini dengeli, stratejik ve uygulanabilir bir süreçte birleştiriyorum.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { 
                icon: Zap, 
                title: lang === 'en' ? 'AI-Assisted Workflow' : 'Yapay Zekâ Destekli İş Akışı',
                desc: lang === 'en' ? 'Faster and data-informed problem detection using modern tools.' : 'Modern araçlar kullanarak daha hızlı ve veri destekli sorun tespiti.'
              },
              { 
                icon: User, 
                title: lang === 'en' ? 'Human-Centric Expert Evaluation' : 'İnsan Odaklı Uzman Değerlendirmesi',
                desc: lang === 'en' ? 'Deep behavioral analysis beyond what automated tools can see.' : 'Otomatik araçların göremediğinin ötesinde derin davranışsal analiz.'
              },
              { 
                icon: FileText, 
                title: lang === 'en' ? 'Actionable & Prioritized Recommendations' : 'Uygulanabilir ve Önceliklendirilmiş Öneriler',
                desc: lang === 'en' ? 'Clear steps on what to fix first for maximum impact.' : 'Maksimum etki için önce neyin düzeltilmesi gerektiğine dair net adımlar.'
              },
              { 
                icon: Target, 
                title: lang === 'en' ? 'Design Aligned with Business Goals' : 'İş Hedefleriyle Uyumlu Tasarım',
                desc: lang === 'en' ? 'Solutions focused on improving conversions and retention.' : 'Dönüşümleri ve elde tutmayı artırmaya odaklı çözümler.'
              },
            ].map((card, i) => (
              <div key={i} className="p-6 lg:p-8 rounded-[2rem] bg-white border border-brand-primary/5 flex flex-col items-start transition-shadow hover:shadow-md h-full">
                <div className="w-12 h-12 rounded-xl bg-background border border-brand-primary/5 flex shrink-0 items-center justify-center text-brand-transformation mb-6">
                  <card.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-h3 text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-base leading-[1.65] text-text-primary/70">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-b border-brand-primary/5 w-full">
        <div className="w-[min(100%-32px,850px)] mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary">
              {lang === 'en' ? 'Frequently Asked Questions' : 'Sık Sorulan Sorular'}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-primary/5 rounded-2xl overflow-hidden bg-background transition-all duration-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-transformation/50 rounded-2xl"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-[1.125rem] leading-[1.4] font-semibold text-text-primary pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-transformation shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-base leading-[1.65] text-text-primary/80">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-16 md:py-24 lg:py-32 bg-brand-primary text-center relative overflow-hidden w-full">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-transformation/30 via-transparent to-transparent"></div>
        <div className="w-[min(100%-32px,850px)] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-[0.875rem] font-semibold uppercase tracking-widest mb-6">
            {lang === 'en' ? 'TAKE THE FIRST STEP' : 'İLK ADIMI ATIN'}
          </div>
          <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-white mb-6">
            {lang === 'en' ? 'Let\'s Discover Where Users Struggle on Your Website Together.' : 'Web Sitenizde Kullanıcıların Nerede Zorlandığını Birlikte Keşfedelim.'}
          </h2>
          <p className="text-body-lg text-white/80 max-w-[680px] mx-auto mb-10">
            {lang === 'en' 
              ? 'See the most critical issues with a free mini audit, and plan your next steps more consciously.' 
              : 'Ücretsiz mini analizle en kritik sorunları görün, sonraki adımlarınızı daha bilinçli planlayın.'}
          </p>
          <Link 
            href="#ux-analizi-formu" 
            onClick={(e) => { smoothScroll(e, 'ux-analizi-formu'); handleCtaClick('final_cta'); }} 
            className="w-full sm:w-auto min-h-[48px] px-8 rounded-2xl bg-white text-brand-primary text-[1rem] font-bold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-background focus-visible:ring-4 focus-visible:ring-white/30 shadow-lg"
          >
            {lang === 'en' ? 'Request Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İste'} <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
