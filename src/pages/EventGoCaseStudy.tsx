import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Mail, ZoomIn, X, Search, Users, Route, Palette, Smartphone } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';

export function EventGoCaseStudy({ lang, project, otherProjects }: { lang: 'en'|'tr', project: any, otherProjects: any[] }) {
  const showcaseSections = [
    { id: 'persona', titleEn: 'Research & Persona', titleTr: 'Araştırma ve Persona', descEn: 'Understanding users to build a community-driven sports experience.', descTr: 'Topluluk odaklı bir spor deneyimi oluşturmak için kullanıcıları anlamak.' },
    { id: 'user-flow', titleEn: 'User Flow', titleTr: 'Kullanıcı Akışı', descEn: 'Mapping out the seamless journey from discovering an event to participating.', descTr: 'Bir etkinliği keşfetmekten katılmaya kadar uzanan kusursuz yolculuğun haritalanması.' },
    { id: 'visual-system', titleEn: 'Visual System', titleTr: 'Görsel Sistem', descEn: 'A vibrant and energetic design language that motivates users to take action.', descTr: 'Kullanıcıları harekete geçmeye motive eden canlı ve enerjik bir tasarım dili.' },
    { id: 'solution', titleEn: 'Solution', titleTr: 'Çözüm', descEn: 'A comprehensive platform that bridges the gap between sports enthusiasts and local activities.', descTr: 'Spor tutkunları ile yerel aktiviteler arasındaki boşluğu dolduran kapsamlı bir platform.' },
    { id: 'onboarding', titleEn: 'Onboarding', titleTr: 'Karşılama Ekranı', descEn: 'The onboarding experience introduces the product quickly while encouraging users to explore sports events immediately.', descTr: 'Karşılama deneyimi, ürünü hızlıca tanıtırken kullanıcıları spor etkinliklerini hemen keşfetmeye teşvik eder.', image: '/eventgo-onboarding.webp' },
    { id: 'home', titleEn: 'Home Experience', titleTr: 'Ana Sayfa Deneyimi', descEn: 'A personalized dashboard highlighting upcoming events, earned XP, and community activity.', descTr: 'Yaklaşan etkinlikleri, kazanılan XP\'leri ve topluluk aktivitelerini öne çıkaran kişiselleştirilmiş bir kontrol paneli.' },
    { id: 'explore', titleEn: 'Explore', titleTr: 'Keşfet', descEn: 'Users can search and filter events by specific sports (Running, Yoga, etc.), and discover activities based on interests and location.', descTr: 'Kullanıcılar etkinlikleri belirli spor dallarına (Koşu, Yoga vb.) göre arayıp filtreleyebilir ve ilgi alanları ile konumlarına göre keşfedebilirler.' },
    { id: 'events', titleEn: 'Events', titleTr: 'Etkinlikler', descEn: 'Detailed event pages providing all necessary information, participant lists, and location details.', descTr: 'Gerekli tüm bilgileri, katılımcı listelerini ve konum ayrıntılarını sağlayan detaylı etkinlik sayfaları.' },
    { id: 'profile', titleEn: 'Profile', titleTr: 'Profil', descEn: 'User profiles featuring gamification elements like XP, levels, and badges to boost motivation alongside sports interests and past activities.', descTr: 'Spor ilgi alanlarının yanı sıra motivasyonu artıran XP, seviyeler (örn. Seviye 12) ve rozetler (örn. 7 Günlük Seri) gibi oyunlaştırma ögelerini barındıran kullanıcı profilleri.' },
    { id: 'create-event', titleEn: 'Create an Event', titleTr: 'Etkinlik Oluşturma', descEn: 'A frictionless 4-step flow (Sport selection, Details, Capacity/Visibility, Preview) for organizing new activities and inviting the community.', descTr: 'Yeni aktiviteler düzenlemek ve topluluğu davet etmek için pürüzsüz, 4 adımlı bir akış (Spor seçimi, Detaylar, Kapasite/Görünürlük, Önizleme).' }
  ];

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-[#FDFBF8] w-full text-dark">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="absolute top-24 left-6 z-10">
          <Link to={`/${lang}/portfolio`} className="inline-flex items-center gap-2 text-dark/60 hover:text-pink transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> {lang === 'en' ? 'Back to Portfolio' : 'Portfolyoya Dön'}
          </Link>
        </div>
        
        <div className="w-full flex flex-col items-center text-center mt-12 mb-16 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-xl md:text-3xl text-dark/60 font-light mb-8 max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Making it easier to find people, plan activities and move together.' 
                : 'Spor yapacak kişileri bulmayı, etkinlik planlamayı ve birlikte harekete geçmeyi kolaylaştıran bir deneyim.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://www.behance.net/gallery/245540023/EventGO-Social-Sports-Event-Planner" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-dark text-white rounded-full font-medium hover:bg-pink transition-colors w-full sm:w-auto">
                {lang === 'en' ? 'View Case Study' : 'Projeyi İncele'}
              </a>
              <Link to={`/${lang}/contact`} className="px-8 py-4 bg-transparent border border-dark/20 text-dark rounded-full font-medium hover:bg-dark/5 transition-colors w-full sm:w-auto">
                {lang === 'en' ? 'Contact Me' : 'İletişime Geç'}
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full px-4 md:px-0 flex justify-center"
        >
          <img src="/eventgo.png" alt="EventGO mobile application screens" className="block w-full max-w-4xl h-auto object-contain" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto w-full text-center">
          {[
            { label: lang === 'en' ? 'Role' : 'Rol', value: project.role },
            { label: lang === 'en' ? 'Timeline' : 'Süreç', value: project.timeline },
            { label: lang === 'en' ? 'Platform' : 'Platform', value: 'Mobile App' },
            { label: lang === 'en' ? 'Tools' : 'Araçlar', value: project.tools.join(', ') },
          ].map((meta, i) => (
            <motion.div 
              key={meta.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
              className="flex flex-col gap-2"
            >
              <span className="text-[11px] uppercase tracking-widest text-dark/40 font-bold">{meta.label}</span>
              <span className="text-sm font-medium text-dark/80">{meta.value}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Project Overview */}
      <section className="px-6 py-24 max-w-7xl mx-auto border-t border-dark/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              {lang === 'en' ? 'Project Overview' : 'Projeye Genel Bakış'}
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed mb-6">
              {lang === 'en' 
                ? 'EventGO is a mobile application designed to help users discover, organize, and participate in sports events more easily.'
                : 'EventGO, kullanıcıların spor etkinliklerini daha kolay keşfetmesine, organize etmesine ve katılmasına yardımcı olmak için tasarlanmış bir mobil uygulamadır.'}
            </p>
            <p className="text-lg text-dark/70 leading-relaxed">
              {lang === 'en'
                ? 'The goal of the project was to create a social-first experience where people can effortlessly connect through sports, motivated by gamification, while enjoying a modern and engaging interface.'
                : 'Projenin amacı, insanların modern ve ilgi çekici bir arayüzün tadını çıkarırken, oyunlaştırma ile motive olarak spor aracılığıyla zahmetsizce bağlantı kurabilecekleri, sosyal odaklı bir deneyim yaratmaktı.'}
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { label: lang === 'en' ? 'Industry' : 'Sektör', value: lang === 'en' ? 'Sports & Social Networking' : 'Spor ve Sosyal Ağ' },
              { label: lang === 'en' ? 'Duration' : 'Süre', value: project.timeline },
              { label: lang === 'en' ? 'Deliverables' : 'Teslimatlar', value: 'Research, Persona, User Flow, Wireframes, UI Design, Prototype' },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-dark/5 shadow-sm"
              >
                <h4 className="text-[11px] uppercase tracking-widest text-dark/40 font-bold mb-2">{item.label}</h4>
                <p className="text-base font-semibold text-dark/90">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Design Process */}
      <section className="px-6 py-24 bg-dark/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-dark mb-16 text-center"
          >
            {lang === 'en' ? 'Design Process' : 'Tasarım Süreci'}
          </motion.h2>
          
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-[1.75rem] left-0 w-full h-1 bg-dark/10 -translate-y-1/2 rounded-full z-0">
              <motion.div 
                className="h-full bg-[#1ed760]" // EventGO green accent
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute top-0 left-[1.5rem] w-1 h-full bg-dark/10 -translate-x-1/2 rounded-full z-0">
              <motion.div 
                className="w-full bg-[#1ed760]"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-10 md:gap-4">
              {[
                { en: 'Research', tr: 'Araştırma', icon: <Search className="h-6 w-6" strokeWidth={2} aria-hidden="true" /> },
                { en: 'Persona', tr: 'Persona', icon: <Users className="h-6 w-6" strokeWidth={2} aria-hidden="true" /> },
                { en: 'User Flow', tr: 'Kullanıcı Akışı', icon: <Route className="h-6 w-6" strokeWidth={2} aria-hidden="true" /> },
                { en: 'Visual Design', tr: 'Görsel Tasarım', icon: <Palette className="h-6 w-6" strokeWidth={2} aria-hidden="true" /> },
                { en: 'Prototype', tr: 'Prototip', icon: <Smartphone className="h-6 w-6" strokeWidth={2} aria-hidden="true" /> },
                { en: 'Validation', tr: 'Doğrulama', icon: <CheckCircle2 className="h-6 w-6" strokeWidth={2} aria-hidden="true" /> }
              ].map((step, i) => (
                <div 
                  key={step.en}
                  className="flex md:flex-col items-center md:text-center pl-16 md:pl-0 relative group"
                >
                  <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-md text-dark z-20 border border-dark/5 absolute md:relative left-0 md:left-auto md:mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg text-dark/90">{lang === 'en' ? step.en : step.tr}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Project Showcase */}
      <section id="case-study-content" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {showcaseSections.filter(s => !s.image).map((section, i) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-dark/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-dark mb-4">{lang === 'en' ? section.titleEn : section.titleTr}</h3>
                <p className="text-dark/70 text-lg leading-relaxed">
                  {lang === 'en' ? section.descEn : section.descTr}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="w-full space-y-32">
            {showcaseSections.filter(s => s.image).map((section) => {
              return (
                <div key={section.id} className="flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                  >
                    <h3 className="text-3xl font-bold text-dark mb-6">{lang === 'en' ? section.titleEn : section.titleTr}</h3>
                    <p className="text-dark/70 text-lg leading-relaxed">
                      {lang === 'en' ? section.descEn : section.descTr}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl mx-auto"
                  >
                    <img 
                      src={section.image} 
                      alt={`${lang === 'en' ? section.titleEn : section.titleTr} screens`} 
                      className="block w-full h-auto object-contain rounded-3xl shadow-sm border border-dark/5"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Outcomes */}
      <section className="px-6 py-24 bg-dark text-white rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            {lang === 'en' ? 'Design Outcome' : 'Tasarım Sonucu'}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: lang === 'en' ? 'Easier event discovery' : 'Daha kolay etkinlik keşfi',
                desc: lang === 'en' ? 'Simplified the process of finding local sports activities with advanced filtering.' : 'Gelişmiş filtreleme ile yerel spor aktivitelerini bulma süreci basitleştirildi.' 
              },
              { 
                title: lang === 'en' ? 'Simplified event creation flow' : 'Basitleştirilmiş etkinlik oluşturma',
                desc: lang === 'en' ? 'Users can create and publish events with minimal friction using a structured 4-step process.' : 'Kullanıcılar yapılandırılmış 4 adımlı bir süreç kullanarak en az pürüzle etkinlik oluşturabilir ve yayınlayabilir.' 
              },
              { 
                title: lang === 'en' ? 'Gamified community interaction' : 'Oyunlaştırılmış topluluk etkileşimi',
                desc: lang === 'en' ? 'Built-in chat, XP, levels, and badges keep users engaged and motivated post-event.' : 'Dahili sohbet, XP, seviyeler ve rozetler, kullanıcıların etkinlik sonrası etkileşimde ve motive kalmasını sağlar.' 
              }
            ].map((outcome, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl"
              >
                <div className="w-12 h-12 bg-[#1ed760]/20 text-[#1ed760] rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{outcome.title}</h3>
                <p className="text-white/60 leading-relaxed">{outcome.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Next Project */}
      <section className="px-6 py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">
              {lang === 'en' ? 'Up Next' : 'Sıradaki Proje'}
            </h2>
            <div className="w-12 h-1 bg-pink rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherProjects.map(p => (
              <Link key={p.id} to={`/${lang}/projects/${p.id}`} className="group block">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 relative">
                  <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-xl">
                    <ArrowRight className="w-5 h-5 text-dark" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-dark text-2xl mb-2 group-hover:text-pink transition-colors">{p.title}</h3>
                  <p className="text-sm text-dark/60 font-medium tracking-wide uppercase">{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link to={`/${lang}/portfolio`} className="inline-flex items-center gap-2 text-dark font-semibold border-2 border-dark/10 px-8 py-4 rounded-full hover:border-pink hover:text-pink transition-all">
               {lang === 'en' ? 'View All Projects' : 'Tüm Projeleri Gör'} <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>


    </div>
    </MotionConfig>
  );
}
