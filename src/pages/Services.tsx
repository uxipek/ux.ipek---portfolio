import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Search, Play, FileText, Component, BrainCircuit, LineChart } from "lucide-react";

export function ServicesPage({ lang }: { lang: "en" | "tr" }) {  useEffect(() => { document.title = lang === "en" ? "Services | UXIPEK" : "Hizmetler | UXIPEK"; }, [lang]);
  return (
    <div className="bg-background w-full mt-[-80px] pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Soft animated gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <motion.div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-transformation/20 to-brand-secondary/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="w-[min(100%-32px,1000px)] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-primary/5 shadow-sm text-xs font-bold uppercase tracking-widest text-text-primary/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-transformation"></span>
              UX.IPEK SERVICES
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-text-primary mb-8 leading-[1.05]">
              {lang === 'en' ? 'Growth Systems for ' : 'Yapay Zeka Odaklı '}<br className="hidden md:block" />
              <span className="text-brand-transformation font-semibold">{lang === 'en' ? 'AI-Native Digital Products' : 'Dijital Ürün Büyüme Sistemleri'}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-text-primary/60 w-[min(100%-32px,850px)] mx-auto leading-relaxed mb-12">
              {lang === 'en' 
                ? 'AI-powered UX systems designed to increase clarity, trust, and conversion.' 
                : 'Netlik, güven ve dönüşümü artırmak için tasarlanmış, yapay zeka destekli UX sistemleri.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`/${lang}/ux-audit`} className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-brand-primary px-8 py-4 text-sm font-bold text-white transition-all shadow-[0_8px_30px_rgb(30,41,59,0.2)] hover:shadow-[0_8px_40px_rgb(30,41,59,0.4)] hover:-translate-y-1">
                {lang === 'en' ? 'Book UX Audit' : 'UX Randevusu Al'} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://www.behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 min-h-[48px] px-6 rounded-2xl bg-white border border-brand-primary/10 text-brand-primary text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-background focus-visible:ring-4 focus-visible:ring-brand-primary/10 shadow-sm">
                {lang === 'en' ? 'View Case Studies' : 'Vaka Çalışmalarını İncele'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container-app ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between rounded-[2rem] bg-background p-10 transition-all hover:-translate-y-1 hover:shadow-xl border border-brand-primary/5 hover:border-brand-transformation/20"
            >
              <div>
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-text-primary shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-transformation">
                  <Search className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="mb-4 text-2xl font-medium text-text-primary">{lang === 'en' ? 'UX & Conversion Strategy' : 'UX & Dönüşüm Stratejisi'}</h3>
                <p className="font-light leading-relaxed text-text-primary/70 mb-8">
                  {lang === 'en' 
                    ? 'Analyze user behavior, friction points, and trust gaps to transform digital experiences into scalable conversion systems.' 
                    : 'Kullanıcı davranışlarını ve sürtünme noktalarını analiz ederek dijital deneyimleri dönüşüm sistemlerine çevirir.'}
                </p>
                <ul className="space-y-3 mb-8">
                  {['UX Audits', 'Behavioral UX', 'CRO Optimization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-primary/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-transformation"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col justify-between rounded-[2rem] bg-brand-primary text-white p-10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/20"
            >
              <div>
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md text-white transition-transform duration-500 group-hover:scale-105 group-hover:bg-white group-hover:text-brand-primary">
                  <BrainCircuit className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="mb-4 text-2xl font-medium">{lang === 'en' ? 'AI-Native Product Design' : 'Yapay Zeka Destekli Ürün Tasarımı'}</h3>
                <p className="font-light leading-relaxed text-white/70 mb-8">
                  {lang === 'en'
                    ? 'Design scalable SaaS and AI-driven product experiences focused on usability, automation, and growth.'
                    : 'Kullanılabilirlik, otomasyon ve büyüme odaklı yapay zeka entegreli SaaS ürünleri tasarlar.'}
                </p>
                <ul className="space-y-3 mb-8">
                  {['SaaS UX Architecture', 'AI Workflow Interfaces', 'Design Systems'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 border border-white/20"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex flex-col justify-between rounded-[2rem] bg-background p-10 transition-all hover:-translate-y-1 hover:shadow-xl border border-brand-primary/5 hover:border-purple/20"
            >
              <div>
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-text-primary shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-secondary">
                  <LineChart className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="mb-4 text-2xl font-medium text-text-primary">{lang === 'en' ? 'Landing Pages & Growth Funnels' : 'Açılış Sayfaları ve Büyüme Hunileri'}</h3>
                <p className="font-light leading-relaxed text-text-primary/70 mb-8">
                  {lang === 'en'
                    ? 'Create conversion-focused landing experiences optimized for acquisition, activation, and customer trust.'
                    : 'Müşteri kazanımı, aktivasyon ve güven için optimize edilmiş dönüşüm odaklı deneyimler yaratır.'}
                </p>
                <ul className="space-y-3 mb-8">
                  {['Funnel Design', 'CRM Integration', 'Growth Messaging'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-primary/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-background relative border-t border-brand-primary/5">
        <div className="w-[min(100%-32px,1000px)] mx-auto text-center mb-20">
          <span className="text-xs font-bold text-text-primary/40 tracking-[0.2em] uppercase mb-4 block">Transformation Framework</span>
          <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary">The Butterfly Methodology</h2>
        </div>
        
        <div className="container-app ">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[1px] bg-brand-primary/10 z-0"></div>

            {[
              { phase: "01", stage: lang === 'en' ? 'Friction & Discovery' : 'Sürtünme & Keşif', desc: lang === 'en' ? 'Research, friction mapping, and behavioral analysis to find the drop-offs.' : 'Düşüşleri bulmak için araştırma, sürtünme haritalaması ve analiz.', icon: '🦋' },
              { phase: "02", stage: lang === 'en' ? 'System Thinking' : 'Sistem Düşüncesi', desc: lang === 'en' ? 'Information architecture, AI-supported flows, and structural UX strategy.' : 'Bilgi mimarisi, yapay zeka destekli akışlar ve UX stratejisi.', icon: '🦋' },
              { phase: "03", stage: lang === 'en' ? 'Growth & Transformation' : 'Büyüme & Dönüşüm', desc: lang === 'en' ? 'Conversion optimization, trust systems, and scalable user experiences.' : 'Dönüşüm optimizasyonu, güven sistemleri ve ölçeklenebilir deneyimler.', icon: '🦋' }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex-1 relative z-10 bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
              >
                <div className="text-[10px] font-bold text-brand-transformation tracking-widest uppercase mb-6">Phase {p.phase}</div>
                <h4 className="text-h3 text-text-primary mb-4">{p.stage}</h4>
                <p className="text-text-primary/60 font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%] -ml-40 -mt-20 text-brand-transformation">
              <path d="M -10 -20 C -100 -250 -350 -400 -450 -300 C -500 -200 -480 -50 -350 100 C -200 200 -50 80 -10 -20 Z" fill="currentColor" stroke="none" opacity="0.3"/>
           </svg>
        </div>
        
        <div className="w-[min(100%-32px,1000px)] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 italic mb-8">“Design is not decoration.<br/>It is transformation.”</h2>
            <p className="text-xl md:text-2xl text-white/70 font-light w-[min(100%-32px,850px)] mx-auto leading-relaxed">
              {lang === 'en' 
                ? 'I architect digital systems where UX strategy, AI workflows, behavioral psychology, and business growth meet to create seamless products.' 
                : 'UX stratejisi, yapay zeka akışları, davranışsal psikoloji ve stratejik iş büyümesini bir araya getirerek sistemler kuruyorum.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-white text-center">
        <div className="w-[min(100%-32px,850px)] mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-h2 mb-8">
              {lang === 'en' ? 'Your product doesn’t need more screens.' : 'Ürününüzün daha fazla ekrana ihtiyacı yok.'}<br/>
              <span className="text-brand-transformation">{lang === 'en' ? 'It needs a smarter system.' : 'Daha akıllı bir sisteme ihtiyacı var.'}</span>
            </h2>
            <a href={`/${lang}/ux-audit`} className="btn-primary-pink w-full sm:w-auto text-base hover:shadow-xl mt-8">
              {lang === 'en' ? 'Book a Strategy Call' : 'Strateji Görüşmesi Planla'} <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
