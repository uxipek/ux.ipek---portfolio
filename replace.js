import fs from 'fs';

const content = fs.readFileSync('src/App.tsx', 'utf8');

const startMarker = '{/* Hero Section */}';
const endMarker = '{/* Metaphor Section: The Problem (Caterpillar) -> Solution (Butterfly) */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.log("MARKERS NOT FOUND!");
  process.exit(1);
}

const newHero = `        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#FDFBF8] min-h-[100vh] flex items-center pt-32 pb-24">
          {/* Ambient Background Magic */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Soft pink top-right glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-pink/10 blur-[150px] rounded-full"></div>
            {/* Soft purple bottom-left glow */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple/10 blur-[150px] rounded-full"></div>
            
            {/* Elegant light trails behind butterfly */}
            <svg viewBox="0 0 1000 1000" className="absolute top-0 right-0 w-[120%] h-[120%] opacity-40">
              <defs>
                <linearGradient id="trailGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ca006c" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ca006c" stopOpacity="0.2" />
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
                key={\`petal-\${i}\`}
                className="absolute w-3 h-2 rounded-[50%_0_50%_0] bg-gradient-to-br from-pink to-pink/40 blur-[1px]"
                style={{
                  left: \`\${60 + Math.random() * 40}%\`,
                  top: \`\${10 + Math.random() * 80}%\`,
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

          <div className="mx-auto max-w-7xl px-6 w-full relative z-10 flex flex-col lg:flex-row items-center mt-6 lg:mt-0">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[55%] pt-10 pb-12 lg:pb-0 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-pink"></div>
                  <span className="text-[11px] font-bold text-dark/50 tracking-[0.2em] uppercase">
                    AI-Native UX/UI Designer & Growth Strategist
                  </span>
                </div>
                
                <h1 className="text-6xl sm:text-7xl lg:text-[4.5rem] font-medium tracking-tight text-dark mb-8 leading-[1.05]">
                  I design digital<br />experiences that<br />turn <span className="text-pink font-semibold">clarity into growth.</span>
                </h1>
                
                <p className="text-lg sm:text-lg text-dark/70 mb-12 leading-relaxed font-light max-w-[480px]">
                  UX.Ipek helps startups, SaaS products, and AI-powered businesses build digital systems that are not only beautiful — but strategic, usable, and conversion-focused.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-20 md:mb-24">
                  <a href="https://calendly.com/ipekbolakca/dijital-urun-yazilim-cozumleri-uzerine" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-2xl bg-pink px-8 py-4 text-sm font-bold text-white transition-all shadow-[0_8px_30px_rgb(202,0,108,0.3)] hover:shadow-[0_8px_40px_rgb(202,0,108,0.5)] hover:-translate-y-1 hover:bg-pink/90">
                    Book a UX Audit <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href="#portfolio" className="flex items-center justify-center gap-3 rounded-2xl border border-dark/10 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-bold text-dark transition-all hover:bg-white hover:-translate-y-1 shadow-sm">
                    View My Work <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Micro Features Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:max-w-3xl">
                  {[
                    { icon: LineChart, title: "Growth Focused", desc: "Design that drives real business results." },
                    { icon: Users, title: "Human Centered", desc: "Empathy-led experiences your users love." },
                    { icon: BrainCircuit, title: "AI Accelerated", desc: "Smart workflows for faster, better outcomes." },
                    { icon: BarChart3, title: "Data Driven", desc: "Decisions backed by insight and testing." }
                  ].map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex flex-col gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    >
                      <div className="w-10 h-10 rounded-2xl bg-pink/10 flex items-center justify-center text-pink shadow-sm">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-[13px] font-bold text-dark">{feature.title}</h4>
                      <p className="text-[11px] text-dark/50 leading-relaxed lg:pr-2">{feature.desc}</p>
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
                        <stop offset="30%" stopColor="#ca006c" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="#28002c" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#0B0014" stopOpacity="1" />
                      </radialGradient>
                      <radialGradient id="wingPattern" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ca006c" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0f0011" stopOpacity="1" />
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
                          stroke="#0B0014" strokeWidth="8"
                        />
                        {/* Lower Left Wing */}
                        <path 
                          d="M -5 20 C -150 150 -350 250 -380 400 C -400 500 -250 550 -100 450 C -20 350 0 150 -5 20 Z" 
                          fill="url(#wingGlow)" 
                          stroke="#0B0014" strokeWidth="6"
                        />
                        
                        {/* Wing Details / Veins */}
                        <path d="M -15 -10 C -100 -100 -200 -200 -300 -250" stroke="#0B0014" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M -15 -10 C -150 -50 -300 -100 -400 -150" stroke="#0B0014" strokeWidth="4" fill="none" opacity="0.8" />
                        <path d="M -15 -10 C -100 50 -200 100 -280 50" stroke="#0B0014" strokeWidth="4" fill="none" opacity="0.8" />
                        
                        <path d="M -10 30 C -100 150 -200 250 -250 350" stroke="#0B0014" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M -10 30 C -50 200 -100 350 -150 450" stroke="#0B0014" strokeWidth="4" fill="none" opacity="0.8" />
                        
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
                          stroke="#0B0014" strokeWidth="8"
                        />
                        {/* Lower Right Wing */}
                        <path 
                          d="M 5 20 C 150 150 350 250 380 400 C 400 500 250 550 100 450 C 20 350 0 150 5 20 Z" 
                          fill="url(#wingGlow)" 
                          stroke="#0B0014" strokeWidth="6"
                        />
                        
                        {/* Wing Details / Veins */}
                        <path d="M 15 -10 C 100 -100 200 -200 300 -250" stroke="#0B0014" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M 15 -10 C 150 -50 300 -100 400 -150" stroke="#0B0014" strokeWidth="4" fill="none" opacity="0.8" />
                        <path d="M 15 -10 C 100 50 200 100 280 50" stroke="#0B0014" strokeWidth="4" fill="none" opacity="0.8" />
                        
                        <path d="M 10 30 C 100 150 200 250 250 350" stroke="#0B0014" strokeWidth="5" fill="none" opacity="0.8" />
                        <path d="M 10 30 C 50 200 100 350 150 450" stroke="#0B0014" strokeWidth="4" fill="none" opacity="0.8" />
                        
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
                        <path d="M -5 -90 C -20 -150 -80 -200 -100 -180" stroke="#0B0014" strokeWidth="4" fill="none" />
                        <path d="M 5 -90 C 20 -150 80 -200 100 -180" stroke="#0B0014" strokeWidth="4" fill="none" />
                        <circle cx="-100" cy="-180" r="4" fill="#0B0014" />
                        <circle cx="100" cy="-180" r="4" fill="#0B0014" />
                        
                        {/* Center Body */}
                        <ellipse cx="0" cy="-50" rx="12" ry="40" fill="#0B0014" />
                        <ellipse cx="0" cy="40" rx="10" ry="80" fill="#0B0014" />
                      </g>
                    </g>
                  </svg>
                </motion.div>

                {/* Transform Path on the Right Edge */}
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 h-[500px] w-[200px] z-30 pointer-events-none">
                  <div className="h-full w-full relative">
                    <svg className="absolute inset-0 w-full h-full" overflow="visible">
                      <path d="M 120 400 C 60 300 60 200 140 100" stroke="#1E293B" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" fill="none" />
                    </svg>

                    <div className="absolute top-[80%] left-[103px] flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink shadow-[0_0_10px_#ca006c]"></div>
                      <div>
                        <p className="text-[#ca006c] font-bold text-[12px] tracking-wide">1. Tırtıl</p>
                        <p className="text-dark/50 text-[9px] uppercase font-semibold">Problem & Friction</p>
                      </div>
                    </div>

                    <div className="absolute top-[50%] left-[53px] flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink/60 shadow-[0_0_10px_#ca006c]"></div>
                      <div>
                        <p className="text-[#ca006c] font-bold text-[12px] tracking-wide">2. Koza</p>
                        <p className="text-dark/50 text-[9px] uppercase font-semibold">Analysis & Strategy</p>
                      </div>
                    </div>

                    <div className="absolute top-[20%] left-[123px] flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink shadow-[0_0_15px_#ca006c]"></div>
                      <div>
                        <p className="text-[#ca006c] font-bold text-[12px] tracking-wide">3. Kelebek</p>
                        <p className="text-dark/50 text-[9px] uppercase font-semibold leading-tight mt-0.5">Growth &<br/>Transformation</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 animate-pulse hidden lg:flex">
            <span className="text-[10px] uppercase tracking-widest text-dark/40 font-semibold">Scroll to explore</span>
            <ChevronRight className="h-4 w-4 text-dark/40 rotate-90" />
          </div>
        </section>
`;

const newContent = content.substring(0, startIndex) + newHero + content.substring(endIndex);
fs.writeFileSync('src/App.tsx', newContent);
