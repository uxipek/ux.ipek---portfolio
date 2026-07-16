import { useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, BarChart3, TrendingUp, Users, Zap, Layout, Workflow, ShieldCheck, CheckCircle2, BrainCircuit } from "lucide-react";
import { useRef, useState } from "react";

function Counter({ from, to, prefix = "", suffix = "", duration = 2 }: { from: number, to: number, prefix?: string, suffix?: string, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, from, duration]);

  return <span ref={nodeRef}>{prefix}{count}{suffix}</span>;
}

export function AboutPage({ lang }: { lang: "en" | "tr" }) {  useEffect(() => { document.title = lang === "en" ? "About | UXIPEK" : "Hakkında | UXIPEK"; }, [lang]);
  return (
    <div className="bg-background w-full mt-[-80px] pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-x-0 top-[-10%] -z-10 transform-gpu overflow-hidden blur-3xl">
          <motion.div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container-app w-full relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-primary/5 shadow-sm text-xs font-bold uppercase tracking-widest text-brand-transformation mb-8">
              {lang === 'en' ? 'AI-Native UX Strategist' : 'Yapay Zeka Odaklı UX Strateji'}
            </div>
            
            <h1 className="text-h1 text-[clamp(2.5rem,5vw,4.75rem)] text-text-primary mb-6 mx-auto">
              {lang === 'en' ? 'Designing systems that scale businesses, ' : 'İşletmeleri ölçekleyen sistemler '}
              <span className="text-h1 text-text-primary mb-8 italic md:text-5xl lg:text-6xl">{lang === 'en' ? 'not just interfaces.' : 'sadece arayüz değil.'}</span>
            </h1>
            
            <p className="text-h3 text-text-primary mb-12 max-w-2xl">
              {lang === 'en' 
                ? 'I combine UX strategy, behavioral psychology, AI workflows, and conversion thinking to build digital products users trust and businesses grow from.' 
                : 'Kullanıcıların güvendiği ve işletmelerin büyüdüğü dijital ürünler inşa etmek için UX stratejisi, davranışsal psikoloji ve yapay zeka akışlarını birleştiriyorum.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href={`/${lang}/ux-audit`} className="btn-primary-pink w-full sm:w-auto flex text-[0.9375rem]">
                {lang === 'en' ? 'Schedule a Strategy Call' : 'Strateji Görüşmesi Planla'} <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-sm font-medium text-text-primary/50 italic px-4">
                "Design with kindness."
              </p>
            </div>
          </motion.div>

          {/* Floating UI Elements / Dashboard Aesthetic */}
          <div className="flex-1 w-full relative h-[400px] lg:h-[500px] hidden md:block">
            <motion.div 
               initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
               className="absolute top-10 right-10 bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-2xl shadow-dark/5 w-64"
            >
               <div className="flex justify-between items-center mb-4">
                 <div className="w-10 h-10 rounded-full bg-brand-transformation/10 flex items-center justify-center text-brand-transformation"><TrendingUp size={20}/></div>
                 <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">+42%</span>
               </div>
               <p className="text-xs font-bold text-text-primary/40 uppercase tracking-wider mb-1">{lang === 'en' ? 'Conversion Clarity' : 'Dönüşüm Netliği'}</p>
               <p className="text-2xl font-semibold text-text-primary font-mono"><Counter from={0} to={85} suffix="%" duration={2.5}/></p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
               className="absolute bottom-10 left-10 bg-brand-primary text-white p-6 rounded-[2rem] shadow-2xl shadow-brand-primary/20 w-72"
            >
               <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><ShieldCheck size={24}/></div>
                  <div>
                    <p className="text-xl font-medium"><Counter from={0} to={2.4} suffix="x" duration={3}/></p>
                    <p className="text-xs text-white/50">{lang === 'en' ? 'Faster Activation' : 'Daha Hızlı Aktivasyon'}</p>
                  </div>
               </div>
               <div className="mt-6 h-2 bg-white/10 rounded-full overflow-hidden">
                 <motion.div initial={{ width: "0%" }} animate={{ width: "70%" }} transition={{ duration: 2, delay: 1 }} className="h-full bg-brand-secondary rounded-full"></motion.div>
               </div>
            </motion.div>
            
            {/* Minimal Decorative Butterfly element */}
            <motion.div 
               animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl opacity-80"
            >
              🦋
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS IMPACT METRICS SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <svg viewBox="0 0 1000 1000" className="w-[120%] h-[120%] -ml-40 -mt-20 text-brand-secondary">
              <path d="M -10 -20 C -100 -250 -350 -400 -450 -300 C -500 -200 -480 -50 -350 100 C -200 200 -50 80 -10 -20 Z" fill="currentColor" stroke="none" opacity="0.3"/>
           </svg>
        </div>
        
        <div className="container-app relative z-10">
          <div className="text-center mb-20 w-[min(100%-32px,850px)] mx-auto">
            <h2 className="text-h2 mb-6">
              {lang === 'en' ? 'Measurable UX Impact' : 'Ölçülebilir UX Etkisi'}
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              {lang === 'en' ? 'Transforming arbitrary design decisions into robust conversion machines and scalable data-driven success.' : 'Sıradan tasarım kararlarını sağlam dönüşüm makinelerine ve veriye dayalı başarıya dönüştürmek.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: lang === 'en' ? 'Conversion Clarity' : 'Dönüşüm Netliği', val: 42, prefix: "+", suffix: "%", trend: "up" },
              { label: lang === 'en' ? 'User Friction' : 'Kullanıcı Sürtünmesi', val: 31, prefix: "-", suffix: "%", trend: "down" },
              { label: lang === 'en' ? 'Engagement' : 'Etkileşim', val: 58, prefix: "+", suffix: "%", trend: "up" },
              { label: lang === 'en' ? 'User Activation' : 'Kullanıcı Aktivasyonu', val: 2.4, prefix: "", suffix: "x", trend: "up" },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-medium text-white mb-4 font-mono">
                  <Counter from={0} to={metric.val} prefix={metric.prefix} suffix={metric.suffix} duration={2 + i * 0.2}/>
                </div>
                <div className="text-sm font-light text-white/60 tracking-wide uppercase">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MY APPROACH SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-white relative">
        <div className="container-app ">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-h1 text-text-primary mb-8 md:text-5xl lg:text-6xl mb-8">
                {lang === 'en' ? 'Good UX is not decoration.' : 'İyi UX dekorasyon değildir.'}<br/>
                <span className="text-brand-transformation">{lang === 'en' ? "It's behavioral architecture." : "Davranışsal mimaridir."}</span>
              </h2>
              <p className="text-lg md:text-xl text-text-primary/70 font-light leading-relaxed mb-8">
                {lang === 'en'
                  ? 'Building an interface is easy. Building a scalable digital ecosystem that actively influences human behavior, increases trust, and maximizes conversion requires deep strategic thinking.'
                  : 'Arayüz tasarlamak kolaydır. İnsan davranışını etkileyen, güveni artıran ve dönüşümü en üst düzeye çıkaran ölçeklenebilir bir dijital ekosistem kurmak ise derin stratejik düşünce gerektirir.'}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "AI-Native Product Thinking",
                "Growth Systems",
                "Behavioral UX",
                "Trust-Driven Interfaces",
                "Conversion-Focused Design",
                "Scalable Digital Ecosystems"
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-2xl p-6 border border-brand-primary/5 flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-brand-transformation shrink-0"></div>
                  <span className="text-sm font-semibold text-text-primary/80 leading-snug">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BUTTERFLY TRANSFORMATION SYSTEM */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-background relative border-t border-brand-primary/5">
        <div className="w-[min(100%-32px,1000px)] mx-auto text-center mb-20">
          <span className="text-xs font-bold text-brand-transformation tracking-[0.2em] uppercase mb-4 block">
            {lang === 'en' ? 'Transformation Ecosystem' : 'Dönüşüm Ekosistemi'}
          </span>
          <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary">The Butterfly Model</h2>
        </div>
        
        <div className="container-app ">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[1px] bg-brand-primary/10 z-0 border-dashed border-b border-brand-primary/20"></div>

            {[
              { label: 'Phase 01', state: 'Tırtıl', title: lang === 'en' ? 'Discovery & Friction' : 'Keşif ve Sürtünme', desc: lang === 'en' ? 'Understanding hidden UX problems and behavioral drop-offs.' : 'Gizli UX problemlerini ve davranışsal düşüşleri anlamak.', icon: '🐛' },
              { label: 'Phase 02', state: 'Koza', title: lang === 'en' ? 'System Architecture' : 'Sistem Mimarisi', desc: lang === 'en' ? 'Designing scalable flows, structures, and AI-supported experiences.' : 'Ölçeklenebilir akışlar, yapılar ve AI destekli deneyimler tasarlamak.', icon: '🪹' },
              { label: 'Phase 03', state: 'Kelebek', title: lang === 'en' ? 'Growth Transformation' : 'Büyüme Dönüşümü', desc: lang === 'en' ? 'Optimizing conversion, trust, onboarding, and long-term retention.' : 'Dönüşüm, güven, katılım ve uzun vadeli kalıcılığı optimize etmek.', icon: '🦋' }
            ].map((p, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex-1 relative z-10 bg-white border border-brand-primary/5 shadow-xl shadow-dark/5 rounded-[2rem] p-8 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="text-4xl mb-6 opacity-80 group-hover:scale-110 transition-transform origin-bottom-left">{p.icon}</div>
                <div className="text-[10px] font-bold text-text-primary/40 tracking-widest uppercase mb-2">{p.label} — {p.state}</div>
                <h4 className="text-h3 text-text-primary mb-4">{p.title}</h4>
                <p className="text-text-primary/60 font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE / EXPERTISE SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-white relative">
        <div className="container-app ">
          <div className="text-center mb-20 w-[min(100%-32px,850px)] mx-auto">
            <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary mb-6">
              {lang === 'en' ? 'Expertise & Capabilities' : 'Uzmanlıklar ve Yetenekler'}
            </h2>
            <p className="text-body-lg text-text-primary/70 max-w-[680px]">
              {lang === 'en' 
                ? 'Strategic consultation and design execution aimed at measurable outcomes.' 
                : 'Ölçülebilir sonuçları hedefleyen stratejik danışmanlık ve tasarım uygulamaları.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: Layout, title: "SaaS UX" },
              { icon: BrainCircuit, title: "AI Product Design" },
              { icon: TrendingUp, title: "CRO & Conversion Systems" },
              { icon: ShieldCheck, title: "UX Audits" },
              { icon: Users, title: "Behavioral Design" },
              { icon: Workflow, title: "Funnel Optimization" },
              { icon: Zap, title: "CRM-integrated Experiences" },
              { icon: CheckCircle2, title: "Multilingual UX Communication" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-background text-brand-transformation flex items-center justify-center mb-6 shadow-inner">
                   <item.icon strokeWidth={1.5} size={28}/>
                </div>
                <h4 className="text-base font-semibold leading-[1.65] text-text-primary max-w-[150px]">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-brand-primary text-center relative overflow-hidden">
        {/* Soft animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-transformation/20 blur-[100px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="w-[min(100%-32px,850px)] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-h2 mb-8">
              {lang === 'en' ? 'Your product doesn’t need more screens.' : 'Ürününüzün daha fazla ekrana ihtiyacı yok.'}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-transformation to-brand-secondary">{lang === 'en' ? 'It needs smarter systems.' : 'Düşünen sistemlere ihtiyacı var.'}</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a href={`/${lang}/ux-audit`} className="btn-primary-pink w-full sm:w-auto hover:shadow-xl">
                {lang === 'en' ? 'Book a UX Audit' : 'UX Randevusu Al'} <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href={`/${lang}/ux-audit`} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-[48px] px-6 rounded-2xl bg-transparent border border-white/20 text-white text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 focus-visible:ring-4 focus-visible:ring-white/20">
                {lang === 'en' ? 'Schedule a Strategy Call' : 'Strateji Görüşmesi Planla'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
