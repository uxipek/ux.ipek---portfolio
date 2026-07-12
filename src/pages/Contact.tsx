import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, Linkedin, Instagram, Dribbble, PenTool, LayoutTemplate, Briefcase, Zap, BarChart3, LineChart } from "lucide-react";
import React, { useState } from "react";

export function ContactPage({ lang }: { lang: "en" | "tr" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#FDFBF8] w-full mt-[-80px] pt-20 min-h-screen">
      {/* 01 HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-[120px]">
          <motion.div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ca006c]/20 to-purple/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-sm border border-dark/5 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#ca006c] mb-8">
              {lang === 'en' ? 'Start a Conversation' : 'İletişime Geçin'}
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-dark mb-8 leading-[1.05]">
              {lang === 'en' ? 'Let\'s Build a Smarter ' : 'Daha Akıllı Bir Büyüme '}<br className="hidden md:block" />
              <span className="text-[#1E293B] italic font-serif opacity-80">{lang === 'en' ? 'Growth System.' : 'Sistemi Kuralım.'}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-dark/70 max-w-3xl mx-auto leading-relaxed mb-12">
              {lang === 'en' 
                ? 'Whether you\'re launching a new product, optimizing conversions, improving user experience, or building an AI-powered platform, let\'s create digital experiences people trust and businesses grow from.' 
                : 'Yeni bir ürün piyasaya sürüyor, dönüşümleri optimize ediyor, kullanıcı deneyimini iyileştiriyor veya yapay zeka destekli bir platform oluşturuyor olun; insanların güvendiği ve işlerin büyüdüğü dijital deneyimler yaratalım.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/ux-audit" className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-[#1E293B] px-8 py-4 text-sm font-bold text-white transition-all shadow-[0_8px_30px_rgb(30,41,59,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgb(30,41,59,0.4)]">
                {lang === 'en' ? 'Book a UX Audit' : 'UX Randevusu Al'} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="/ux-audit" className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl border border-dark/10 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-white hover:-translate-y-1 shadow-sm">
                {lang === 'en' ? 'Schedule a Strategy Call' : 'Strateji Görüşmesi Planla'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 WHY REACH OUT? */}
      <section className="px-6 py-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium tracking-tight text-dark mb-4">{lang === 'en' ? 'How I Can Help' : 'Nasıl Yardımcı Olabilirim?'}</h2>
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
                className="group flex items-start gap-6 bg-[#FDFBF8] p-10 rounded-[2rem] border border-dark/5 hover:border-[#ca006c]/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-dark/5 flex items-center justify-center text-dark/40 group-hover:text-[#ca006c] group-hover:scale-105 transition-all shadow-sm">
                   <s.icon strokeWidth={1.5} size={28}/>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#ca006c] tracking-widest uppercase mb-2">{s.num}</div>
                  <h3 className="text-xl font-medium text-dark mb-3">{s.title}</h3>
                  <p className="text-dark/60 font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 CONTACT EXPERIENCE */}
      <section className="px-6 py-32 bg-[#F8F7F4] relative border-t border-dark/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-dark mb-6">
              {lang === 'en' ? 'Start the Conversation' : 'Bağlantı Kurun'}
            </h2>
            <p className="text-xl text-dark/60 font-light mb-12 max-w-md leading-relaxed">
              {lang === 'en' ? 'I personally review every inquiry and respond within 1–2 business days.' : 'Her talebi bizzat inceliyor ve 1-2 iş günü içinde geri dönüş yapıyorum.'}
            </p>
            
            {/* 04 CONNECT (Moved inside left column for layout elegance) */}
            <h3 className="text-[11px] font-bold text-dark/40 tracking-[0.2em] uppercase mb-6">{lang === 'en' ? 'Connect Beyond Email' : 'Diğer Platformlar'}</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://linkedin.com/in/ipek-bolakca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-dark/5 shadow-sm hover:border-blue-500/30 hover:shadow-md transition-all group">
                <Linkedin size={20} className="text-[#0A66C2] group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-dark">LinkedIn</span>
              </a>
              <a href="https://behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-dark/5 shadow-sm hover:border-[#1769FF]/30 hover:shadow-md transition-all group">
                <PenTool size={20} className="text-[#1769FF] group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-dark">Behance</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-dark/5 shadow-sm hover:border-dark/30 hover:shadow-md transition-all group">
                 <Briefcase size={20} className="text-dark group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-dark">Medium</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-dark/5 shadow-sm hover:border-pink-500/30 hover:shadow-md transition-all group">
                 <Instagram size={20} className="text-pink-600 group-hover:scale-110 transition-transform"/> <span className="text-sm font-medium text-dark">Instagram</span>
              </a>
            </div>
            
            <div className="mt-12 p-8 bg-white/50 backdrop-blur-md rounded-3xl border border-white">
              <p className="text-[11px] font-bold text-dark/40 tracking-wider uppercase mb-2">{lang === 'en' ? 'Direct Email' : 'E-posta'}</p>
              <a href="mailto:uxdesigneripek@gmail.com" className="text-xl font-medium text-[#ca006c] hover:underline">uxdesigneripek@gmail.com</a>
              {/* <a href="mailto:hello@uxipek.com" className="block text-sm text-dark/50 mt-2">hello@uxipek.com</a> */}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-dark/5 shadow-2xl shadow-dark/5 relative">
            <div className="absolute -top-6 -right-6 text-6xl opacity-20 hidden md:block">🦋</div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/50 mb-3">{lang === 'en' ? 'Name' : 'İsim'}</label>
                  <input required type="text" className="w-full px-5 py-4 bg-[#F8F7F4] border border-dark/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ca006c]/30 text-dark placeholder:text-dark/20 transition-all font-medium" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/50 mb-3">{lang === 'en' ? 'Company' : 'Şirket'}</label>
                  <input type="text" className="w-full px-5 py-4 bg-[#F8F7F4] border border-dark/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ca006c]/30 text-dark placeholder:text-dark/20 transition-all font-medium" placeholder="Acme Inc." />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/50 mb-3">{lang === 'en' ? 'Email Address' : 'E-posta Adresi'}</label>
                <input required type="email" className="w-full px-5 py-4 bg-[#F8F7F4] border border-dark/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ca006c]/30 text-dark placeholder:text-dark/20 transition-all font-medium" placeholder="hello@company.com" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/50 mb-3">{lang === 'en' ? 'Website (Optional)' : 'Web Sitesi (Opsiyonel)'}</label>
                    <input type="url" className="w-full px-5 py-4 bg-[#F8F7F4] border border-dark/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ca006c]/30 text-dark placeholder:text-dark/20 transition-all font-medium" placeholder="https://" />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/50 mb-3">{lang === 'en' ? 'Project Type' : 'Proje Türü'}</label>
                    <select className="w-full px-5 py-4 bg-[#F8F7F4] border border-dark/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ca006c]/30 text-dark transition-all font-medium appearance-none">
                       <option>{lang === 'en' ? 'UX Audit' : 'UX Analizi'}</option>
                       <option>{lang === 'en' ? 'SaaS Product Design' : 'SaaS Ürün Tasarımı'}</option>
                       <option>{lang === 'en' ? 'Landing Page' : 'Açılış Sayfası'}</option>
                       <option>{lang === 'en' ? 'AI Interface Design' : 'Yapay Zeka Arayüzü'}</option>
                       <option>{lang === 'en' ? 'Consultancy' : 'Danışmanlık'}</option>
                    </select>
                 </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/50 mb-3">{lang === 'en' ? 'Budget Range' : 'Bütçe Aralığı'}</label>
                <select className="w-full px-5 py-4 bg-[#F8F7F4] border border-dark/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ca006c]/30 text-dark transition-all font-medium appearance-none">
                   <option>$1k - $3k</option>
                   <option>$3k - $10k</option>
                   <option>$10k+</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/50 mb-3">{lang === 'en' ? 'Message' : 'Mesaj'}</label>
                <textarea required rows={4} className="w-full px-5 py-5 bg-[#F8F7F4] border border-dark/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ca006c]/30 text-dark placeholder:text-dark/20 transition-all resize-none font-medium" placeholder={lang === 'en' ? 'Tell me about your product challenges...' : 'Ürün pürüzlerinden bahsedin...'}></textarea>
              </div>
              
              <button disabled={isSubmitting} type="submit" className="w-full flex items-center justify-center gap-3 bg-[#1E293B] text-white px-8 py-5 rounded-2xl font-bold hover:bg-[#1E293B]/90 transition-all shadow-lg shadow-dark/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (lang === 'en' ? 'Sending...' : 'Gönderiliyor...') : (lang === 'en' ? 'Send Inquiry' : 'Talebi Gönder')}
                <ArrowRight className="w-5 h-5" />
              </button>

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
      <section className="px-6 py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-dark mb-4">{lang === 'en' ? 'What Happens Next?' : 'Süreç Nasıl İşliyor?'}</h2>
          <p className="text-dark/60 font-light">{lang === 'en' ? 'The transformation journey.' : 'Dönüşüm yolculuğu.'}</p>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[1px] bg-[#ca006c]/20 z-0"></div>
            {[
              { num: '01', state: 'Discovery', tr_state: 'Keşif', desc: lang === 'en' ? 'Understanding your product, goals, and challenges.' : 'Ürününüzü, hedeflerinizi ve zorluklarınızı anlamak.' },
              { num: '02', state: 'Strategy', tr_state: 'Strateji', desc: lang === 'en' ? 'Identifying opportunities for growth, clarity, and optimization.' : 'Büyüme, netlik ve optimizasyon fırsatlarını belirlemek.' },
              { num: '03', state: 'Transformation', tr_state: 'Dönüşüm', desc: lang === 'en' ? 'Designing scalable experiences that improve trust, engagement, and conversion.' : 'Güveni, etkileşimi ve dönüşümü artıran ölçeklenebilir deneyimler tasarlamak.' }
            ].map((p, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex-1 relative z-10 bg-white/50 backdrop-blur-xl p-8 rounded-[2rem] border border-dark/5 shadow-xl shadow-dark/5 text-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-[10px] font-bold text-[#ca006c] tracking-[0.2em] uppercase mb-4">Step {p.num}</div>
                <h4 className="text-2xl font-serif italic text-dark mb-4 group-hover:text-[#ca006c] transition-colors">{lang === 'en' ? p.state : p.tr_state}</h4>
                <p className="text-dark/60 font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 FINAL CTA */}
      <section className="px-6 py-32 bg-[#1E293B] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#ca006c]/10 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
              {lang === 'en' ? 'Your product doesn’t need more screens.' : 'Ürününüzün daha fazla ekrana ihtiyacı yok.'}<br/>
              <span className="text-[#ca006c] italic font-serif opacity-90">{lang === 'en' ? 'It needs a smarter system.' : 'Daha akıllı bir sisteme ihtiyacı var.'}</span>
            </h2>
            
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
               {lang === 'en' ? 'Let\'s uncover the friction, simplify complexity, and design experiences that help your business grow.' : 'Gelin sürtünmeleri ortaya çıkaralım, karmaşıklığı basitleştirelim ve işinizin büyümesine yardımcı olacak deneyimler tasarlayalım.'}
            </p>

            <a href="/ux-audit" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-sm font-bold text-[#1E293B] transition-all shadow-xl hover:-translate-y-1 hover:bg-gray-100">
              {lang === 'en' ? 'Book a Strategy Session' : 'Strateji Görüşmesi Planla'} <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

