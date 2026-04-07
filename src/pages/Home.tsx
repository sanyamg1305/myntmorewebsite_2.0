
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Target, Search, Users, Settings, MessageSquare, LineChart, ChevronRight, BarChart3, Binary, ShieldCheck } from 'lucide-react';
import { SERVICES, CALENDLY_URL } from '../constants';
import tajLogo from '../assets/taj.png';
import weworkLogo from '../assets/wework.png';
import sunpharmaLogo from '../assets/sunpharma.png';
import tanishqLogo from '../assets/tanishq.png';
import LogoMarquee from '../components/LogoMarquee';

const CLIENT_LOGOS = [tajLogo, weworkLogo, sunpharmaLogo, tanishqLogo, tajLogo, weworkLogo, sunpharmaLogo, tanishqLogo];

const HeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black">
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    <motion.div
      animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-[#FFC947]/10 rounded-full blur-[120px]"
    />
  </div>
);

const SectionHeading: React.FC<{ children: React.ReactNode; eyebrow?: string; description?: string; center?: boolean }> = ({ children, eyebrow, description, center }) => (
  <div className={`mb-16 md:mb-24 ${center ? 'text-center mx-auto max-w-3xl' : ''}`}>
    {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
    <h2 className="section-h2">{children}</h2>
    {description && <p className="text-xl text-white/40 font-medium mt-4">{description}</p>}
  </div>
);

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const handleBooking = () => window.open(CALENDLY_URL, '_blank');

  const qualificationCards = [
    { text: "You are a B2B founder struggling with inconsistent pipeline", icon: Users },
    { text: "Your outbound efforts are running but not converting", icon: Target },
    { text: "You are generating traffic but not enough qualified leads", icon: Zap },
    { text: "You do not have a structured growth system", icon: Settings },
  ];

  const systemSteps = [
    {
      name: "ICP",
      explanation: "Define exactly who you should target",
      outcome: "Higher quality leads",
      icon: Search
    },
    {
      name: "Messaging",
      explanation: "Craft positioning that resonates",
      outcome: "Better response rates",
      icon: MessageSquare
    },
    {
      name: "Conversion",
      explanation: "Optimize funnel and close loops",
      outcome: "More revenue per lead",
      icon: LineChart
    }
  ];

  const callSteps = [
    {
      id: "Breakdown",
      desc: "We analyze your current funnel and identify where you are losing potential revenue",
      icon: BarChart3
    },
    {
      id: "Diagnosis",
      desc: "We pinpoint gaps in ICP, messaging, outreach, and conversion",
      icon: Binary
    },
    {
      id: "Direction",
      desc: "You walk away with clear next steps to improve your pipeline",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-black text-white" ref={targetRef}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative py-20 overflow-hidden">
        <HeroBackground />
        <div className="container-main relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div style={{ opacity, y }}>
              <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-black text-[#FFC947] mb-12">
                <div className="w-2 h-2 rounded-full bg-[#FFC947] animate-pulse" />
                <span>B2B Growth Engine 2.0</span>
              </div>

              <h1 className="section-h1">
                We build predictable <br />
                <span className="text-[#FFC947]">B2B growth systems</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/40 max-w-2xl mb-12 font-medium leading-relaxed">
                Hyper-segmented outbound, authoritative thought leadership, and modular growth systems for ambitious B2B founders.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-24">
                <button 
                  onClick={handleBooking}
                  className="bg-[#FFC947] text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300"
                >
                  Book Strategy Audit
                </button>
                <button 
                  onClick={() => onNavigate('services')}
                  className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
                >
                  View Solutions
                </button>
              </div>

              {/* Trust Strip */}
              <div className="border-t border-white/5 pt-12">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Trusted by 200+ High-Growth Companies</p>
                <div className="w-screen -ml-6 md:-ml-[calc((100vw-min(1280px,100vw-3rem))/2)] overflow-hidden">
                   <LogoMarquee logos={CLIENT_LOGOS} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHO THIS IS FOR */}
      <section className="py-40 border-y border-white/5 bg-white/[0.01]">
        <div className="container-main">
          <SectionHeading eyebrow="WHO THIS IS FOR" description="We specialize in supporting founders who have moved past the 'hustle' phase and are ready for professional growth infrastructure.">
            Built for founders who want <br />
            <span className="text-[#FFC947]">predictable growth</span>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualificationCards.map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-6 p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-[#FFC947]/30 hover:bg-white/[0.04] transition-all group"
              >
                <card.icon className="text-[#FFC947] shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" size={28} />
                <p className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white/70 group-hover:text-white transition-colors">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW THE SYSTEM WORKS */}
      <section className="py-40 bg-black">
        <div className="container-main">
          <SectionHeading eyebrow="HOW IT WORKS" center>
            A structured system for <span className="text-[#FFC947]">predictable pipeline</span>
          </SectionHeading>

          <div className="relative">
            {/* Connection Line Desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {systemSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-black border border-white/10 p-10 rounded-[2.5rem] relative group hover:border-[#FFC947]/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FFC947]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <step.icon size={24} className="text-[#FFC947]" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{step.name}</h3>
                  <p className="text-white/40 font-medium mb-8 leading-relaxed">{step.explanation}</p>
                  
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#FFC947] mb-2">Outcome</div>
                    <div className="text-sm font-bold text-white">{step.outcome}</div>
                  </div>

                  {i < systemSteps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block text-white/10">
                      <ChevronRight size={32} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Contextual Break */}
      <section className="py-40 border-t border-white/5">
        <div className="container-main">
          <SectionHeading eyebrow="OUR SOLUTIONS" description="Modular execution for B2B brands that refuse to settle for average conversion rates.">
            SYSTEM <span className="text-[#FFC947]">COMPONENTS</span>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, index) => (
              <div key={service.id} className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl hover:border-[#FFC947]/50 transition-all group">
                <div className="text-[10px] font-black text-white/20 mb-8">0{index + 1}</div>
                <h3 className="text-xl font-black mb-6 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-white/40 text-sm mb-12 leading-relaxed">{service.description}</p>
                <button onClick={() => onNavigate('services')} className="text-[10px] font-black text-[#FFC947] flex items-center tracking-widest">
                  LEARN MORE <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT HAPPENS ON A CALL */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="eyebrow mb-6">STRATEGY CALL</span>
            <h2 className="section-h2 mb-8">What happens when you book a call</h2>
            <p className="text-2xl text-white/50 font-medium italic">
              "This is not a sales pitch. It is a working session focused on your growth."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {callSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full border border-[#FFC947]/30 flex items-center justify-center font-black text-xs text-[#FFC947]">
                    0{i + 1}
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter">{step.id}</h4>
                </div>
                <p className="text-lg text-white/40 leading-relaxed font-medium pl-14">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
              className="bg-[#FFC947] text-black px-16 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_50px_rgba(255,201,71,0.2)]"
            >
              Book a Strategy Call
            </motion.button>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mt-8">
              Get clarity on what is holding back your growth
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
