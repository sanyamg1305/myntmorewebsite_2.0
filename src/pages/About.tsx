
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Award, GraduationCap, Quote, Users, BarChart3, Binary } from 'lucide-react';
import founderImg from '../assets/finaltjimage.png';

const About: React.FC = () => {
  const stats = [
    { label: 'Pipeline Managed', value: '$100M+', icon: Target },
    { label: 'Outbound Scale', value: '1M+', icon: Zap },
    { label: 'Avg ROI', value: '4.5x', icon: BarChart3 }
  ];

  const credentials = [
    { text: 'TEDx Speaker', icon: Award },
    { text: 'Professor at IIM Ahmedabad', icon: GraduationCap },
    { text: 'Professor at IIM Bangalore', icon: GraduationCap },
    { text: 'Professor at ISB Mumbai', icon: GraduationCap },
  ];

  return (
    <div className="bg-black text-white pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-40 border-b border-white/10">
        <div className="container-main">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow mb-4 inline-block"
            >
              ABOUT THE FOUNDER
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-h1 mb-6"
            >
              Tejas Jhaveri: <br />
              <span className="text-[#FFC947]">Architect of Growth</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl font-medium leading-relaxed">
              Entrepreneur, Angel Investor, and Professor. Building systems where psychology meets high-performance engineering.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-12"
            >
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition-colors group">
                  <cred.icon size={16} className="text-[#FFC947] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{cred.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 md:py-48 bg-black overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFC947]/20 to-transparent blur-3xl rounded-full opacity-50" />
                <div className="relative border border-white/10 p-4 rounded-[2rem] bg-white/[0.01] backdrop-blur-sm">
                  <img 
                    src={founderImg} 
                    alt="Tejas Jhaveri" 
                    className="w-full h-auto rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-black border border-white/10 p-8 rounded-3xl hidden md:block max-w-[240px]">
                    <Quote className="text-[#FFC947] mb-4" size={32} />
                    <p className="text-sm font-medium text-white/60 leading-relaxed italic">
                      "Identifying what is not working and fixing it with precision is where the real growth begins."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="h-px w-12 bg-[#FFC947]" />
                  <span className="eyebrow">The Journey</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">
                  From Zero to <span className="text-[#FFC947]">$3M+</span> <br />
                  and 12,000 Orders/Day
                </h2>
                <div className="prose prose-invert prose-lg max-w-none text-white/50 space-y-6 font-medium leading-relaxed">
                  <p>
                    Hey there! I am <span className="text-white">Tejas Jhaveri</span>, a self-inspired entrepreneur who started an incredible journey with my eCommerce company <span className="text-white border-b border-white/20">Flintstop.com</span> from zero in 2014 and scaled it to more than 3 million dollars in revenue and 12,000 orders a day.
                  </p>
                  <p>
                    As an Angel Investor and TEDx speaker, I have spent years visualizing ideas and turning them into scalable realities. Beyond the numbers, what truly drives me is understanding the <span className="text-[#FFC947]">reason</span> behind every customer action. I focus on the psychology, emotion, and decision-making process that takes a customer from curiosity to conversion.
                  </p>
                  <p>
                    I do not just look at metrics. I study customer personas, behavior patterns, and decision triggers to build systems that not only attract users but convert them consistently.
                  </p>
                  <p>
                    Over the years, I have mentored and implemented growth strategies for more than <span className="text-white font-bold">200 D2C and SaaS companies</span>. Through this, I have helped businesses redesign their customer journeys, fix hidden conversion gaps, scale their acquisition channels, and build predictable revenue engines that sustain long-term growth.
                  </p>
                </div>
              </div>

              <div className="space-y-10 pt-16 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="h-px w-12 bg-[#FFC947]" />
                  <span className="eyebrow">What I Do Today</span>
                </div>
                <div className="grid grid-cols-1 gap-12">
                  <div className="group">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center group-hover:text-[#FFC947] transition-colors">
                      <Binary className="mr-4 text-[#FFC947]" size={24} />
                      Systems-First Growth
                    </h3>
                    <p className="text-lg text-white/40 leading-relaxed font-medium">
                      Through <span className="text-white">Myntmore</span>, I work closely with founders and growth teams to bring clarity and structure to growth. The focus is not on quick wins or temporary hacks. The goal is to build systems where product, positioning, and customer psychology work together so that every interaction has a higher chance of becoming revenue.
                    </p>
                  </div>
                  
                  <div className="bg-[#FFC947]/5 border border-[#FFC947]/20 p-10 rounded-3xl">
                    <p className="text-xl md:text-2xl font-bold text-white leading-relaxed tracking-tight group">
                      "If your business is facing inconsistent sales, low conversion rates, or a lack of clear direction, <span className="text-[#FFC947]">the problem is often not effort but structure.</span>"
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="group p-6 rounded-2xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                    <stat.icon className="text-[#FFC947] mb-6 opacity-40 group-hover:opacity-100 transition-opacity" size={28} />
                    <div className="text-3xl font-black mb-2 tracking-tighter">{stat.value}</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
