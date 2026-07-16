import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, BrainCircuit, Briefcase, ChevronRight, FileText, Globe, GraduationCap, Layout, LineChart, Mail, Sparkles, Target, Users, CheckCircle2, Search, Zap, BookOpen, Download, ArrowUpRight } from "lucide-react";
import { Logo } from "../components/Logo";
import { projects } from "../data/projects";

export function Home({ lang }: { lang: "en" | "tr" }) {  useEffect(() => { document.title = lang === "en" ? "UXIPEK | Digital Product Design & Growth" : "UXIPEK | Dijital Ürün Tasarımı ve Büyüme"; }, [lang]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownloadPDF = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger download of the attached PDF (mocked here or via actual file in public)
    const link = document.createElement('a');
    link.href = '/UX_Audit_Guide.pdf';
    link.download = 'UX_Audit_Guide.pdf';
    document.body.appendChild(link);
    // Uncomment when you have the actual file: link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsSuccess(false), 3000);
  };
  
  return (
    <>
      <div className="w-full">
                {/* Hero Section */}
        <section id="about" className="relative overflow-hidden bg-background pt-[80px] pb-[48px] md:pt-[104px] md:pb-[72px] lg:pt-[104px] lg:pb-[88px]">
          {/* Ambient Background Magic */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Soft pink top-right glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-transformation/10 blur-[150px] rounded-full"></div>
            {/* Soft purple bottom-left glow */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 blur-[150px] rounded-full"></div>
            
            {/* Elegant light trails behind butterfly */}
            <svg viewBox="0 0 1000 1000" className="absolute top-0 right-0 w-[120%] h-[120%] opacity-40">
              <defs>
                <linearGradient id="trailGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CA006C" stopOpacity="0" />
                  <stop offset="50%" stopColor="#CA006C" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M -200 1000 C 400 800 500 500 1000 -100" 
                stroke="url(#trailGrad)" strokeWidth="2" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
              />
              <motion.path 
                d="M -100 1100 C 500 900 600 400 1100 0" 
                stroke="url(#trailGrad)" strokeWidth="4" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut", delay: 0.2 }}
                style={{ filter: "blur(2px)" }}
              />
              <motion.path 
                d="M 0 1200 C 600 1000 700 300 1200 100" 
                stroke="url(#trailGrad)" strokeWidth="1" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 5, ease: "easeOut", delay: 0.4 }}
              />
            </svg>
            
            {/* Floating pink petals / particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`petal-${i}`}
                className="absolute w-3 h-2 rounded-[50%_0_50%_0] bg-gradient-to-br from-brand-transformation to-pink/40 blur-[1px]"
                style={{
                  left: `${60 + Math.random() * 40}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, -50, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 8 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>

          <div className="page-container relative z-10 flex flex-col lg:flex-row items-center">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] pt-10 pb-12 lg:pb-0 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-brand-transformation"></div>
                  <span className="text-[11px] font-bold text-text-primary/50 tracking-[0.2em] uppercase">
                    AI-Native UX/UI Designer & Growth Strategist
                  </span>
                </div>
                
                <h1 className="text-h1 text-[clamp(2.5rem,5vw,4.75rem)] text-text-primary mb-6 mx-auto">
                  {lang === 'en' ? 'I design digital' : 'Karma\u015F\u0131kl\u0131\u011F\u0131'}<br />{lang === 'en' ? 'experiences that' : '\u00F6l\u00E7eklenebilir'}<br />{lang === 'en' ? 'turn ' : ''}<span className="text-brand-transformation font-semibold">{lang === 'en' ? 'clarity into growth.' : 'b\u00FCy\u00FCmeye d\u00F6n\u00FC\u015Ft\u00FCr\u00FCyorum.'}</span>
                </h1>
                
                <p className="text-body-lg text-text-primary/70 max-w-[680px] mb-8">
                  UX.Ipek helps startups, SaaS products, and AI-powered businesses build digital systems that are not only beautiful — but strategic, usable, and conversion-focused.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-12 md:mb-16">
                  <a href={`/${lang}/ux-audit`} className="btn-primary-pink w-full sm:w-auto flex text-[0.9375rem]">
                    {lang === 'en' ? 'Book a UX Audit' : 'UX Analizi Randevusu'} <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href="https://www.behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 min-h-[48px] px-6 rounded-2xl bg-white border border-brand-primary/10 text-brand-primary text-[0.9375rem] font-semibold leading-[1.2] inline-flex items-center justify-center gap-2 transition-all hover:bg-background focus-visible:ring-4 focus-visible:ring-brand-primary/10 shadow-sm">
                    {lang === 'en' ? 'View My Work' : 'Çalışmalarımı İncele'} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Micro Features Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:max-w-3xl">
                  {[
                    { icon: LineChart, title: lang === 'en' ? "Growth Focused" : "B\u00FCy\u00FCme Odakl\u0131", desc: lang === 'en' ? "Design that drives real business results." : "Ger\u00E7ek i\u015F sonu\u00E7lar\u0131 getiren tasar\u0131m." },
                    { icon: Users, title: lang === 'en' ? "Human Centered" : "\u0130nsan Odakl\u0131", desc: lang === 'en' ? "Empathy-led experiences your users love." : "Kullan\u0131c\u0131lar\u0131n sevdi\u011Fi empatik deneyimler." },
                    { icon: BrainCircuit, title: lang === 'en' ? "AI Accelerated" : "Yapay Zeka Destekli", desc: lang === 'en' ? "Smart workflows for faster, better outcomes." : "Daha h\u0131zl\u0131 ve iyi sonu\u00E7lar i\u00E7in ak\u0131ll\u0131 ak\u0131\u015Flar." },
                    { icon: BarChart3, title: lang === 'en' ? "Data Driven" : "Veri Odakl\u0131", desc: lang === 'en' ? "Decisions backed by insight and testing." : "\u0130\u00E7g\u00F6r\u00FC ve testlerle desteklenen kararlar." }
                  ].map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex flex-col gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    >
                      <div className="w-10 h-10 rounded-2xl bg-brand-transformation/10 flex items-center justify-center text-brand-transformation shadow-sm">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-[13px] font-bold text-text-primary">{feature.title}</h4>
                      <p className="text-[11px] text-text-primary/50 leading-relaxed lg:pr-2">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content Area - Butterfly */}
            <div className="w-full lg:w-[45%] absolute right-0 top-1/2 -translate-y-1/2 h-[800px] pointer-events-none hidden lg:block z-0">
              <div className="w-full h-full relative flex items-center justify-center translate-x-[20%] mt-[60px]">
                
                {/* Photorealistic animated butterfly SVG */}
                <motion.div 
                  className="w-[700px] h-[700px] relative z-20"
                  animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 1000 1000" className="w-full h-full drop-shadow-[0_20px_50px_rgba(202,0,108,0.4)]">
                    <defs>
                      <radialGradient id="wingGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                        <stop offset="30%" stopColor="#CA006C" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="#28002C" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="1" />
                      </radialGradient>
                      <radialGradient id="wingPattern" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#CA006C" stopOpacity="1" />
                        <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity="1" />
                      </radialGradient>
                      <filter id="blurEdges" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" />
                      </filter>
                    </defs>

                    <g transform="translate(500, 500) rotate(-35)">
                      
                      {/* Left Wing Group */}
                      <motion.g
                        style={{ transformOrigin: "0 0" }}
                        animate={{ rotateY: [0, 45, 0], rotateZ: [-5, -10, -5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {/* Upper Left Wing */}
                        <path 
                          d="M -10 -20 C -100 -250 -350 -400 -450 -300 C -500 -200 -480 -50 -350 100 C -200 200 -50 80 -10 -20 Z" 
                          fill="url(#wingPattern)" 
                          stroke="var(--color-brand-primary)" strokeWidth="8"
                        />
                        {/* Lower Left Wing */}
                        <path 
                          d="M -5 20 C -150 150 -350 250 -380 400 C -400 500 -250 550 -100 450 C -20 350 0 150 -5 20 Z" 
                          fill="url(#wingGlow)" 
                          stroke="var(--color-brand-primary)" strokeWidth="6"
                        />
                        
                        {/* Wing Details / Veins */}
                        <path d="M -15 -10 C -100 -100 -200 -200 -300 -250" stroke="var(--color-brand-primary)" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M -15 -10 C -150 -50 -300 -100 -400 -150" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" opacity="0.8" />
                        <path d="M -15 -10 C -100 50 -200 100 -280 50" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" opacity="0.8" />
                        
                        <path d="M -10 30 C -100 150 -200 250 -250 350" stroke="var(--color-brand-primary)" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M -10 30 C -50 200 -100 350 -150 450" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" opacity="0.8" />
                        
                        {/* White Spots along the edge */}
                        <circle cx="-420" cy="-250" r="8" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="-440" cy="-150" r="10" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="-400" cy="-50" r="12" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="-350" cy="50" r="8" fill="#FFF" filter="url(#blurEdges)"/>
                        
                        <circle cx="-350" cy="350" r="7" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="-280" cy="450" r="9" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="-180" cy="500" r="6" fill="#FFF" filter="url(#blurEdges)"/>
                      </motion.g>

                      {/* Right Wing Group */}
                      <motion.g
                        style={{ transformOrigin: "0 0" }}
                        animate={{ rotateY: [0, -45, 0], rotateZ: [5, 10, 5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                      >
                        {/* Upper Right Wing */}
                        <path 
                          d="M 10 -20 C 100 -250 350 -400 450 -300 C 500 -200 480 -50 350 100 C 200 200 50 80 10 -20 Z" 
                          fill="url(#wingPattern)" 
                          stroke="var(--color-brand-primary)" strokeWidth="8"
                        />
                        {/* Lower Right Wing */}
                        <path 
                          d="M 5 20 C 150 150 350 250 380 400 C 400 500 250 550 100 450 C 20 350 0 150 5 20 Z" 
                          fill="url(#wingGlow)" 
                          stroke="var(--color-brand-primary)" strokeWidth="6"
                        />
                        
                        {/* Wing Details / Veins */}
                        <path d="M 15 -10 C 100 -100 200 -200 300 -250" stroke="var(--color-brand-primary)" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M 15 -10 C 150 -50 300 -100 400 -150" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" opacity="0.8" />
                        <path d="M 15 -10 C 100 50 200 100 280 50" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" opacity="0.8" />
                        
                        <path d="M 10 30 C 100 150 200 250 250 350" stroke="var(--color-brand-primary)" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M 10 30 C 50 200 100 350 150 450" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" opacity="0.8" />
                        
                        {/* White Spots along the edge */}
                        <circle cx="420" cy="-250" r="8" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="440" cy="-150" r="10" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="400" cy="-50" r="12" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="350" cy="50" r="8" fill="#FFF" filter="url(#blurEdges)"/>
                        
                        <circle cx="350" cy="350" r="7" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="280" cy="450" r="9" fill="#FFF" filter="url(#blurEdges)"/>
                        <circle cx="180" cy="500" r="6" fill="#FFF" filter="url(#blurEdges)"/>
                      </motion.g>

                      {/* Butterfly Body */}
                      <g filter="url(#blurEdges)">
                        {/* Antennae */}
                        <path d="M -5 -90 C -20 -150 -80 -200 -100 -180" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" />
                        <path d="M 5 -90 C 20 -150 80 -200 100 -180" stroke="var(--color-brand-primary)" strokeWidth="4" fill="none" />
                        <circle cx="-100" cy="-180" r="4" fill="var(--color-brand-primary)" />
                        <circle cx="100" cy="-180" r="4" fill="var(--color-brand-primary)" />
                        
                        {/* Center Body */}
                        <ellipse cx="0" cy="-50" rx="12" ry="40" fill="var(--color-brand-primary)" />
                        <ellipse cx="0" cy="40" rx="10" ry="80" fill="var(--color-brand-primary)" />
                      </g>
                    </g>
                  </svg>
                </motion.div>

                {/* Transform Path on the Right Edge */}
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 h-[500px] w-[200px] z-30 pointer-events-none">
                  <div className="h-full w-full relative">
                    <svg className="absolute inset-0 w-full h-full" overflow="visible">
                      <path d="M 120 400 C 60 300 60 200 140 100" stroke="#28002C" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" fill="none" />
                    </svg>

                    <div className="absolute top-[80%] left-[103px] flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-transformation shadow-[0_0_10px_var(--color-brand-transformation)]"></div>
                      <div>
                        <p className="text-brand-transformation font-bold text-[12px] tracking-wide">1. Tırtıl</p>
                        <p className="text-text-primary/50 text-[9px] uppercase font-semibold">{lang === 'en' ? 'Problem & Friction' : 'Problem ve S\u00FCrt\u00FCnme'}</p>
                      </div>
                    </div>

                    <div className="absolute top-[50%] left-[53px] flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-transformation/60 shadow-[0_0_10px_var(--color-brand-transformation)]"></div>
                      <div>
                        <p className="text-brand-transformation font-bold text-[12px] tracking-wide">2. Koza</p>
                        <p className="text-text-primary/50 text-[9px] uppercase font-semibold">{lang === 'en' ? 'Analysis & Strategy' : 'Analiz ve Strateji'}</p>
                      </div>
                    </div>

                    <div className="absolute top-[20%] left-[123px] flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-transformation shadow-[0_0_15px_var(--color-brand-transformation)]"></div>
                      <div>
                        <p className="text-brand-transformation font-bold text-[12px] tracking-wide">3. Kelebek</p>
                        <p className="text-text-primary/50 text-[9px] uppercase font-semibold leading-tight mt-0.5">{lang === 'en' ? 'Growth &' : 'B\u00FCy\u00FCme &'}<br/>{lang === 'en' ? 'Transformation' : 've D\u00F6n\u00FC\u015F\u00FCm'}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 animate-pulse hidden lg:flex">
            <span className="text-[10px] uppercase tracking-widest text-text-primary/40 font-semibold">{lang === 'en' ? 'Scroll to explore' : 'Ke\u015Ffetmek i\u00E7in kayd\u0131r\u0131n'}</span>
            <ChevronRight className="h-4 w-4 text-text-primary/40 rotate-90" />
          </div>
        </section>
                {/* Services Section */}
        <section id="services" className="py-[48px] md:py-[64px] lg:py-[88px] bg-surface border-y border-brand-primary/5">
          <div className="page-container">
            {/* Section Header */}
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-[2px] bg-brand-transformation/40"></div>
                  <span className="text-xs font-bold text-text-primary/40 tracking-[0.2em] uppercase">
                    Strategic Expertise
                  </span>
                </div>
                <h2 className="text-h2 text-[clamp(2rem,3.5vw,3.25rem)] text-text-primary">
                  {lang === 'en' ? "I don't just push pixels." : "Sadece tasarlam\u0131yorum."}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-transformation to-brand-secondary font-medium">{lang === 'en' ? 'I architect growth systems.' : 'B\u00FCy\u00FCme sistemleri in\u015Faa ediyorum.'}</span>
                </h2>
              </div>
              <div className="max-w-sm pb-2 md:pb-4">
                <p className="text-body-lg text-text-primary/70 max-w-[680px]">
                  Scalable user experience logic designed to acquire, activate, and retain users beautifully.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: UX/UI Design */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col justify-between rounded-[2.5rem] bg-white p-10 lg:p-14 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(202,0,108,0.04)] border border-brand-primary/5 hover:border-brand-transformation/20"
              >
                <div>
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-text-primary border border-brand-primary/5 transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-transformation group-hover:border-brand-transformation/20 group-hover:bg-brand-transformation/5">
                    <Layout className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-h3 mb-5 text-text-primary">{lang === 'en' ? 'UX/UI Design for SaaS' : 'SaaS \u0130\u00E7in UX/UI Tasar\u0131m\u0131'}</h3>
                  <p className="font-light leading-relaxed text-text-primary/60 text-lg">
                    From frictionless onboarding flows to intuitive data dashboards. I turn complex software into premium, habit-forming digital products that users love and trust.
                  </p>
                </div>
                <div className="mt-14 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brand-primary/10 bg-white transition-colors duration-500 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-primary/40 group-hover:text-text-primary transition-colors duration-300">
                    Explore Interface Design
                  </span>
                </div>
              </motion.div>

              {/* Card 2: UX Audit */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group flex flex-col justify-between rounded-[2.5rem] bg-white p-10 lg:p-14 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(202,0,108,0.04)] border border-brand-primary/5 hover:border-purple/20"
              >
                <div>
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-text-primary border border-brand-primary/5 transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-secondary group-hover:border-purple/20 group-hover:bg-brand-secondary/5">
                    <Search className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-h3 mb-5 text-text-primary">{lang === 'en' ? 'UX Audit & Conversion Review' : 'UX Analizi ve D\u00F6n\u00FC\u015F\u00FCm \u0130ncelemesi'}</h3>
                  <p className="font-light leading-relaxed text-text-primary/60 text-lg">
                    Stop guessing. I analyze analytics, heatmaps, and user flows to find exactly where users drop off. You get a prioritized "Quick Wins" roadmap that increases conversion instantly.
                  </p>
                </div>
                <div className="mt-14 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brand-primary/10 bg-white transition-colors duration-500 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-primary/40 group-hover:text-text-primary transition-colors duration-300">
                    Explore Conversion Audit
                  </span>
                </div>
              </motion.div>

              {/* Card 3 (Connected Block): AI-Native & Landing Page */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-[2rem] bg-white border border-brand-primary/5 transition-all duration-500 col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-brand-primary/10 overflow-hidden"
              >
                {/* AI-Native */}
                <div className="group flex flex-col justify-between p-10 lg:p-14 border-b md:border-b-0 md:border-r border-brand-primary/5 bg-transparent hover:bg-background transition-colors duration-500 relative">
                  <div>
                    <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-text-primary border border-brand-primary/5 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:text-text-primary">
                      <BrainCircuit className="h-6 w-6 stroke-[1.5]" />
                    </div>
                    <h3 className="text-h3 mb-5 text-text-primary">{lang === 'en' ? 'AI-Native Digital Strategy' : 'Yapay Zeka Odakl\u0131 Dijital Strateji'}</h3>
                    <p className="font-light leading-relaxed text-text-primary/60 text-lg">
                      Integrating agentic AI and intelligent workflows into your product gracefully. I design AI interactions that feel natural, supportive, and fundamentally human-centered.
                    </p>
                  </div>
                  <div className="mt-14 flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brand-primary/10 bg-white transition-colors duration-500 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-primary/40 group-hover:text-text-primary transition-colors duration-300">
                      Explore AI Integration
                    </span>
                  </div>
                </div>

                {/* Landing Page Optimization */}
                <div className="group flex flex-col justify-between p-10 lg:p-14 bg-transparent hover:bg-background transition-colors duration-500 relative">
                  <div>
                    <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-text-primary border border-brand-primary/5 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-transformation">
                      <LineChart className="h-6 w-6 stroke-[1.5]" />
                    </div>
                    <h3 className="text-h3 mb-5 text-text-primary">{lang === 'en' ? 'Landing Page Optimization' : 'A\u00E7\u0131l\u0131\u015F Sayfas\u0131 Optimizasyonu'}</h3>
                    <p className="font-light leading-relaxed text-text-primary/60 text-lg">
                      Your landing page has one job: convert clicks into customers. I apply behavioral psychology and premium visual design to build high-converting structural layouts.
                    </p>
                  </div>
                  <div className="mt-14 flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brand-primary/10 bg-white transition-colors duration-500 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-primary/40 group-hover:text-text-primary transition-colors duration-300">
                      Explore Optimization
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Website Growth System Design */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="col-span-1 md:col-span-2 group flex flex-col justify-between rounded-[2.5rem] bg-white p-10 lg:p-14 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(202,0,108,0.06)] border border-brand-transformation/10 hover:border-brand-transformation/30 relative overflow-hidden"
              >
                {/* Subtle Glow Background */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-transformation/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 relative z-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-text-primary border border-brand-primary/5 transition-transform duration-500 group-hover:scale-105 group-hover:text-brand-transformation group-hover:border-brand-transformation/20 group-hover:bg-brand-transformation/5 shadow-sm">
                    <Globe className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-transformation bg-brand-transformation/5 px-4 py-2 rounded-full border border-brand-transformation/10 w-max shadow-sm">
                    Flagship Growth System
                  </span>
                </div>
                
                <div className="relative z-10 w-full mb-4">
                  <h3 className="mb-5 text-3xl lg:text-[36px] font-medium text-text-primary tracking-tight leading-[1.1] max-w-2xl">{lang === 'en' ? 'Website Growth System Design' : 'B\u00FCy\u00FCme Odakl\u0131 Web Sistem Tasar\u0131m\u0131'}</h3>
                  <p className="font-light leading-relaxed text-text-primary/60 text-lg md:text-xl max-w-3xl">
                    Building a website is not the finish line; it's the foundation. I design end-to-end digital growth systems that connect your positioning, organic traffic, and conversion funnels into one continuous engine.
                  </p>
                </div>

                <div className="mt-14 flex items-center gap-4 relative z-10">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brand-primary/10 bg-white shadow-sm transition-colors duration-500 group-hover:bg-brand-transformation group-hover:border-brand-transformation group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-primary/40 group-hover:text-brand-transformation transition-colors duration-300">
                    Systemize Your Growth
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
        {/* Process Section: The Butterfly Effect of Digital Transformation */}
        <section id="process" className="relative py-[48px] md:py-[64px] lg:py-[88px] bg-background overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-transformation/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="page-container relative z-10">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-[1000px] mx-auto mb-12 md:mb-16"
            >
              <h2 className="text-h1 text-text-primary md:text-5xl lg:text-6xl mb-8">
                The Butterfly Effect of <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-transformation to-brand-secondary font-semibold">{lang === 'en' ? 'Digital Transformation.' : 'Kelebek Etkisi.'}</span>
              </h2>
              <p className="text-xl md:text-2xl text-text-primary/70 font-light leading-relaxed">
                Every strong digital experience starts with understanding friction, evolves through strategic design, and transforms into measurable growth.
              </p>
            </motion.div>

            {/* Strategic Timeline / Process Steps */}
            <div className="relative">
              {/* Wavy Timeline SVG Path Background (Hidden on small screens) */}
              <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-[400px] pointer-events-none z-0">
                 <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none" className="opacity-30 flex-shrink-0">
                   <defs>
                     <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#28002C" stopOpacity="0.1" />
                       <stop offset="50%" stopColor="#CA006C" stopOpacity="0.4" />
                       <stop offset="100%" stopColor="#CA006C" stopOpacity="0.8" />
                     </linearGradient>
                     <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#CA006C" stopOpacity="0" />
                       <stop offset="100%" stopColor="#CA006C" stopOpacity="0.6" />
                     </linearGradient>
                   </defs>
                   
                   {/* Base Path */}
                   <path d="M0,100 C 300,100 200,300 500,300 C 800,300 700,50 1000,50" 
                         fill="none" stroke="url(#pathGradient)" strokeWidth="2" strokeDasharray="8 8" />
                         
                   {/* Animated Flow Line over the Path */}
                   <motion.path d="M0,100 C 300,100 200,300 500,300 C 800,300 700,50 1000,50" 
                         fill="none" stroke="url(#glowGrad)" strokeWidth="4" 
                         initial={{ pathLength: 0, opacity: 0 }}
                         whileInView={{ pathLength: 1, opacity: 1 }}
                         viewport={{ once: true, margin: "-10%" }}
                         transition={{ duration: 2.5, ease: "easeInOut" }}
                         style={{ filter: "drop-shadow(0px 0px 8px rgba(202,0,108,0.5))" }}
                   />
                 </svg>
                 
                 {/* Floating Animated Butterfly across the steps */}
                 <motion.div 
                    className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-40"
                    initial={{ x: "-10%", y: 50, opacity: 0, scale: 0.5 }}
                    whileInView={{ 
                      x: ["0%", "50%", "100%"], 
                      y: [80, 280, 20],
                      opacity: [0, 1, 1],
                      scale: [0.5, 0.8, 1.2],
                    }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                 >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(202,0,108,0.6)]">
                      <motion.g animate={{ rotateY: [0, 50, 0] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ transformOrigin: "50% 50%" }}>
                        <path d="M48 50 C20 10 10 30 48 50 Z" fill="#CA006C" opacity="0.9" />
                        <path d="M48 52 C20 90 10 70 48 52 Z" fill="var(--color-brand-secondary)" opacity="0.8" />
                      </motion.g>
                      <motion.g animate={{ rotateY: [0, -50, 0] }} transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }} style={{ transformOrigin: "50% 50%" }}>
                        <path d="M52 50 C80 10 90 30 52 50 Z" fill="#CA006C" opacity="0.9" />
                        <path d="M52 52 C80 90 90 70 52 52 Z" fill="var(--color-brand-secondary)" opacity="0.8" />
                      </motion.g>
                      <ellipse cx="50" cy="50" rx="2" ry="10" fill="#28002C" />
                    </svg>
                 </motion.div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 relative z-20">
                
                {/* Step 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="bg-white/60 backdrop-blur-xl border border-brand-primary/5 p-10 rounded-[2rem] shadow-sm relative lg:-top-4"
                >
                  <div className="text-[11px] font-bold text-text-primary/40 uppercase tracking-widest mb-8 flex items-center justify-between">
                    <span>{lang === 'en' ? 'Phase 01' : 'A\u015Fama 01'}</span>
                    <div className="w-2 h-2 rounded-full bg-brand-primary/20"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group cursor-default">
                    Tırtıl <span className="text-text-primary/40 font-normal ml-1 transition-colors group-hover:text-text-primary/60">— Friction & Discovery</span>
                  </h3>
                  <p className="text-text-primary/70 leading-relaxed mb-8 font-light text-[15px]">
                    Every project begins by identifying hidden UX problems, behavioral friction, trust gaps, and conversion blockers. The goal is to understand why users hesitate, abandon, or fail to engage.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Research', 'Audit', 'User Behavior', 'Friction Mapping'].map(kw => (
                      <span key={kw} className="px-3 py-1.5 rounded-full bg-brand-primary/5 text-text-primary/70 text-[11px] font-semibold border border-brand-primary/5">
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-xl border border-brand-transformation/10 p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(202,0,108,0.05)] relative lg:top-[20px]"
                >
                  <div className="text-[11px] font-bold text-brand-transformation/60 uppercase tracking-widest mb-8 flex items-center justify-between">
                    <span>{lang === 'en' ? 'Phase 02' : 'A\u015Fama 02'}</span>
                    <div className="w-2 h-2 rounded-full bg-brand-transformation/40 shadow-[0_0_8px_rgba(202,0,108,0.5)]"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group cursor-default">
                    Koza <span className="text-brand-transformation/70 font-normal ml-1 transition-colors group-hover:text-brand-transformation/90">— Strategy & System Thinking</span>
                  </h3>
                  <p className="text-text-primary/80 leading-relaxed mb-8 font-light text-[15px]">
                    Insights are transformed into structure. Information architecture, user flows, content hierarchy, and AI-supported systems are redesigned to create clarity and strategic direction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Strategy', 'UX Architecture', 'Systems', 'AI Workflows'].map(kw => (
                      <span key={kw} className="px-3 py-1.5 rounded-full bg-brand-transformation/5 text-brand-transformation text-[11px] font-semibold border border-brand-transformation/10">
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="bg-white backdrop-blur-xl border border-purple/20 p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(202,0,108,0.1)] relative lg:-top-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-transformation/5 to-brand-secondary/5 rounded-[2rem] pointer-events-none"></div>
                  <div className="text-[11px] font-bold text-brand-secondary uppercase tracking-widest mb-8 flex items-center justify-between relative z-10">
                    <span>{lang === 'en' ? 'Phase 03' : 'A\u015Fama 03'}</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-transformation shadow-[0_0_12px_rgba(202,0,108,0.8)] animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group cursor-default relative z-10">
                    Kelebek <span className="text-brand-secondary/80 font-normal ml-1">— Growth & Transformation</span>
                  </h3>
                  <p className="text-text-primary/80 leading-relaxed mb-8 font-light text-[15px] relative z-10">
                    The final experience becomes clear, intuitive, emotionally engaging, and conversion-focused. Beautiful interfaces meet measurable business growth and human-centered interaction.
                  </p>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {['Growth', 'Conversion', 'Experience', 'Transformation'].map(kw => (
                      <span key={kw} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-transformation/10 to-brand-secondary/10 text-text-primary font-semibold text-[11px] border border-brand-transformation/20">
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Microcopy Floating Quote */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 mb-8 text-center lg:mt-16 relative z-30"
            >
              <h4 className="text-3xl md:text-5xl font-serif italic text-text-primary/30 tracking-tight">
                "Good design is not decoration.<br />
                <span className="text-text-primary/80">{lang === 'en' ? 'It is transformation."' : 'Tamamen d\u00F6n\u00FC\u015F\u00FCm\u00FCn kendisidir."' }</span>
              </h4>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center mt-12 text-center"
            >
               <a href={`/${lang}/ux-audit`} className="flex items-center justify-center gap-3 rounded-full bg-brand-primary px-10 py-5 text-base font-bold text-white transition-all shadow-[0_8px_30px_rgb(30,41,59,0.2)] hover:shadow-2xl hover:-translate-y-1 hover:bg-brand-primary/90 group">
                  Start Your Transformation <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </a>
               <p className="mt-5 text-sm md:text-base text-text-primary/50 font-medium">
                 Let’s turn your digital experience into a growth system.
               </p>
            </motion.div>

          </div>
        </section>

        {/* Featured Case Studies Section */}
        <section id="portfolio" className="py-[48px] md:py-[64px] lg:py-[88px] bg-brand-primary relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-transformation/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
          
          <div className="page-container relative z-10">
            <div className="mb-12 max-w-4xl">
              <h2 className="text-h1 !text-white md:text-5xl lg:text-6xl mb-6">
                {lang === 'en' ? 'Featured Case Studies' : 'Öne Çıkan Çalışmalar'}
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {lang === 'en' 
                  ? 'A selection of premium digital products and experiences crafted with a focus on conversion, usability, and growth.' 
                  : 'Dönüşüm, kullanılabilirlik ve büyüme odaklı tasarlanmış premium dijital ürünler ve deneyimler.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 overflow-hidden hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/10">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-brand-transformation text-white text-xs font-medium border border-brand-transformation/20 shadow-sm shadow-brand-transformation/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.services.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 text-[11px] font-medium">
                          {tag}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                         <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/50 text-[11px] font-medium">
                          +{project.services.length - 3}
                        </span>
                      )}
                    </div>
                    <Link 
                      to={`/${lang}/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-brand-transformation font-semibold text-sm hover:text-white transition-colors mt-auto"
                    >
                      {lang === 'en' ? 'View Case Study' : 'Projeyi İncele'} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link 
                to={`/${lang}/portfolio`} 
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
              >
                {lang === 'en' ? 'Explore All Projects' : 'Tüm Projeleri Keşfet'} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-[48px] md:py-[64px] lg:py-[88px] bg-background">
          <div className="page-container"><div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-6">
              Ready to fix the leaks in your product?
            </h2>
            <p className="text-text-primary/70 max-w-[850px] mx-auto text-lg mb-10">
              Whether you need a full SaaS redesign or a targeted UX audit to fix a specific funnel, let's find out where you're losing money and transform your digital experience into a growth system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`/${lang}/ux-audit`} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-brand-transformation px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:bg-brand-transformation/90">
                <Mail className="h-4 w-4" /> Book Your UX Audit
              </a>
              <Link to={`/${lang}/contact`} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-surface border border-brand-primary/10 px-8 py-4 text-sm font-bold text-text-primary transition-colors hover:bg-brand-primary/5">
                {lang === 'en' ? 'Contact Me' : 'İletişime Geç'}
              </Link>
            </div>
            <p className="text-sm text-text-primary/50 mt-8">{lang === 'en' ? 'A 30-minute strategic consultation. No commitment, just actionable insights.' : '30-dakikal\u0131k stratejik dan\u0131\u015Fmanl\u0131k. Taahh\u00FCts\u00FCz, sadece i\u015Fe yarar i\u00E7g\u00F6r\u00FCler.'}</p>
          </div>
          </div>
        </section>
      </div>

      {/* Hidden PDF Content */}
      <div id="pdf-content" className="hidden">
        {/* Simplified for demonstration; could be a rendered component if html2pdf is used */}
      </div>
    </>
  );
}
