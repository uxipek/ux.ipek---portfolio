import { useEffect } from "react";
import { motion } from "motion/react";
import { Focus, Scale, MessageSquare, Layers3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function ProcessPage({ lang }: { lang: "en" | "tr" }) {
  useEffect(() => { 
    document.title = lang === "en" ? "Process | UXIPEK" : "Süreç | UXIPEK"; 
  }, [lang]);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
        {/* Soft Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-transformation/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-transformation animate-pulse"></div>
              <span className="text-[11px] font-bold text-text-primary/70 tracking-widest uppercase">
                {lang === 'en' ? 'HOW UXIPEK WORKS' : 'UXİPEK NASIL ÇALIŞIR?'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-text-primary mb-8 tracking-tight leading-[1.1]">
              {lang === 'en' ? '“Clarity before pixels.' : '“Önce netlik, sonra tasarım.'}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-transformation to-brand-secondary font-semibold">
                {lang === 'en' ? 'Strategy before decoration.”' : 'Önce strateji, sonra görünüm.”'}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-primary/70 font-light leading-relaxed w-[min(100%-32px,850px)] mx-auto mb-12">
              {lang === 'en'
                ? '“I turn complex product and business problems into clear, usable and conversion-focused digital experiences.”'
                : '“Karmaşık ürün ve iş problemlerini net, kullanılabilir ve dönüşüm odaklı dijital deneyimlere dönüştürüyorum.”'}
            </p>

            <div className="flex items-center justify-center">
              <Link 
                to={`/${lang}/contact`} 
                className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-white transition-all rounded-full bg-brand-transformation shadow-lg shadow-brand-transformation/20 hover:-translate-y-1 hover:shadow-xl hover:bg-brand-transformation/90"
              >
                {lang === 'en' ? 'Start a Project' : 'Projenizi Başlatalım'}
              </Link>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* 2. WORKING PRINCIPLES */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center w-[min(100%-32px,850px)] mx-auto mb-16 md:mb-24">
            <h2 className="text-h2 mb-6">
              {lang === 'en' ? '“My Working Principles”' : '“Çalışma Prensiplerim”'}
            </h2>
            <p className="text-text-primary/60 text-lg md:text-xl font-light leading-relaxed">
              {lang === 'en' 
                ? '“Every project is shaped by evidence, clear communication and purposeful design decisions.”'
                : '“Her projeyi araştırma, açık iletişim ve amaca hizmet eden tasarım kararlarıyla şekillendiriyorum.”'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principle 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-background p-8 md:p-12 rounded-[2rem] border border-brand-primary/5 flex flex-col gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-transformation">
                <Focus size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">
                {lang === 'en' ? 'Clarity First' : 'Önce Netlik'}
              </h3>
              <p className="text-text-primary/70 text-lg font-light leading-relaxed">
                {lang === 'en' 
                  ? '“I define the real problem before designing the solution.”'
                  : '“Çözümü tasarlamadan önce gerçek problemi netleştiriyorum.”'}
              </p>
            </motion.div>

            {/* Principle 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-background p-8 md:p-12 rounded-[2rem] border border-brand-primary/5 flex flex-col gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-transformation">
                <Scale size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">
                {lang === 'en' ? 'User and Business Balance' : 'Kullanıcı ve İş Dengesi'}
              </h3>
              <p className="text-text-primary/70 text-lg font-light leading-relaxed">
                {lang === 'en' 
                  ? '“Design decisions should support both user needs and business goals.”'
                  : '“Tasarım kararları hem kullanıcı ihtiyaçlarına hem de iş hedeflerine hizmet etmeli.”'}
              </p>
            </motion.div>

            {/* Principle 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-background p-8 md:p-12 rounded-[2rem] border border-brand-primary/5 flex flex-col gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-transformation">
                <MessageSquare size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">
                {lang === 'en' ? 'Transparent Collaboration' : 'Şeffaf İş Birliği'}
              </h3>
              <p className="text-text-primary/70 text-lg font-light leading-relaxed">
                {lang === 'en' 
                  ? '“You see the reasoning, progress and decisions throughout the project.”'
                  : '“Proje boyunca süreci, ilerlemeyi ve alınan kararları açıkça görebilirsiniz.”'}
              </p>
            </motion.div>

            {/* Principle 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="bg-background p-8 md:p-12 rounded-[2rem] border border-brand-primary/5 flex flex-col gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-transformation">
                <Layers3 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary">
                {lang === 'en' ? 'Systems, Not Screens' : 'Ekran Değil, Sistem'}
              </h3>
              <p className="text-text-primary/70 text-lg font-light leading-relaxed">
                {lang === 'en' 
                  ? '“I create consistent and scalable experiences instead of isolated screens.”'
                  : '“Birbirinden kopuk ekranlar yerine tutarlı ve geliştirilebilir deneyim sistemleri oluşturuyorum.”'}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. HOW WE COLLABORATE */}
      <section className="py-24 md:py-32 bg-background relative border-t border-brand-primary/5">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h2 className="text-h2 mb-6">
                  {lang === 'en' ? '“Clear communication at every stage”' : '“Her aşamada açık iletişim”'}
                </h2>
                <p className="text-text-primary/70 text-lg font-light leading-relaxed mb-10">
                  {lang === 'en'
                    ? '“You always know what is being designed, why a decision was made and what comes next.”'
                    : '“Neyin tasarlandığını, kararların neden alındığını ve sırada ne olduğunu her zaman bilirsiniz.”'}
                </p>

                <ul className="space-y-6">
                  {[
                    lang === 'en' ? 'Clear scope and expectations' : 'Net kapsam ve beklentiler',
                    lang === 'en' ? 'Regular progress updates' : 'Düzenli ilerleme paylaşımları',
                    lang === 'en' ? 'Feedback at defined checkpoints' : 'Belirlenen aşamalarda geri bildirim'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-4 text-text-primary/80 font-medium text-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-brand-transformation/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-brand-transformation" strokeWidth={3} />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex-1 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] border border-brand-primary/5 shadow-xl shadow-dark/5 relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-transformation/5 blur-3xl rounded-full"></div>
                <MessageSquare className="w-12 h-12 text-brand-transformation mb-8 opacity-80" strokeWidth={1} />
                <div className="space-y-4">
                  <div className="h-2 bg-brand-primary/5 rounded-full w-3/4"></div>
                  <div className="h-2 bg-brand-primary/5 rounded-full w-full"></div>
                  <div className="h-2 bg-brand-primary/5 rounded-full w-5/6"></div>
                  <div className="h-2 bg-brand-transformation/20 rounded-full w-1/2 mt-8"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AI WITH HUMAN JUDGMENT */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-h2 !text-white mb-8">
              {lang === 'en' ? '“AI-accelerated, human-directed”' : '“Yapay zekâyla hızlanan, insan bakışıyla yönlenen”'}
            </h2>
            <p className="text-text-primary/70 text-lg md:text-xl font-light leading-relaxed w-[min(100%-32px,850px)] mx-auto">
              {lang === 'en'
                ? '“I use AI to accelerate research, exploration and production—not to replace strategic thinking. Every final decision is reviewed through user needs, business goals and design principles.”'
                : '“Yapay zekâyı stratejik düşünmenin yerine değil; araştırmayı, keşfi ve üretimi hızlandırmak için kullanıyorum. Her nihai kararı kullanıcı ihtiyaçları, iş hedefleri ve tasarım prensipleri doğrultusunda değerlendiriyorum.”'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-16 md:py-24 lg:py-32 w-full bg-brand-primary text-center relative overflow-hidden">
        {/* Soft animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-transformation/20 blur-[100px] rounded-full mix-blend-screen"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>
        <div className="w-[min(100%-32px,850px)] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-h2 !text-white mb-8">
              {lang === 'en' ? '“Ready to bring clarity to your product?”' : '“Ürününüzü daha net ve güçlü bir deneyime dönüştürmeye hazır mısınız?”'}
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 w-[min(100%-32px,850px)] mx-auto">
              {lang === 'en'
                ? '“Tell me what you are building, where users struggle and what you want to improve.”'
                : '“Ne geliştirdiğinizi, kullanıcıların nerede zorlandığını ve neyi iyileştirmek istediğinizi paylaşın.”'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to={`/${lang}/contact`} 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-white transition-all rounded-full bg-brand-transformation shadow-lg shadow-brand-transformation/20 hover:-translate-y-1 hover:shadow-xl hover:bg-brand-transformation/90"
              >
                {lang === 'en' ? 'Start a Project' : 'Projenizi Başlatalım'}
              </Link>
              <Link 
                to={`/${lang}/portfolio`} 
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-white transition-all rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1"
              >
                {lang === 'en' ? 'View My Work' : 'Projelerimi İnceleyin'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
