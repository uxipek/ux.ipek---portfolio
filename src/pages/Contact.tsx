import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Linkedin, Instagram, Dribbble, PenTool, LayoutTemplate, Briefcase, Zap, BarChart3, LineChart } from "lucide-react";
import React, { useState } from "react";

export function ContactPage({ lang }: { lang: "en" | "tr" }) {  useEffect(() => { document.title = lang === "en" ? "Contact | UXIPEK" : "İletişim | UXIPEK"; }, [lang]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject") || (lang === 'en' ? 'New Contact Inquiry' : 'Yeni İletişim Talebi'),
      message: `
Company: ${formData.get("company")}
Website: ${formData.get("website")}
Project Type: ${formData.get("projectType")}
Budget: ${formData.get("budget")}
Marketing Consent: ${formData.get("marketingConsent") ? "Yes" : "No"}

Message:
${formData.get("message")}
      `
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.error || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background w-full mt-[-80px] pt-20 min-h-screen">
      {/* 01 HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-[120px]">
          <motion.div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-transformation/20 to-brand-secondary/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="w-[min(100%-32px,1000px)] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-sm border border-brand-primary/5 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-brand-transformation mb-8">
              {lang === 'en' ? 'Start a Conversation' : 'İletişime Geçin'}
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-text-primary mb-8 leading-[1.05]">
              {lang === 'en' ? 'Let\'s Build a Smarter ' : 'Daha Akıllı Bir Büyüme '}<br className="hidden md:block" />
              <span className="text-brand-primary italic font-serif opacity-80">{lang === 'en' ? 'Growth System.' : 'Sistemi Kuralım.'}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-text-primary/70 w-[min(100%-32px,850px)] mx-auto leading-relaxed mb-12">
              {lang === 'en' 
                ? 'Whether you\'re launching a new product, optimizing conversions, improving user experience, or building an AI-powered platform, let\'s create digital experiences people trust and businesses grow from.' 
                : 'Yeni bir ürün piyasaya sürüyor, dönüşümleri optimize ediyor, kullanıcı deneyimini iyileştiriyor veya yapay zeka destekli bir platform oluşturuyor olun; insanların güvendiği ve işlerin büyüdüğü dijital deneyimler yaratalım.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`/${lang}/ux-audit`} className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-brand-primary px-8 py-4 text-sm font-bold text-white transition-all shadow-[0_8px_30px_rgb(30,41,59,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgb(30,41,59,0.4)]">
                {lang === 'en' ? 'Book a UX Audit' : 'UX Randevusu Al'} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href={`/${lang}/ux-audit`} className="w-full sm:w-auto flex items-center justify-center gap-3 min-h-[48px] px-6 rounded-2xl bg-white border border-brand-primary/10 text-brand-primary text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-background focus-visible:ring-4 focus-visible:ring-brand-primary/10 shadow-sm">
                {lang === 'en' ? 'Schedule a Strategy Call' : 'Strateji Görüşmesi Planla'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 WHY REACH OUT? */}
      <section className="py-24 bg-white relative">
        <div className="container-app ">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">{lang === 'en' ? 'How I Can Help' : 'Nasıl Yardımcı Olabilirim?'}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '01', title: lang === 'en' ? 'UX Audits & Conversion Analysis' : 'UX Analizi ve Dönüşüm', desc: lang === 'en' ? 'Identify friction, usability issues, and hidden conversion leaks.' : 'Sürtünmeleri, kullanılabilirlik sorunlarını ve gizli kaçakları belirleyin.', icon: BarChart3 },
              { num: '02', title: lang === 'en' ? 'AI-Native Product Design' : 'Yapay Zeka Ürün Tasarımı', desc: lang === 'en' ? 'Design scalable AI experiences, onboarding systems, and product flows.' : 'Ölçeklenebilir yapay zeka deneyimleri ve ürün akışları tasarlayın.', icon: Zap },
              { num: '03', title: lang === 'en' ? 'Growth Systems & Landing Pages' : 'Büyüme Sistemleri ve Açılış Sayfaları', desc: lang === 'en' ? 'Transform traffic into trust, activation, and revenue.' : 'Trafiği güvene, aktivasyona ve gelire dönüştürün.', icon: LineChart },
              { num: '04', title: lang === 'en' ? 'Digital Product Strategy' : 'Dijital Ürün Stratejisi', desc: lang === 'en' ? 'Improve user journeys, information architecture, and business alignment.' : 'Kullanıcı yolculuklarını ve bilgi mimarisini geliştirin.', icon: LayoutTemplate }
            ].map((s, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-6 bg-background p-10 rounded-[2rem] border border-brand-primary/5 hover:border-brand-transformation/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-primary/10 flex items-center justify-center text-text-primary/60 transition-all duration-300 group-hover:text-brand-transformation group-hover:scale-105 shadow-sm">
                   <s.icon strokeWidth={1.5} size={28}/>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-transformation tracking-widest uppercase mb-2">{s.num}</div>
                  <h3 className="text-xl font-medium text-text-primary mb-3">{s.title}</h3>
                  <p className="text-text-primary/60 font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 CONTACT EXPERIENCE */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-background relative border-t border-brand-primary/5">
        <div className="container-app grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-h2 mb-6">
              {lang === 'en' ? 'Start the Conversation' : 'Bağlantı Kurun'}
            </h2>
            <p className="text-xl text-text-primary/60 font-light mb-12 max-w-md leading-relaxed">
              {lang === 'en' ? 'I personally review every inquiry and respond within 1–2 business days.' : 'Her talebi bizzat inceliyor ve 1-2 iş günü içinde geri dönüş yapıyorum.'}
            </p>
            
            {/* 04 CONNECT (Moved inside left column for layout elegance) */}
            <h3 className="text-[11px] font-bold text-text-primary/40 tracking-[0.2em] uppercase mb-6">{lang === 'en' ? 'Connect Beyond Email' : 'Diğer Platformlar'}</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://linkedin.com/in/ipek-bolakca" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white border border-brand-primary/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-blue-500/30 hover:shadow-md group">
                <Linkedin size={20} className="text-[#0A66C2] group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-text-primary">LinkedIn</span>
              </a>
              <a href="https://behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white border border-brand-primary/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-[#1769FF]/30 hover:shadow-md group">
                <PenTool size={20} className="text-[#1769FF] group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-text-primary">Behance</span>
              </a>
              <a href="#" className="rounded-2xl bg-white border border-brand-primary/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-md group">
                 <Briefcase size={20} className="text-text-primary group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-text-primary">Medium</span>
              </a>
              <a href="#" className="rounded-2xl bg-white border border-brand-primary/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-brand-transformation-500/30 hover:shadow-md group">
                 <Instagram size={20} className="text-brand-transformation-600 group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-text-primary">Instagram</span>
              </a>
            </div>
            
            <div className="mt-12 p-8 bg-white/50 backdrop-blur-md rounded-3xl border border-white">
              <p className="text-[11px] font-bold text-text-primary/40 tracking-wider uppercase mb-2">{lang === 'en' ? 'Direct Email' : 'E-posta'}</p>
              <a href="mailto:uxdesigneripek@gmail.com" className="text-xl font-medium text-brand-transformation hover:underline">uxdesigneripek@gmail.com</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-brand-primary/5 shadow-2xl shadow-dark/5 relative">
            <div className="absolute -top-6 -right-6 text-6xl opacity-20 hidden md:block">🦋</div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary/50 mb-3">{lang === 'en' ? 'Name' : 'İsim'}</label>
                  <input required name="name" type="text" className="w-full px-5 py-4 bg-background border border-brand-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-transformation/30 text-text-primary placeholder:text-text-primary/20 transition-all font-medium" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary/50 mb-3">{lang === 'en' ? 'Company' : 'Şirket'}</label>
                  <input type="text" name="company" className="w-full px-5 py-4 bg-background border border-brand-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-transformation/30 text-text-primary placeholder:text-text-primary/20 transition-all font-medium" placeholder="Acme Inc." />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary/50 mb-3">{lang === 'en' ? 'Email Address' : 'E-posta Adresi'}</label>
                <input required name="email" type="email" className="w-full px-5 py-4 bg-background border border-brand-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-transformation/30 text-text-primary placeholder:text-text-primary/20 transition-all font-medium" placeholder="hello@company.com" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary/50 mb-3">{lang === 'en' ? 'Website (Optional)' : 'Web Sitesi (Opsiyonel)'}</label>
                    <input name="website" type="text" className="w-full px-5 py-4 bg-background border border-brand-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-transformation/30 text-text-primary placeholder:text-text-primary/20 transition-all font-medium" placeholder="example.com" />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary/50 mb-3">{lang === 'en' ? 'Project Type' : 'Proje Türü'}</label>
                    <select name="projectType" className="w-full px-5 py-4 bg-background border border-brand-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-transformation/30 text-text-primary transition-all font-medium appearance-none">
                       <option>{lang === 'en' ? 'UX Audit' : 'UX Analizi'}</option>
                       <option>{lang === 'en' ? 'SaaS Product Design' : 'SaaS Ürün Tasarımı'}</option>
                       <option>{lang === 'en' ? 'Landing Page' : 'Açılış Sayfası'}</option>
                       <option>{lang === 'en' ? 'AI Interface Design' : 'Yapay Zeka Arayüzü'}</option>
                       <option>{lang === 'en' ? 'Consultancy' : 'Danışmanlık'}</option>
                    </select>
                 </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary/50 mb-3">{lang === 'en' ? 'Budget Range' : 'Bütçe Aralığı'}</label>
                <select name="budget" className="w-full px-5 py-4 bg-background border border-brand-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-transformation/30 text-text-primary transition-all font-medium appearance-none">
                   <option>$1k - $3k</option>
                   <option>$3k - $10k</option>
                   <option>$10k+</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-text-primary/50 mb-3">{lang === 'en' ? 'Message' : 'Mesaj'}</label>
                <textarea name="message" required rows={4} className="w-full px-5 py-5 bg-background border border-brand-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-transformation/30 text-text-primary placeholder:text-text-primary/20 transition-all resize-none font-medium" placeholder={lang === 'en' ? 'Tell me about your product challenges...' : 'Ürün pürüzlerinden bahsedin...'}></textarea>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="contactLegalConsent" 
                    name="legalConsent"
                    required
                    className="mt-1 w-4 h-4 rounded border-brand-primary/20 text-brand-transformation focus:ring-brand-transformation"
                  />
                  <label htmlFor="contactLegalConsent" className="text-sm text-text-primary/70 font-light leading-relaxed">
                    {lang === 'en' ? (
                      <>I have read the <a href={`/${lang}/kvkk`} target="_blank" className="text-brand-transformation hover:underline font-medium">KVKK Information Notice</a> and <a href={`/${lang}/privacy-policy`} target="_blank" className="text-brand-transformation hover:underline font-medium">Privacy Policy</a>.</>
                    ) : (
                      <><a href={`/${lang}/kvkk`} target="_blank" className="text-brand-transformation hover:underline font-medium">KVKK Aydınlatma Metni</a>'ni ve <a href={`/${lang}/privacy-policy`} target="_blank" className="text-brand-transformation hover:underline font-medium">Gizlilik Politikası</a>'nı okudum.</>
                    )}
                  </label>
                </div>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="contactMarketingConsent" 
                    name="marketingConsent"
                    className="mt-1 w-4 h-4 rounded border-brand-primary/20 text-brand-transformation focus:ring-brand-transformation"
                  />
                  <label htmlFor="contactMarketingConsent" className="text-sm text-text-primary/70 font-light leading-relaxed">
                    {lang === 'en' ? (
                      'I would like to receive content, announcements, and service updates from UXIPEK via email.'
                    ) : (
                      'UXIPEK tarafından e-posta yoluyla içerik, duyuru ve hizmet bilgilendirmeleri almak istiyorum.'
                    )}
                  </label>
                </div>
              </div>
              
              <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-5 rounded-2xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-dark/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (lang === 'en' ? 'Sending...' : 'Gönderiliyor...') : (lang === 'en' ? 'Send Inquiry' : 'Talebi Gönder')}
                <ArrowRight className="w-5 h-5" />
              </button>

              {errorMsg && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 text-red-600 font-medium text-center bg-red-50 border border-red-100 py-3 rounded-2xl mt-4">
                  {errorMsg}
                </motion.div>
              )}

              {isSuccess && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 text-emerald-600 font-medium text-center bg-emerald-50 border border-emerald-100 py-5 rounded-2xl mt-4">
                  <span className="text-xl">🦋</span> {lang === 'en' ? "Your inquiry has been received. I'll be in touch." : "Talebiniz alındı. Yakında iletişime geçeceğim."}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* 05 CONSULTATION PROCESS */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-white relative overflow-hidden">
        <div className="w-[min(100%-32px,1000px)] mx-auto text-center mb-24 relative z-10">
          <h2 className="text-h2 mb-4">{lang === 'en' ? 'What Happens Next?' : 'Süreç Nasıl İşliyor?'}</h2>
          <p className="text-text-primary/60 font-light">{lang === 'en' ? 'The transformation journey.' : 'Dönüşüm yolculuğu.'}</p>
        </div>
        
        <div className="container-app relative z-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[1px] bg-brand-transformation/20 z-0"></div>
            {[
              { num: '01', state: 'Discovery', tr_state: 'Keşif', desc: lang === 'en' ? 'Understanding your product, goals, and challenges.' : 'Ürününüzü, hedeflerinizi ve zorluklarınızı anlamak.' },
              { num: '02', state: 'Strategy', tr_state: 'Strateji', desc: lang === 'en' ? 'Identifying opportunities for growth, clarity, and optimization.' : 'Büyüme, netlik ve optimizasyon fırsatlarını belirlemek.' },
              { num: '03', state: 'Transformation', tr_state: 'Dönüşüm', desc: lang === 'en' ? 'Designing scalable experiences that improve trust, engagement, and conversion.' : 'Güveni, etkileşimi ve dönüşümü artıran ölçeklenebilir deneyimler tasarlamak.' }
            ].map((p, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex-1 relative z-10 bg-white/60 border border-white backdrop-blur-xl shadow-xl shadow-dark/5 rounded-[2rem] p-8 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="text-[10px] font-bold text-brand-transformation tracking-[0.2em] uppercase mb-4">Step {p.num}</div>
                <h4 className="text-2xl font-serif italic text-text-primary mb-4 group-hover:text-brand-transformation transition-colors">{lang === 'en' ? p.state : p.tr_state}</h4>
                <p className="text-text-primary/60 font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 FINAL CTA */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-brand-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-brand-transformation/10 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="w-[min(100%-32px,1000px)] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-h2 mb-8">
              {lang === 'en' ? 'Your product doesn’t need more screens.' : 'Ürününüzün daha fazla ekrana ihtiyacı yok.'}<br/>
              <span className="text-brand-transformation italic font-serif opacity-90">{lang === 'en' ? 'It needs a smarter system.' : 'Daha akıllı bir sisteme ihtiyacı var.'}</span>
            </h2>
            
            <p className="text-xl text-white/60 font-light w-[min(100%-32px,850px)] mx-auto mb-12 leading-relaxed">
               {lang === 'en' ? 'Let\'s uncover the friction, simplify complexity, and design experiences that help your business grow.' : 'Gelin sürtünmeleri ortaya çıkaralım, karmaşıklığı basitleştirelim ve işinizin büyümesine yardımcı olacak deneyimler tasarlayalım.'}
            </p>

            <a href={`/${lang}/ux-audit`} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-sm font-bold text-brand-primary transition-all shadow-xl hover:-translate-y-1 hover:bg-gray-100">
              {lang === 'en' ? 'Book a Strategy Session' : 'Strateji Görüşmesi Planla'} <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

