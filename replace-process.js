import fs from 'fs';

const content = fs.readFileSync('src/App.tsx', 'utf8');

const newProcessSection = `        {/* Process Section: The Butterfly Effect of Digital Transformation */}
        <section id="process" className="relative px-6 py-32 bg-base overflow-hidden border-t border-dark/5">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="mx-auto max-w-7xl relative z-10">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-24 md:mb-32"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-dark mb-8 tracking-tight leading-[1.1]">
                The Butterfly Effect of <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca006c] to-purple font-semibold">Digital Transformation.</span>
              </h2>
              <p className="text-xl md:text-2xl text-dark/70 font-light leading-relaxed">
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
                       <stop offset="0%" stopColor="#1E293B" stopOpacity="0.1" />
                       <stop offset="50%" stopColor="#ca006c" stopOpacity="0.4" />
                       <stop offset="100%" stopColor="#ca006c" stopOpacity="0.8" />
                     </linearGradient>
                     <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#ca006c" stopOpacity="0" />
                       <stop offset="100%" stopColor="#ca006c" stopOpacity="0.6" />
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
                        <path d="M48 50 C20 10 10 30 48 50 Z" fill="#ca006c" opacity="0.9" />
                        <path d="M48 52 C20 90 10 70 48 52 Z" fill="#a00055" opacity="0.8" />
                      </motion.g>
                      <motion.g animate={{ rotateY: [0, -50, 0] }} transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }} style={{ transformOrigin: "50% 50%" }}>
                        <path d="M52 50 C80 10 90 30 52 50 Z" fill="#ca006c" opacity="0.9" />
                        <path d="M52 52 C80 90 90 70 52 52 Z" fill="#a00055" opacity="0.8" />
                      </motion.g>
                      <ellipse cx="50" cy="50" rx="2" ry="10" fill="#28002c" />
                    </svg>
                 </motion.div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-20">
                
                {/* Step 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="bg-white/60 backdrop-blur-xl border border-dark/5 p-10 rounded-[2rem] shadow-sm relative lg:-top-4"
                >
                  <div className="text-[11px] font-bold text-dark/40 uppercase tracking-widest mb-8 flex items-center justify-between">
                    <span>Phase 01</span>
                    <div className="w-2 h-2 rounded-full bg-dark/20"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4 group cursor-default">
                    Tırtıl <span className="text-dark/40 font-normal ml-1 transition-colors group-hover:text-dark/60">— Friction & Discovery</span>
                  </h3>
                  <p className="text-dark/70 leading-relaxed mb-8 font-light text-[15px]">
                    Every project begins by identifying hidden UX problems, behavioral friction, trust gaps, and conversion blockers. The goal is to understand why users hesitate, abandon, or fail to engage.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Research', 'Audit', 'User Behavior', 'Friction Mapping'].map(kw => (
                      <span key={kw} className="px-3 py-1.5 rounded-full bg-dark/5 text-dark/70 text-[11px] font-semibold border border-dark/5">
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
                  className="bg-white/80 backdrop-blur-xl border border-pink/10 p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(202,0,108,0.05)] relative lg:top-[180px]"
                >
                  <div className="text-[11px] font-bold text-pink/60 uppercase tracking-widest mb-8 flex items-center justify-between">
                    <span>Phase 02</span>
                    <div className="w-2 h-2 rounded-full bg-pink/40 shadow-[0_0_8px_rgba(202,0,108,0.5)]"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4 group cursor-default">
                    Koza <span className="text-pink/70 font-normal ml-1 transition-colors group-hover:text-pink/90">— Strategy & System Thinking</span>
                  </h3>
                  <p className="text-dark/80 leading-relaxed mb-8 font-light text-[15px]">
                    Insights are transformed into structure. Information architecture, user flows, content hierarchy, and AI-supported systems are redesigned to create clarity and strategic direction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Strategy', 'UX Architecture', 'Systems', 'AI Workflows'].map(kw => (
                      <span key={kw} className="px-3 py-1.5 rounded-full bg-pink/5 text-pink text-[11px] font-semibold border border-pink/10">
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
                  className="bg-white backdrop-blur-xl border border-purple/20 p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(202,0,108,0.1)] relative lg:-top-16"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink/5 to-purple/5 rounded-[2rem] pointer-events-none"></div>
                  <div className="text-[11px] font-bold text-purple uppercase tracking-widest mb-8 flex items-center justify-between relative z-10">
                    <span>Phase 03</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-pink shadow-[0_0_12px_rgba(202,0,108,0.8)] animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4 group cursor-default relative z-10">
                    Kelebek <span className="text-purple/80 font-normal ml-1">— Growth & Transformation</span>
                  </h3>
                  <p className="text-dark/80 leading-relaxed mb-8 font-light text-[15px] relative z-10">
                    The final experience becomes clear, intuitive, emotionally engaging, and conversion-focused. Beautiful interfaces meet measurable business growth and human-centered interaction.
                  </p>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {['Growth', 'Conversion', 'Experience', 'Transformation'].map(kw => (
                      <span key={kw} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink/10 to-purple/10 text-dark font-semibold text-[11px] border border-pink/20">
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
              className="mt-32 mb-16 text-center lg:-mt-8"
            >
              <h4 className="text-3xl md:text-5xl font-serif italic text-dark/30 tracking-tight">
                "Good design is not decoration.<br />
                <span className="text-dark/80">It is transformation."</span>
              </h4>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center mt-16 text-center"
            >
               <a href="https://calendly.com/ipekbolakca/dijital-urun-yazilim-cozumleri-uzerine" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-dark px-10 py-5 text-base font-bold text-white transition-all shadow-[0_8px_30px_rgb(30,41,59,0.2)] hover:shadow-2xl hover:-translate-y-1 hover:bg-dark/90 group">
                  Start Your Transformation <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </a>
               <p className="mt-5 text-sm md:text-base text-dark/50 font-medium">
                 Let’s turn your digital experience into a growth system.
               </p>
            </motion.div>

          </div>
        </section>
`;

const startMarker = '{/* Metaphor Section: The Problem (Caterpillar) -> Solution (Butterfly) */}';
const endMarker = '{/* Services Section */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.log("MARKERS NOT FOUND!");
  process.exit(1);
}

const newContent = content.substring(0, startIndex) + Math.random() + "\\n" + newProcessSection + "\\n        " + content.substring(endIndex);

// I'll skip Math.random() to make it cleaner.
const finalContent = content.substring(0, startIndex) + newProcessSection + "\\n        " + content.substring(endIndex);

fs.writeFileSync('src/App.tsx', finalContent);
