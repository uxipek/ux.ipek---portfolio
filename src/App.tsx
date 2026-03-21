import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, BrainCircuit, Briefcase, ChevronRight, FileText, Globe, GraduationCap, Layout, LineChart, Mail, Sparkles, Target, Users, CheckCircle2, Search, Zap, BookOpen, Download } from "lucide-react";
import { Logo } from "./components/Logo";

export default function Portfolio() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownloadPDF = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger download of the attached PDF
    const link = document.createElement('a');
    link.href = '/UX_Denetim_Rehberi.pdf';
    link.download = 'UX_Denetim_Rehberi.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsSuccess(false), 3000);
  };
  return (
    <div className="min-h-screen bg-cream font-sans text-dark/90 selection:bg-magenta/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-dark/10 bg-dark/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2 text-cream">
            <Logo className="h-14 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-cream/70">
            <a href="#hizmetler" className="hover:text-cream transition-colors">Hizmetlerim</a>
            <a href="#portfolyo" className="hover:text-cream transition-colors">Portfolyo</a>
            <a href="#deneyim" className="hover:text-cream transition-colors">Deneyim</a>
            <a href="#yayinlar" className="hover:text-cream transition-colors">Akademik</a>
          </div>
          <a href="https://calendly.com/ipekbolakca/dijital-urun-yazilim-cozumleri-uzerine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-magenta px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-[#a00055]">
            Projemi Anlatmak İstiyorum <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-magenta blur-[120px] rounded-full pointer-events-none opacity-40"></div>
          
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl relative z-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Dijital Ürün UX Stratejisi & Dönüşüm Optimizasyonu
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-dark sm:text-7xl mb-6 leading-[1.1]">
                Sadece güzel görünen<br />
                arayüzler gelir getirmez.<br />
                <span className="text-magenta">Stratejik UX getirir.</span>
              </h1>
              <p className="text-xl text-dark/70 mb-4 leading-relaxed max-w-2xl font-serif italic">
                "Design with kindness" 🦋
              </p>
              <p className="text-lg text-dark/70 mb-10 leading-relaxed max-w-2xl">
                Yüksek trafikli SaaS platformlarını ve dijital işleri, yüksek dönüşümlü gelir motorlarına dönüştürüyorum. Kullanıcıların neden terk ettiğini tahmin etmeyi bırakın, veriye dayalı UX mimarisiyle büyümeye başlayın.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a href="https://calendly.com/ipekbolakca/dijital-urun-yazilim-cozumleri-uzerine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a00055]">
                  Ücretsiz Strateji Görüşmesi Ayarla <ChevronRight className="h-4 w-4" />
                </a>
                <button className="flex items-center gap-2 rounded-full border border-dark/10 bg-transparent px-6 py-3 text-sm font-medium text-dark transition-colors hover:bg-dark/5">
                  <FileText className="h-4 w-4" /> UX Denetim Check-list'i
                </button>
              </div>

              <div className="pt-8 border-t border-dark/10 flex items-center gap-4 text-sm text-dark/70/70 font-medium">
                <Users className="h-5 w-5 text-dark/70" />
                <span>50+ SaaS ve E-ticaret markasının gelir sızıntılarını kapattık.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem & Insight Section */}
        <section className="px-6 py-24 bg-cream">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8 leading-tight">
              Trafiğiniz var. Harika bir ürününüz var. <br />
              <span className="text-primary">Peki neden dönüşmüyorlar?</span>
            </h2>
            <div className="prose  prose-lg max-w-none text-dark/70">
              <p className="mb-6">
                Çoğu startup ekibi ve kurucu aynı pahalı hatayı yapıyor: Trafik çekmek için pazarlamaya büyük bütçeler ayırıyor, ancak kullanıcı deneyimini (UX) varsayımlara bırakıyorlar.
              </p>
              <p className="mb-8">
                Arayüzünüz kafa karıştırıcıysa, onboarding süreciniz çok uzunsa veya ödeme adımında gizli sürtünmeler varsa, sadece kullanıcıları sinirlendirmekle kalmıyor, <strong className="text-dark">reklam bütçenizi de yakıyorsunuz.</strong>
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-6 rounded-2xl border border-dark/10">
                  <div className="text-[#EF4444] font-bold mb-2 flex items-center gap-2"><Target className="h-4 w-4" /> Belirti</div>
                  <p className="text-sm text-dark/70">Yüksek hemen çıkma oranları (bounce rate), terk edilen sepetler ve ilk günden sonraki yüksek churn (kayıp) oranları.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-dark/10">
                  <div className="text-[#F59E0B] font-bold mb-2 flex items-center gap-2"><Search className="h-4 w-4" /> Kök Neden</div>
                  <p className="text-sm text-dark/70">İşletmenizin satmak istediği yöntem ile kullanıcının satın almak istediği yöntem arasındaki uçurum.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#10B981]/20">
                  <div className="text-[#10B981] font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Çözüm</div>
                  <p className="text-sm text-dark/70">İnsan psikolojisini iş hedeflerinizle (KPI) uyumlu hale getiren dönüşüm odaklı bir UX stratejisi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Freelance Focus) */}
        <section id="hizmetler" className="px-6 py-24 bg-white border-y border-dark/10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-3xl font-bold text-dark mb-4">SaaS & Dijital Büyüme İçin Stratejik UX Tasarımı</h2>
              <p className="text-dark/70">
                Sadece piksel itmiyorum. Kullanıcıları kazanmak, etkinleştirmek ve elde tutmak için tasarlanmış ölçeklenebilir kullanıcı deneyimi sistemleri kuruyorum.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-dark/10 bg-cream p-8 transition-all hover:border-magenta/50"
              >
                <Search className="h-8 w-8 text-magenta mb-6" />
                <h3 className="text-xl font-bold text-dark mb-3">Kapsamlı UX Denetimi (Audit)</h3>
                <p className="text-sm text-dark/70 mb-6 leading-relaxed">
                  Tahmin etmeyi bırakın. Kullanıcıların tam olarak nerede terk ettiğini bulmak için ürününüzün analitiklerini, ısı haritalarını ve kullanıcı akışlarını analiz ediyorum. Dönüşüm oranlarınızı anında artıracak önceliklendirilmiş bir "Hızlı Kazanımlar" (Quick Wins) yol haritası sunuyorum.
                </p>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-dark/10 bg-dark p-8 relative overflow-hidden shadow-xl shadow-dark/10"
              >
                <div className="absolute top-0 right-0 bg-magenta text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  En Çok Tercih Edilen
                </div>
                <Layout className="h-8 w-8 text-magenta mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">SaaS & Karmaşık Ürünler için UX Tasarımı</h3>
                <p className="text-sm text-white/70 mb-6 leading-relaxed">
                  Sürtünmesiz onboarding akışlarından sezgisel veri panellerine (dashboard). Karmaşık yazılımları, kullanıcıların sevdiği ve vazgeçemediği alışkanlık yaratan ürünlere dönüştürüyorum.
                </p>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl border border-dark/10 bg-cream p-8 transition-all hover:border-magenta/50"
              >
                <LineChart className="h-8 w-8 text-magenta mb-6" />
                <h3 className="text-xl font-bold text-dark mb-3">Landing Page UX & Dönüşüm Optimizasyonu</h3>
                <p className="text-sm text-dark/70 mb-6 leading-relaxed">
                  Açılış sayfanızın tek bir görevi var: tıklamaları müşteriye dönüştürmek. Yatırım getirinizi (ROI) en üst düzeye çıkaran yüksek dönüşümlü landing page'ler tasarlamak için davranışsal psikoloji ve A/B testi ilkelerini uyguluyorum.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="px-6 py-24 bg-cream">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-dark mb-4">"Design with Kindness" Metodolojisi</h2>
              <p className="text-dark/70">Veriyi nasıl gelire dönüştürüyoruz?</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-dark/10 -translate-y-1/2 z-0"></div>
              
              {[
                { step: "01", title: "Analiz (Bilim)", desc: "Sert verilere bakarız. Sürtünme nerede? Düşüşler nerede?" },
                { step: "02", title: "Empati (Psikoloji)", desc: "Kullanıcı araştırması ve davranışsal psikoloji ile verilerin arkasındaki 'neden'i ortaya çıkarırız." },
                { step: "03", title: "Mimari (Strateji)", desc: "Tamamen bilişsel yükü ortadan kaldırmaya odaklanan wireframe'ler ve kullanıcı akışları oluştururuz." },
                { step: "04", title: "Doğrulama (ROI)", desc: "Test eder, ölçer ve yineleriz. Metriklerinizi iyileştirmiyorsa, yayına almayız." }
              ].map((item, i) => (
                <div key={i} className="relative z-10 bg-cream pt-8 md:pt-0">
                  <div className="w-12 h-12 rounded-full bg-white border border-magenta/30 flex items-center justify-center text-magenta font-bold mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(202,0,108,0.2)]">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2 text-center md:text-left">{item.title}</h3>
                  <p className="text-sm text-dark/70 text-center md:text-left">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-24 bg-white border border-dark/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl text-dark/5 font-serif leading-none select-none">"</div>
              <p className="text-xl md:text-2xl text-dark/90 font-medium leading-relaxed mb-8 relative z-10">
                "UX.Ipek ile çalışmak yörüngemizi tamamen değiştirdi. Sadece uygulamamızı modernleştirmekle kalmadı; UX denetimi sayesinde varlığından bile haberdar olmadığımız bir ödeme sızıntısını tespit etti. Yaptığı değişiklikler dönüşüm oranımızı iki hafta içinde %47 artırdı."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="text-dark font-bold">SaaS Kurucusu</div>
                  <div className="text-sm text-primary">B2B FinTech Platformu</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolyo" className="px-6 py-24 bg-white border-t border-dark/10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-dark mb-4">Seçilmiş Çalışmalar</h2>
                <p className="text-dark/70">
                  Estetiğin ötesine geçen, iş hedeflerine hizmet eden ve kullanıcıyı merkeze alan arayüz tasarımları.
                </p>
              </div>
              <a 
                href="https://www.behance.net/ipekbolakca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Behance'te Tümünü Gör <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <a href="https://www.behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-cream border border-dark/10 group-hover:border-magenta/50 transition-colors aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent z-10 opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1600695268275-1a6478712d58?auto=format&fit=crop&q=80&w=1000" 
                    alt="SaaS Dashboard" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">SaaS</span>
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">UX/UI</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">B2B FinTech Dashboard Tasarımı</h3>
                <p className="text-sm text-dark/70">Karmaşık finansal verileri, kullanıcı dostu ve sezgisel bir arayüze dönüştürme süreci.</p>
              </a>

              {/* Project 2 */}
              <a href="https://www.behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-cream border border-dark/10 group-hover:border-magenta/50 transition-colors aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent z-10 opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000" 
                    alt="E-Commerce App" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">E-Ticaret</span>
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">CRO</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">E-Ticaret Dönüşüm Optimizasyonu</h3>
                <p className="text-sm text-dark/70">Ödeme adımı (checkout) sızıntılarını kapatarak dönüşüm oranını artıran mobil odaklı tasarım.</p>
              </a>
              
              {/* Project 3 */}
              <a href="https://www.behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-cream border border-dark/10 group-hover:border-magenta/50 transition-colors aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent z-10 opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000" 
                    alt="Mobile App" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">Mobil Uygulama</span>
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">Onboarding</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">Kripto Cüzdan Onboarding Deneyimi</h3>
                <p className="text-sm text-dark/70">Yeni kullanıcıların adaptasyon sürecini hızlandıran, güven odaklı mobil arayüz tasarımı.</p>
              </a>

              {/* Project 4 */}
              <a href="https://www.behance.net/ipekbolakca" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-cream border border-dark/10 group-hover:border-magenta/50 transition-colors aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent z-10 opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                    alt="Analytics Platform" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">Web App</span>
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-md rounded-full text-dark border border-dark/10">Design System</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">Veri Analitiği Platformu</h3>
                <p className="text-sm text-dark/70">Geniş ölçekli veri setlerinin görselleştirilmesi ve modüler tasarım sistemi (Design System) inşası.</p>
              </a>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { metric: "%15", label: "Lead Dönüşüm Artışı", desc: "Karmaşık CRM süreçlerinin optimizasyonu ile.", icon: Zap },
                { metric: "%20", label: "Daha Hızlı İşlem", desc: "SaaS modüllerinde bilgi mimarisi (IA) iyileştirmesi.", icon: BarChart3 },
                { metric: "%30", label: "Hata Minimizasyonu", desc: "Teknik ürünlerde görsel UX rehberleri ile.", icon: Target }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl border border-dark/10 bg-white p-8"
                >
                  <stat.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-4xl font-bold text-dark mb-2">{stat.metric}</h3>
                  <p className="text-sm font-medium text-dark mb-1">{stat.label}</p>
                  <p className="text-xs text-dark/70/70">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Magnet Section (The PDF) */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-cream border border-primary/20 text-dark shadow-2xl"
            >
              {/* Abstract background shapes */}
              <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-magenta blur-3xl opacity-30"></div>
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary blur-3xl opacity-20"></div>
              
              <div className="relative grid md:grid-cols-2 gap-8 p-8 sm:p-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-lg bg-magenta/10 px-3 py-1 text-xs font-medium text-magenta mb-6 backdrop-blur-sm border border-magenta/20">
                    <BookOpen className="h-3.5 w-3.5" /> Ücretsiz Strateji Rehberi
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                    E-Ticaret ve Dijital Ürünlerde "Nezaketle Tasarım" Rehberi
                  </h2>
                  <p className="text-dark/70 mb-6 text-sm sm:text-base">
                    Ürününüz nerede para kaybediyor? Checkout sızıntılarını kapatacak, gelirinizi ve kullanıcı sadakatini artıracak 5 adımlı ROI odaklı büyüme stratejisi.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      'Ödeme Adımındaki (Checkout) Gizli Sızıntılar', 
                      'Gerçek Zamanlı Veriyle Sepet Terkini Önleme', 
                      'Ajan Yapay Zeka (Agentic AI) Entegrasyonu',
                      'Bilim İnsanı Gibi A/B Testi Kurgulama'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-dark/90">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lead Capture Form */}
                <div className="bg-white/80 border border-dark/10 rounded-2xl p-6 backdrop-blur-md">
                  <h3 className="text-lg font-medium mb-2 text-dark">Rehberi Hemen İndirin</h3>
                  <p className="text-sm text-dark/70 mb-6">PDF anında e-posta adresinize gönderilecektir.</p>
                  
                  <form className="space-y-4" onSubmit={handleDownloadPDF}>
                    <div>
                      <label htmlFor="name" className="sr-only">Ad Soyad</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        placeholder="Adınız Soyadınız" 
                        className="w-full rounded-xl border border-dark/10 bg-white px-4 py-3 text-sm text-dark placeholder-zinc-500 focus:border-magenta focus:outline-none focus:ring-1 focus:ring-magenta transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">E-posta</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        placeholder="İş E-posta Adresiniz" 
                        className="w-full rounded-xl border border-dark/10 bg-white px-4 py-3 text-sm text-dark placeholder-zinc-500 focus:border-magenta focus:outline-none focus:ring-1 focus:ring-magenta transition-colors"
                      />
                    </div>
                    <button 
                      disabled={isSubmitting || isSuccess}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-magenta px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#a00055] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Hazırlanıyor...' : isSuccess ? 'İndiriliyor...' : "PDF'i Gönder"} 
                      {!isSubmitting && !isSuccess && <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />}
                    </button>
                    {isSuccess && (
                      <p className="text-sm text-emerald-400 text-center mt-2">
                        Rehberiniz indiriliyor! Ayrıca e-posta adresinize de gönderildi.
                      </p>
                    )}
                  </form>
                  <p className="text-xs text-dark/70/70 mt-4 text-center">
                    Spam göndermiyoruz. Sadece stratejik UX içgörüleri.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="deneyim" className="px-6 py-24 bg-white border-y border-dark/10">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-dark">İş Deneyimi</h2>
            </div>

            <div className="space-y-12">
              {/* Calisto */}
              <div className="relative pl-8 border-l border-dark/10">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Digital Product Designer & UX/UI</h3>
                    <p className="text-primary font-medium">Calisto Dijital Ajans</p>
                  </div>
                  <span className="text-sm text-dark/70/70 mt-2 sm:mt-0">Eyl 2025 - Şub 2026</span>
                </div>
                <ul className="space-y-3 text-dark/70 text-sm">
                  <li className="flex gap-3"><span className="text-primary">▹</span> <b>CRO & Funnel:</b> Karmaşık CRM süreçlerini analiz ederek lead dönüşüm oranını %15 artıran funnel mimarisi tasarladı.</li>
                  <li className="flex gap-3"><span className="text-primary">▹</span> <b>Bilgi Mimarisi (IA):</b> SaaS ürün modüllerinde (Intime, Mornar CRM) hiyerarşiyi yapılandırarak işlem süresini %20 kısalttı.</li>
                  <li className="flex gap-3"><span className="text-primary">▹</span> <b>AI Entegrasyonu:</b> Yapay zeka tabanlı Lead Agent projelerine stratejik yön vererek veri odaklı iş akışları kurdu.</li>
                </ul>
              </div>

              {/* Robopine */}
              <div className="relative pl-8 border-l border-dark/10">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-zinc-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark">Pazarlama & Tasarım Sorumlusu</h3>
                    <p className="text-dark/90 font-medium">Robopine</p>
                  </div>
                  <span className="text-sm text-dark/70/70 mt-2 sm:mt-0">Nis 2025 - Haz 2025</span>
                </div>
                <ul className="space-y-3 text-dark/70 text-sm">
                  <li className="flex gap-3"><span className="text-dark/70/70">▹</span> <b>Trafik Büyümesi:</b> B2B stratejisine uygun web sitesi ile organik trafikte %25, lead formlarında %10 artış.</li>
                  <li className="flex gap-3"><span className="text-dark/70/70">▹</span> <b>Design Systems:</b> Marka tutarlılığını güçlendirdi ve Design-to-Development (Handoff) geçişlerini hızlandırdı.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24 bg-cream">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[2.5rem] bg-white border border-primary/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
              
              <div className="text-center mb-10 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                  Ürününüzdeki sızıntıları kapatmaya hazır mısınız?
                </h2>
                <p className="text-dark/70 max-w-2xl mx-auto">
                  İster tam kapsamlı bir SaaS yeniden tasarımı, ister belirli bir funnel'ı düzeltmek için hedeflenmiş bir UX denetimi olsun; nerede para kaybettiğinizi ve bunu nasıl düzelteceğimizi bulalım.
                </p>
              </div>

              <div className="bg-cream border border-dark/10 rounded-2xl p-6 md:p-8 relative z-10 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-dark mb-2 text-center">Ücretsiz UX Keşif Görüşmesi Ayarla</h3>
                <p className="text-sm text-dark/70 text-center mb-8">En büyük dönüşüm darboğazınızı analiz edeceğimiz 30 dakikalık stratejik bir görüşme. Taahhüt yok, sadece aksiyon alınabilir içgörüler.</p>
                
                <div className="flex justify-center mt-4">
                  <a href="https://calendly.com/ipekbolakca/dijital-urun-yazilim-cozumleri-uzerine" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-magenta px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] shadow-lg shadow-magenta/20">
                    <Mail className="h-4 w-4" /> Takvimden Görüşme Ayarla
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Hidden PDF Content */}
      <div id="pdf-content" style={{ position: 'absolute', left: '-9999px', top: 0, width: '800px', backgroundColor: 'white', color: '#1a1a1a', padding: '40px 50px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a', lineHeight: '1.3' }}>
          Stratejik Büyüme Mimarlığı: E-Ticaret ve Dijital Ürünlerde "Nezaketle Tasarım" (Design with Kindness) Rehberi
        </h1>
        <p style={{ marginBottom: '16px', fontSize: '14px', lineHeight: '1.6' }}>
          Bu mini rehber, dijital ürünlerinizi yalnızca estetik olarak değil, yatırım getirisi (ROI) ve dönüşüm (CR) odaklı bir sistemle nasıl tasarlayacağınızı göstermek için hazırlanmıştır. Bir ürün ekibinin sadece arayüz çizen tasarımcılardan değil, veriyi empatiyle yoğuran birer "bilim insanından" oluşması gerektiği felsefesine dayanır.
        </p>
        <p style={{ marginBottom: '24px', fontSize: '14px', lineHeight: '1.6' }}>
          İşte dijital ürün ekosisteminizdeki sızıntıları kapatacak, gelirinizi ve kullanıcı sadakatini artıracak 5 adımlı büyüme stratejisi:
        </p>

        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#df7200' }}>1. Ödeme Adımındaki (Checkout) Gizli Sızıntıları Kapatın</h2>
        <p style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>Kullanıcıların satın alma niyetini gösterdiği alt huni (lower funnel), sızıntıların en maliyetli olduğu yerdir. "Nezaketle tasarım", kullanıcının işini zorlaştıran tüm engelleri ortadan kaldırmayı gerektirir:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '14px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '8px' }}><strong>Hız Her Şeydir:</strong> Ödeme sürecinin tamamlanması 90 saniyeden uzun sürdüğünde, alt huni dönüşüm oranları ortalama %47 oranında düşmektedir.</li>
          <li style={{ marginBottom: '8px' }}><strong>CAPTCHA'dan Kaçının:</strong> Güvenlik önemli olsa da, ödeme adımında kullanıcıyı yavaşlatan ve zorlayan CAPTCHA kullanımı dönüşüm oranlarını doğrudan düşürür.</li>
          <li style={{ marginBottom: '8px' }}><strong>Kupon Alanlarını Gizleyin:</strong> Ödeme sayfasında açık bırakılan indirim kodu (coupon) alanları, kullanıcıyı "acaba bir kod bulabilir miyim" düşüncesiyle sepeti terk etmeye iter ve dönüşümleri %30'a kadar düşürebilir.</li>
          <li style={{ marginBottom: '8px' }}><strong>Hızlı Ödeme Yöntemlerini Ekleyin:</strong> Apple Pay, Google Pay veya Shop Pay gibi hızlandırılmış ödeme seçenekleri sunmak, dönüşüm oranlarını %50'ye kadar artırabilmektedir. Hatta sadece Shop Pay'in sistemde bulunması bile dönüşümde %5'lik bir artış sağlar.</li>
        </ul>

        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#FF542E' }}>2. Sepet Terk Etmeyi Gerçek Zamanlı Veriyle Önleyin</h2>
        <p style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>Pek çok ekip sepeti terk eden kullanıcılara sonradan e-posta atmayı bir strateji sanır; oysa gerçek büyüme mimarları sorunu kullanıcı henüz sitedeyken çözer.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '14px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '8px' }}><strong>Zamanınız Çok Kısıtlı:</strong> Veriler, yeni kullanıcıların sepete ilk ürünü ekledikten sonra ortalama %25'inin sadece bir dakika içinde, %50'sinin ise ilk üç buçuk dakika içinde sepeti terk ettiğini göstermektedir.</li>
          <li style={{ marginBottom: '8px' }}><strong>Sepet Büyüklüğünü (Basket Building) Teşvik Edin:</strong> Kullanıcıların sepetine sadece 1-2 ürün eklemesi yerine, doğru çapraz satışlarla (cross-sell) bu sayıyı 6-10 arasına çıkardığınızda dönüşüm oranları %63'e kadar yükselebilmektedir.</li>
        </ul>

        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#FF542E' }}>3. Varsayımları Bırakın, Bilim İnsanı Gibi A/B Testi Yapın</h2>
        <p style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>Dijital mağazalar "yap ve unut" platformları değildir; müşteri eğilimleri sürekli değişir. Optimizasyon, sürekli bir deney sürecidir:</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '14px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '8px' }}><strong>Tek Değişken Kuralı:</strong> A/B testi yaparken her zaman tek bir değişkeni (örneğin sadece indirim oranını veya sadece buton rengini) test etmelisiniz; aksi takdirde başarıyı neyin getirdiğini ölçemezsiniz.</li>
          <li style={{ marginBottom: '8px' }}><strong>Ölçümleme Stratejisi:</strong> Optimizasyon hedefinizin ne olduğunu en baştan belirleyin (ürün görüntüleme, sepete ekleme veya net satış) ve mevcut performansınızı bir referans noktası (benchmark) olarak kaydedin.</li>
        </ul>

        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#FF542E' }}>4. Ajan Yapay Zeka (Agentic AI) ile Proaktif Bir Deneyim Sunun</h2>
        <p style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>Yapay zeka artık sadece basit ürün önermekten çıkıp, kullanıcının belirli yaşam hedeflerine hizmet eden "Görev Odaklı Ajanlara" (Agentic AI) dönüşüyor.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '14px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '8px' }}><strong>Bağlama Uygun Asistanlık:</strong> Klasik algoritmalar istatistiksel eşleşmelere bakarken; uzmanlaşmış yapay zeka ajanları ev tadilatı, ebeveynlik veya seyahat planlaması gibi belirli bir dikeyde kullanıcının ihtiyaçlarını çok boyutlu olarak analiz eder ve proaktif çözümler sunar.</li>
          <li style={{ marginBottom: '8px' }}><strong>Çoklu Etkileşim:</strong> Kullanıcılar sadece metinle değil; ses, görsel tanıma veya artırılmış gerçeklik (AR) üzerinden de niyetlerini belli edebilirler ve AI bu verileri işleyerek en doğal deneyimi kurgular.</li>
        </ul>

        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#FF542E' }}>5. Güven, Sadakat ve Mahremiyet (Privacy) İnşası</h2>
        <p style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>Kullanıcı deneyimi yalnızca ekranlardan ibaret değildir; kullanıcının verisine duyduğunuz saygı, "Design with Kindness" felsefesinin temelidir.</p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', fontSize: '14px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '8px' }}><strong>Veri ve Güven Korelasyonu:</strong> Tüketicilerin %50'si, verdikleri kişisel bilgilerin nasıl kullanılacağı konusunda endişe duyduklarında çevrimiçi satın alımlarını yarıda bırakmaktadır. Açık rıza (consent) almak ve GDPR gibi standartlara tam uyum sağlamak, size ciddi bir rekabet avantajı ve müşteri sadakati kazandırır.</li>
          <li style={{ marginBottom: '8px' }}><strong>Sadakat Programlarının Gücü:</strong> Gen Z ve Y kuşağının %55'i, yapay zeka ile kişiselleştirilmiş sadakat programlarına katılmaya daha isteklidir. Özellikle ortalama sepet tutarı 200 doların altında olan işletmelerde, doğru kurgulanmış bir sadakat programı alt huni dönüşümlerini %4 ila %6 oranında artırabilmektedir.</li>
        </ul>

        <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#1a1a1a' }}>Dönüşüme Hazır Mısınız?</h2>
        <p style={{ marginBottom: '16px', fontSize: '14px', lineHeight: '1.6' }}>
          Bir "Fraksiyonel Tasarım Ortağı" (Fractional Design Partner) ve Büyüme Mimarı olarak, yalnızca güzel görünen arayüzler değil; veriden beslenen, iş hedeflerinize (KPI) doğrudan etki eden ve müşterinize "nezaketle" yaklaşan uçtan uca dijital ekosistemler kuruyorum.
        </p>
        <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight: 'bold', color: '#FF542E' }}>
          Ürününüzün nerede para kaybettiğini bulmak ve ROI odaklı bir dönüşüm optimizasyonu başlatmak için benimle iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
}

