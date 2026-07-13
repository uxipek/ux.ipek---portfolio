import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Mail } from "lucide-react";
import { projects } from "../data/projects";
import { EventGoCaseStudy } from "./EventGoCaseStudy";

export function ProjectDetailPage({ lang }: { lang: "en" | "tr" }) {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to={`/${lang}/portfolio`} />;
  }

  useEffect(() => {
    document.title = `${project.title} - ${project.category} | UXIPEK`;
    window.scrollTo(0, 0);
  }, [project.title, project.category]);

  const otherProjects = projects.filter(p => p.id !== id).slice(0, 3);

  if (project.id === "eventgo") {
    return <EventGoCaseStudy lang={lang} project={project} otherProjects={otherProjects} />;
  }

  return (
    <div className="bg-[#FDFBF8] min-h-screen pt-24 pb-0 w-full text-dark">
      {/* Hero Section */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <Link to={`/${lang}/portfolio`} className="inline-flex items-center gap-2 text-dark/60 hover:text-pink transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Portfolio' : 'Portfolyoya Dön'}
        </Link>
        <div className="mb-12 max-w-4xl">
          <span className="inline-block mb-4 text-pink font-semibold tracking-wider text-sm uppercase">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-dark/70 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="w-full px-6 max-w-[1400px] mx-auto mb-20">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
         >
           <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
         </motion.div>
      </div>

      {/* Project Info & Overview */}
      <div className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-32 p-8 bg-white rounded-3xl border border-dark/5 shadow-xl shadow-dark/5">
               <div className="mb-8 pb-8 border-b border-dark/5">
                 <h4 className="text-[11px] uppercase tracking-widest text-dark/40 font-bold mb-3">{lang === 'en' ? 'Role' : 'Rol'}</h4>
                 <p className="text-dark font-medium">{project.role}</p>
               </div>
               
               <div className="mb-8 pb-8 border-b border-dark/5">
                 <h4 className="text-[11px] uppercase tracking-widest text-dark/40 font-bold mb-3">{lang === 'en' ? 'Timeline' : 'Süreç'}</h4>
                 <p className="text-dark font-medium">{project.timeline}</p>
               </div>
               
               <div className="mb-8 pb-8 border-b border-dark/5">
                 <h4 className="text-[11px] uppercase tracking-widest text-dark/40 font-bold mb-3">{lang === 'en' ? 'Tools' : 'Araçlar'}</h4>
                 <div className="flex flex-wrap gap-2">
                   {project.tools.map(tool => (
                     <span key={tool} className="px-3 py-1.5 bg-dark/5 rounded-md text-sm font-medium text-dark/80">{tool}</span>
                   ))}
                 </div>
               </div>
               
               <div>
                 <h4 className="text-[11px] uppercase tracking-widest text-dark/40 font-bold mb-3">{lang === 'en' ? 'Services Provided' : 'Hizmetler'}</h4>
                 <ul className="space-y-2">
                   {project.services.map(service => (
                     <li key={service} className="flex items-start gap-2 text-sm font-medium text-dark/80">
                       <CheckCircle2 className="w-4 h-4 text-pink flex-shrink-0 mt-0.5" />
                       {service}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 order-1 lg:order-2 text-lg font-light text-dark/80 leading-relaxed space-y-16">
            
            <section>
              <h2 className="text-3xl font-bold text-dark mb-6">{lang === 'en' ? 'Overview' : 'Genel Bakış'}</h2>
              <p className="mb-6">
                This project focuses on delivering a highly optimized and intuitive experience for users. The primary goal was to bridge the gap between complex requirements and a seamless user interface, ultimately driving higher engagement and conversion rates.
              </p>
              <p>
                Through a comprehensive approach covering research, strategy, and visual design, we transformed the initial concept into a robust digital product that aligns with both business objectives and user needs.
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-dark mb-6">{lang === 'en' ? 'The Challenge' : 'Zorluk'}</h2>
              <p className="p-8 rounded-2xl bg-dark/5 border-l-4 border-pink">
                The main challenge was simplifying a multi-step, data-heavy process into an experience that felt effortless and trustworthy for the end user, while accommodating diverse user personas and technical constraints.
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-dark mb-6">{lang === 'en' ? 'Research & Insights' : 'Araştırma ve İçgörüler'}</h2>
              <p className="mb-6">
                Extensive qualitative and quantitative research revealed significant friction points in the existing user journey. We utilized affinity mapping and user interviews to pinpoint exactly where users were dropping off.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <li className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm">
                   <h4 className="font-bold text-dark mb-2">Insight 1</h4>
                   <p className="text-sm">Users felt overwhelmed by the amount of choices presented on a single screen.</p>
                </li>
                <li className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm">
                   <h4 className="font-bold text-dark mb-2">Insight 2</h4>
                   <p className="text-sm">Trust signals were missing during critical conversion moments, leading to abandonment.</p>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-dark mb-6">{lang === 'en' ? 'Design Decisions & UI' : 'Tasarım Kararları ve Arayüz'}</h2>
              <p className="mb-8">
                Based on our research, the information architecture was completely restructured. We adopted a progressive disclosure approach, presenting information only when the user needed it. The visual language was refined to communicate premium quality, using a clean layout, generous whitespace, and purposeful micro-interactions.
              </p>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-dark/5 mb-6">
                 {/* Placeholder for project specific UI screenshots */}
                 <img src={project.coverImage} alt="UI Design" className="w-full h-full object-cover opacity-80" />
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-dark mb-6">{lang === 'en' ? 'Outcome & Impact' : 'Sonuç ve Etki'}</h2>
              <p>
                The redesigned experience led to a more intuitive flow and a measurable increase in user task success rates. The strategic alignment of business goals with user-centered design principles successfully transformed the product into a growth engine.
              </p>
            </section>
            
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-dark text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'en' ? 'Ready to elevate your product?' : 'Ürününüzü bir üst seviyeye taşımaya hazır mısınız?'}
          </h2>
          <p className="text-white/60 text-lg mb-10">
            {lang === 'en' ? 'Let’s discuss how strategic UX design can drive growth for your business.' : 'Stratejik UX tasarımının işletmeniz için nasıl büyüme sağlayabileceğini konuşalım.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link to={`/${lang}/contact`} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-pink px-8 py-4 text-sm font-bold text-white transition-all hover:bg-pink/90 hover:shadow-lg hover:-translate-y-1">
               <Mail className="w-4 h-4" /> {lang === 'en' ? 'Contact UXIPEK' : 'UXIPEK İle İletişime Geçin'}
             </Link>
             <Link to={`/${lang}/ux-audit`} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-bold text-white border border-white/20 transition-all hover:bg-white/20">
               {lang === 'en' ? 'Book a UX Audit' : 'UX Analizi Randevusu Alın'}
             </Link>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="px-6 py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-dark">
              {lang === 'en' ? 'More Case Studies' : 'Daha Fazla Çalışma'}
            </h2>
            <Link to={`/${lang}/portfolio`} className="hidden sm:flex items-center gap-2 text-pink font-semibold hover:text-dark transition-colors">
              {lang === 'en' ? 'View All' : 'Tümünü Gör'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherProjects.map(p => (
              <Link key={p.id} to={`/${lang}/projects/${p.id}`} className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-bold text-dark text-xl mb-1 group-hover:text-pink transition-colors">{p.title}</h3>
                <p className="text-sm text-dark/60 font-medium">{p.category}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to={`/${lang}/portfolio`} className="inline-flex items-center gap-2 text-pink font-semibold border border-pink/20 px-6 py-3 rounded-full hover:bg-pink hover:text-white transition-all">
               {lang === 'en' ? 'View All Projects' : 'Tüm Projeleri Gör'} <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
