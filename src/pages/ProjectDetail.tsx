import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";
import { EventGoCaseStudy } from "./EventGoCaseStudy";
import { AkademiOzalitCaseStudy } from "./AkademiOzalitCaseStudy";
import { uxAuditPath } from '../lib/paths';

const CAL_COM_URL = "https://cal.com/ipek-bolakca-s41eqm/ucretsiz-ux-audit";

export function ProjectDetailPage({ lang }: { lang: "en" | "tr" }) {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to={`/${lang}/portfolio`} />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  const otherProjects = projects.filter(p => p.id !== id).slice(0, 3);

  if (project.id === "akademi-ozalit") {
    return <AkademiOzalitCaseStudy lang={lang} project={project} otherProjects={otherProjects} />;
  }
  if (project.id === "eventgo") {
    return <EventGoCaseStudy lang={lang} project={project} otherProjects={otherProjects} />;
  }

  return (
    <div className="bg-background min-h-screen pt-24 pb-0 w-full text-ink">
      {/* Hero Section */}
      <div className="container-app py-12">
        <Link to={`/${lang}/portfolio`} className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors mb-8 text-small font-medium">
          <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Portfolio' : 'Portfolyoya Dön'}
        </Link>
        <div className="mb-12 max-w-4xl">
          <span className="inline-block mb-4 text-accent font-semibold tracking-wider text-small uppercase">
            {project.category[lang]}
          </span>
          <h1 className="text-title md:text-display font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lead text-ink-muted font-normal leading-relaxed">
            {project.description[lang]}
          </p>
        </div>
      </div>

      <div className="w-full px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto mb-20">
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
      <div className="container-app mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-32 p-8 bg-white rounded-3xl border border-brand-primary/5 shadow-xl shadow-dark/5">
               {[
                 { label: lang === 'en' ? 'Role' : 'Rol', value: project.role },
                 { label: lang === 'en' ? 'Timeline' : 'Süre', value: project.timeline },
               ].filter(f => f.value).map(f => (
                 <div key={f.label} className="mb-8 pb-8 border-b border-brand-primary/5">
                   <p className="text-caption uppercase tracking-widest text-ink-muted font-bold mb-3">{f.label}</p>
                   <p className="text-ink font-medium">{f.value}</p>
                 </div>
               ))}

               {project.tools.length > 0 && (
                 <div className="mb-8 pb-8 border-b border-brand-primary/5">
                   <p className="text-caption uppercase tracking-widest text-ink-muted font-bold mb-3">{lang === 'en' ? 'Tools' : 'Araçlar'}</p>
                   <div className="flex flex-wrap gap-2">
                     {project.tools.map(tool => (
                       <span key={tool} className="px-3 py-1.5 bg-brand-primary/5 rounded-md text-small font-medium text-ink">{tool}</span>
                     ))}
                   </div>
                 </div>
               )}

               <div>
                 <p className="text-caption uppercase tracking-widest text-ink-muted font-bold mb-3">{lang === 'en' ? 'Scope' : 'Kapsam'}</p>
                 <ul className="space-y-2">
                   {project.services.map(service => (
                     <li key={service} className="flex items-start gap-2 text-small font-medium text-ink">
                       <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                       {service}
                     </li>
                   ))}
                 </ul>
               </div>

               {project.behanceUrl && (
                 <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer" className="btn-dark-solid w-full mt-8">
                   {lang === 'en' ? 'Full case study on Behance' : 'Tüm vaka çalışması Behance\'te'} <ArrowUpRight className="w-4 h-4" />
                 </a>
               )}
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2 text-lead font-normal text-ink leading-relaxed space-y-16">

            {project.overview && (
              <section>
                <h2 className="text-h2 mb-6">{lang === 'en' ? 'Overview' : 'Genel Bakış'}</h2>
                {project.overview.map((para, i) => (
                  <p key={i} className="mb-6">{para[lang]}</p>
                ))}
              </section>
            )}

            {project.problems && (
              <section>
                <h2 className="text-h2 mb-6">{lang === 'en' ? 'Problems to Solve' : 'Çözülmesi Gereken Sorunlar'}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.problems.map((pr, i) => (
                    <li key={i} className="p-6 bg-white rounded-2xl border border-brand-primary/5 shadow-sm text-body font-medium">{pr[lang]}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.process && (
              <section>
                <h2 className="text-h2 mb-6">{lang === 'en' ? 'Process' : 'Süreç'}</h2>
                <ol className="space-y-4">
                  {project.process.map((step, i) => (
                    <li key={i} className="flex gap-5 p-6 bg-white rounded-2xl border border-brand-primary/5 shadow-sm">
                      <span className="text-caption font-bold text-accent tracking-widest mt-1">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="text-h3 text-ink mb-1">{step.title[lang]}</h3>
                        <p className="text-body text-ink-muted">{step.items[lang]}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {project.gallery && (
              <section>
                <h2 className="text-h2 mb-6">{lang === 'en' ? 'Selected Work' : 'Seçili Çalışmalar'}</h2>
                <div className="space-y-10">
                  {project.gallery.map(img => (
                    <figure key={img.src}>
                      <img src={img.src} alt={img.caption[lang]} loading="lazy" className="w-full rounded-2xl border border-brand-primary/5 shadow-sm bg-white" />
                      <figcaption className="text-small text-ink-muted mt-3">{img.caption[lang]}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary text-center">
        <div className="w-[min(100%-32px,850px)] mx-auto">
          <h2 className="text-h2 text-on-ink mb-6">
            {lang === 'en' ? 'Want this kind of clarity for your product?' : 'Ürününüz için de bu netliği ister misiniz?'}
          </h2>
          <p className="text-on-ink-muted text-lead mb-10">
            {lang === 'en' ? 'Tell me what you are building and where users get stuck.' : 'Ne geliştirdiğinizi ve kullanıcıların nerede zorlandığını anlatın.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href={CAL_COM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-pink w-full sm:w-auto">
               {lang === 'en' ? 'Book a 15-Min Call' : '15 Dakikalık Görüşme Planla'} <ArrowUpRight className="w-4 h-4" />
             </a>
             <Link to={`${uxAuditPath(lang)}`} className="btn-outline-light w-full sm:w-auto">
               {lang === 'en' ? 'Request a Free Mini UX Audit' : 'Ücretsiz Mini UX Analizi İste'}
             </Link>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-24 bg-background">
        <div className="container-app ">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-h2 ">
              {lang === 'en' ? 'More Case Studies' : 'Daha Fazla Çalışma'}
            </h2>
            <Link to={`/${lang}/portfolio`} className="hidden sm:flex items-center gap-2 text-accent font-semibold hover:text-ink transition-colors">
              {lang === 'en' ? 'View All' : 'Tümünü Gör'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherProjects.map(p => (
              <Link key={p.id} to={`/${lang}/projects/${p.id}`} className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-bold text-ink text-lead mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-small text-ink-muted font-medium">{p.category[lang]}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to={`/${lang}/portfolio`} className="inline-flex items-center gap-2 text-accent font-semibold border border-brand-transformation/20 px-6 py-3 rounded-full hover:bg-brand-transformation hover:text-white transition-all">
               {lang === 'en' ? 'View All Projects' : 'Tüm Projeleri Gör'} <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
