
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import { SERVICES, CALENDLY_URL } from '../constants';

const Services: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const serviceGroups = [
    {
      name: 'Lead Generation',
      items: ['LinkedIn Lead Generation', 'Cold Emailing']
    },
    {
      name: 'Thought Leadership',
      items: ['LinkedIn Personal Branding', 'Instagram Personal Branding']
    },
    {
      name: 'Content & Strategy',
      items: ['Email Newsletters', 'Podcast Management', 'Fractional CMO']
    }
  ];

  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank');
  };

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
              SERVICES
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-h1 mb-6"
            >
              Modular Growth Solutions
            </motion.h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl font-medium leading-relaxed">
              Structured execution for B2B revenue teams. No fluff, just scalable systems designed for performance.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
              className="mt-12 bg-[#FFC947] text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center group"
            >
              EXPLORE MORE <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Grouped Services */}
      <section className="py-24 md:py-32 bg-black border-b border-white/10 scroll-mt-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4 space-y-12 md:space-y-20">
              <h2 className="section-h2 border-b-4 border-[#FFC947] pb-4 md:pb-6 inline-block">SOLUTIONS</h2>
              {serviceGroups.map(group => (
                <div key={group.name} className="space-y-8">
                  <h4 className="eyebrow mb-4">{group.name}</h4>
                  <ul className="space-y-6">
                    {group.items.map(item => (
                      <li key={item} className="text-2xl md:text-3xl font-black tracking-tighter flex items-center group cursor-pointer hover:text-[#FFC947] transition-colors">
                        <ArrowRight className="mr-3 md:mr-4 text-[#FFC947] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="lg:col-span-8 space-y-24 md:space-y-48">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="eyebrow mb-4">Module 0{i+1}</div>
                  <h3 className="section-h2 mb-8 md:mb-10 group-hover:text-[#FFC947] transition-colors">{service.title}</h3>
                  <p className="text-lg md:text-xl text-white/40 mb-10 md:mb-12 leading-relaxed max-w-2xl font-medium">
                    {service.description} We focus on high-impact strategies that translate directly into meetings and qualified pipeline.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {service.details?.map(detail => (
                      <div key={detail} className="flex items-center space-x-4 text-xs font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                        <Check className="text-[#FFC947]" size={20} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {service.ctaUrl && (
                    <div className="mb-12">
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={service.ctaUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-[#FFC947] text-black font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-all group rounded-full"
                      >
                        Explore Strategy <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                      </motion.a>
                    </div>
                  )}

                  <div className="border-t border-white/10 pt-12">
                    <h5 className="eyebrow mb-8">Systematic Process</h5>
                    <div className="flex flex-wrap gap-8">
                      {['Analysis', 'Setup', 'Launch', 'Optimize', 'Scale'].map((p, idx) => (
                        <div key={p} className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest group">
                          <span className="text-[#FFC947] font-black">{idx + 1}.</span>
                          <span className="text-white/40 group-hover:text-white transition-colors">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black text-white py-32 md:py-48 border-t border-white/10">
        <div className="container-main max-w-5xl">
          <div className="flex items-center space-x-4 md:space-x-6 mb-16 md:mb-24">
            <HelpCircle className="text-[#FFC947] w-10 h-10 md:w-12 md:h-12" />
            <h2 className="section-h2">QUESTIONS</h2>
          </div>
          <div className="space-y-16">
            {[
              { q: 'How quickly will we see results?', a: 'Typically we see initial engagement and meetings within the first 30 days, with full system maturity at 90 days.' },
              { q: 'Do you work with startups?', a: 'Yes, we work with Seed to Series C startups and established enterprise teams looking for specialized growth execution.' },
              { q: 'How involved do I need to be?', a: 'We are a "done-for-you" agency. We require minimal strategic input, then our team handles the heavy lifting of execution.' },
              { q: 'Which markets do you specialize in?', a: 'Our primary expertise lies in B2B SaaS, Fintech, Professional Services, and Tech-enabled agencies.' },
              { q: 'What is your pricing model?', a: 'We work on a monthly retainer basis with performance-based incentives for long-term partners.' },
            ].map((faq, i) => (
              <div key={i} className="group border-b border-white/10 pb-12 md:pb-16">
                <h4 className="text-xl md:text-4xl font-black mb-6 md:mb-8 flex justify-between items-center cursor-pointer hover:text-[#FFC947] transition-all uppercase tracking-tight">
                  {faq.q}
                </h4>
                <p className="text-white/40 leading-relaxed text-base md:text-lg max-w-3xl font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 text-center bg-black border-t border-white/10">
        <h2 className="section-h2 mb-12 md:mb-16">START BUILDING</h2>
        <button 
          onClick={handleBooking}
          className="bg-[#FFC947] text-black px-12 md:px-16 py-6 md:py-8 text-xs md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-white transition-all duration-300 rounded-full"
        >
          Book Your Audit
        </button>
      </section>
    </div>
  );
};

export default Services;
