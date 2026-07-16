import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export function PortfolioPage({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => {
    document.title = lang === 'en' ? "Portfolio | UXIPEK" : "Portfolyo | UXIPEK";
  }, [lang]);

  return (
    <div className="bg-brand-primary min-h-screen pt-32 pb-24 w-full text-white">
      <div className="container-app ">
        <Link to={`/${lang}`} className="inline-flex items-center gap-2 text-white/60 hover:text-brand-transformation transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
        </Link>
        
        <div className="mb-16 max-w-3xl">
          <h1 className="text-h1 !text-white md:text-5xl lg:text-6xl mb-6">
            {lang === 'en' ? 'Featured Work' : 'Öne Çıkan Çalışmalar'}
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
            {lang === 'en' 
              ? 'A collection of digital products and strategic experiences focused on conversion, usability, and growth.' 
              : 'Dönüşüm, kullanılabilirlik ve büyüme odaklı dijital ürünler ve stratejik deneyimler koleksiyonu.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col"
            >
              {project.id === "zeka-oyunlari" ? (
                <a href="/zeka-oyunlari-case-study.html" className="block relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-6">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                     <span className="bg-brand-transformation text-white py-3 rounded-full text-sm font-bold shadow-xl shadow-brand-transformation/30 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                       {lang === 'en' ? 'View Case Study' : 'Projeyi İncele'} <ArrowRight className="w-4 h-4" />
                     </span>
                  </div>
                </a>
              ) : (
                <Link to={`/${lang}/projects/${project.id}`} className="block relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-6">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                     <span className="bg-brand-transformation text-white py-3 rounded-full text-sm font-bold shadow-xl shadow-brand-transformation/30 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                       {lang === 'en' ? 'View Case Study' : 'Projeyi İncele'} <ArrowRight className="w-4 h-4" />
                     </span>
                  </div>
                </Link>
              )}
              
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="text-white text-xs font-medium px-3 py-1.5 rounded-full bg-brand-transformation border border-brand-transformation/20 shadow-sm shadow-brand-transformation/20">
                    {project.category}
                  </span>
                </div>
                <p className="text-white/60 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center pt-16 border-t border-white/10">
           <h3 className="text-2xl font-bold mb-6">{lang === 'en' ? 'More projects available on Behance' : 'Daha fazla proje Behance üzerinde mevcut'}</h3>
           <a 
             href="https://www.behance.net/ipekbolakca" 
             target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-full bg-white text-text-primary px-8 py-4 text-sm font-bold transition-all hover:bg-brand-transformation hover:text-white"
           >
             {lang === 'en' ? 'View Full Portfolio on Behance' : 'Behance Portfolyosunu İncele'} <ArrowRight className="w-4 h-4" />
           </a>
        </div>
      </div>
    </div>
  );
}
