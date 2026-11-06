import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, BarChart3, TrendingUp, Users, Zap, Layout, Workflow, ShieldCheck, CheckCircle2, BrainCircuit } from "lucide-react";
import { uxAuditPath } from '../lib/paths';

const CAL_COM_URL = "https://cal.com/ipek-bolakca-s41eqm/ucretsiz-ux-audit";

export function AboutPage({ lang }: { lang: "en" | "tr" }) {
  return (
    <div className="bg-background w-full mt-[-80px] pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-x-0 top-[-10%] -z-10 transform-gpu overflow-hidden blur-3xl">
          <motion.div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/10 to-accent/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-primary/5 shadow-sm text-caption font-bold uppercase tracking-widest text-accent mb-8">
              {lang === 'en' ? 'AI-Native UX Strategist' : 'Yapay Zeka Odaklı UX Strateji'}
            </div>
            
            <h1 className="text-h1 text-display text-ink mb-6 mx-auto">
              {lang === 'en' ? 'Designing systems that scale businesses, ' : 'İşletmeleri ölçekleyen sistemler '}
              <span className="text-h1 text-ink mb-8 italic md:text-title lg:text-display">{lang === 'en' ? 'not just interfaces.' : 'sadece arayüz değil.'}</span>
            </h1>
            
            <p className="text-h3 text-ink mb-12 max-w-2xl">
              {lang === 'en' 
                ? 'I combine UX strategy, behavioral psychology, AI workflows, and conversion thinking to build digital products users trust and businesses grow from.' 
                : 'Kullanıcıların güvendiği ve işletmelerin büyüdüğü dijital ürünler inşa etmek için UX stratejisi, davranışsal psikoloji ve yapay zeka akışlarını birleştiriyorum.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-pink w-full sm:w-auto flex text-body">
                {lang === 'en' ? 'Book a 15-Min Call' : '15 Dakikalık Görüşme Planla'} <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-small font-medium text-ink-muted italic px-4">
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
               <div className="mb-4">
                 <div className="w-10 h-10 rounded-full bg-brand-transformation/10 flex items-center justify-center text-accent"><TrendingUp size={20}/></div>
               </div>
               <p className="text-caption font-bold text-ink-muted uppercase tracking-wider mb-1">{lang === 'en' ? 'Focus' : 'Odak'}</p>
               <p className="text-lead font-semibold text-ink">{lang === 'en' ? 'Conversion & Trust' : 'Dönüşüm ve Güven'}</p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
               className="absolute bottom-10 left-10 bg-brand-primary text-white p-6 rounded-[2rem] shadow-2xl shadow-brand-primary/20 w-72"
            >
               <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><ShieldCheck size={24}/></div>
                  <div>
                    <p className="text-lead font-medium">TR · EN · DE</p>
                    <p className="text-caption text-on-ink-muted">{lang === 'en' ? 'Working Languages' : 'Çalışma Dilleri'}</p>
                  </div>
               </div>
            </motion.div>
            
            {/* Minimal Decorative Butterfly element */}
            <motion.div 
               animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-title opacity-80"
            >
              🦋
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MY APPROACH SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-white relative">
        <div className="container-app ">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-h1 text-ink mb-8 md:text-title lg:text-display mb-8">
                {lang === 'en' ? 'Good UX is not decoration.' : 'İyi UX dekorasyon değildir.'}<br/>
                <span className="text-accent">{lang === 'en' ? "It's behavioral architecture." : "Davranışsal mimaridir."}</span>
              </h2>
              <p className="text-lead text-ink-muted font-normal leading-relaxed mb-8">
                {lang === 'en'
                  ? 'Building an interface is easy. Building a scalable digital ecosystem that actively influences human behavior, increases trust, and maximizes conversion requires deep strategic thinking.'
                  : 'Arayüz tasarlamak kolaydır. İnsan davranışını etkileyen, güveni artıran ve dönüşümü en üst düzeye çıkaran ölçeklenebilir bir dijital ekosistem kurmak ise derin stratejik düşünce gerektirir.'}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(lang === 'en' ? [
                "AI-Native Product Thinking",
                "Growth Systems",
                "Behavioral UX",
                "Trust-Driven Interfaces",
                "Conversion-Focused Design",
                "Scalable Digital Ecosystems"
              ] : [
                "Yapay Zeka Odaklı Ürün Düşüncesi",
                "Büyüme Sistemleri",
                "Davranışsal UX",
                "Güven Odaklı Arayüzler",
                "Dönüşüm Odaklı Tasarım",
                "Ölçeklenebilir Dijital Ekosistemler"
              ]).map((item, i) => (
                <div key={i} className="bg-background rounded-2xl p-6 border border-brand-primary/5 flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-brand-transformation shrink-0"></div>
                  <span className="text-small font-semibold text-ink leading-snug">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BUTTERFLY TRANSFORMATION SYSTEM */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-background relative border-t border-brand-primary/5">
        <div className="w-[min(100%-32px,1000px)] mx-auto text-center mb-20">
          <span className="text-caption font-bold text-accent tracking-[0.2em] uppercase mb-4 block">
            {lang === 'en' ? 'How I Work' : 'Çalışma Modelim'}
          </span>
          <h2 className="text-h2 text-title text-ink">{lang === 'en' ? 'The Butterfly Model' : 'Kelebek Modeli'}</h2>
        </div>
        
        <div className="container-app ">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[1px] bg-brand-primary/10 z-0 border-dashed border-b border-brand-primary/20"></div>

            {[
              { label: lang === 'en' ? 'Phase 01' : 'Aşama 01', state: lang === 'en' ? 'Caterpillar' : 'Tırtıl', title: lang === 'en' ? 'Friction & Discovery' : 'Sürtünme ve Keşif', desc: lang === 'en' ? 'Understanding hidden UX problems and behavioral drop-offs.' : 'Gizli UX problemlerini ve davranışsal düşüşleri anlamak.', icon: '🐛' },
              { label: lang === 'en' ? 'Phase 02' : 'Aşama 02', state: lang === 'en' ? 'Cocoon' : 'Koza', title: lang === 'en' ? 'Strategy & System Design' : 'Strateji ve Sistem Kurgusu', desc: lang === 'en' ? 'Designing scalable flows, structures, and AI-supported experiences.' : 'Ölçeklenebilir akışlar, yapılar ve AI destekli deneyimler tasarlamak.', icon: '🪹' },
              { label: lang === 'en' ? 'Phase 03' : 'Aşama 03', state: lang === 'en' ? 'Butterfly' : 'Kelebek', title: lang === 'en' ? 'Growth & Transformation' : 'Büyüme ve Dönüşüm', desc: lang === 'en' ? 'Optimizing conversion, trust, onboarding, and long-term retention.' : 'Dönüşüm, güven, katılım ve uzun vadeli kalıcılığı optimize etmek.', icon: '🦋' }
            ].map((p, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex-1 relative z-10 bg-white border border-brand-primary/5 shadow-xl shadow-dark/5 rounded-[2rem] p-8 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="text-title mb-6 opacity-80 group-hover:scale-110 transition-transform origin-bottom-left">{p.icon}</div>
                <div className="text-caption font-bold text-ink-muted tracking-widest uppercase mb-2">{p.label} — {p.state}</div>
                <h3 className="text-h3 text-ink mb-4">{p.title}</h3>
                <p className="text-ink-muted font-normal leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE / EXPERTISE SECTION */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-white relative">
        <div className="container-app ">
          <div className="text-center mb-20 w-[min(100%-32px,850px)] mx-auto">
            <h2 className="text-h2 text-title text-ink mb-6">
              {lang === 'en' ? 'Expertise & Capabilities' : 'Uzmanlıklar ve Yetenekler'}
            </h2>
            <p className="text-body-lg text-ink-muted max-w-[56ch]">
              {lang === 'en' 
                ? 'Strategic consultation and design execution aimed at measurable outcomes.' 
                : 'Ölçülebilir sonuçları hedefleyen stratejik danışmanlık ve tasarım uygulamaları.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: Layout, title: "SaaS UX" },
              { icon: BrainCircuit, title: lang === 'en' ? "AI Product Design" : "Yapay Zeka Ürün Tasarımı" },
              { icon: TrendingUp, title: lang === 'en' ? "CRO & Conversion Systems" : "CRO ve Dönüşüm Sistemleri" },
              { icon: ShieldCheck, title: lang === 'en' ? "UX Audits" : "UX Analizleri" },
              { icon: Users, title: lang === 'en' ? "Behavioral Design" : "Davranışsal Tasarım" },
              { icon: Workflow, title: lang === 'en' ? "Funnel Optimization" : "Huni Optimizasyonu" },
              { icon: Zap, title: lang === 'en' ? "CRM-integrated Experiences" : "CRM Entegre Deneyimler" },
              { icon: CheckCircle2, title: lang === 'en' ? "Multilingual UX Communication" : "Çok Dilli UX İletişimi" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-background text-accent flex items-center justify-center mb-6 shadow-inner">
                   <item.icon strokeWidth={1.5} size={28}/>
                </div>
                <h3 className="text-body font-semibold leading-[1.65] text-ink max-w-[150px]">{item.title}</h3>
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
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="w-[min(100%-32px,850px)] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-h2 text-on-ink mb-8">
              {lang === 'en' ? 'Your product doesn’t need more screens.' : 'Ürününüzün daha fazla ekrana ihtiyacı yok.'}<br/>
              <span className="text-accent">{lang === 'en' ? 'It needs smarter systems.' : 'Düşünen sistemlere ihtiyacı var.'}</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link to={`${uxAuditPath(lang)}`} className="btn-primary-pink w-full sm:w-auto hover:shadow-xl">
                {lang === 'en' ? 'Request a Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İste'} <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-[48px] px-6 rounded-2xl bg-transparent border border-white/20 text-white text-body font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-white/5 focus-visible:ring-4 focus-visible:ring-white/20">
                {lang === 'en' ? 'Book a 15-Min Call' : '15 Dakikalık Görüşme Planla'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
