
import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  return (
    <div className="bg-black text-white pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-40 border-b border-white/10">
        <div className="container-main">
          <h1 className="section-h1 mb-8">EVIDENCE</h1>
          <p className="text-xl md:text-4xl text-white/50 max-w-2xl font-light">Real metrics. Scalable growth. Zero fluff.</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-white/10 p-12 hover:border-[#FFC947] bg-white/[0.02] transition-all duration-500 group cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <div className="eyebrow mb-6 md:mb-8">{cs.category}</div>
                  <div className="section-h2 mb-4 md:mb-6">{cs.metric}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-white/80 group-hover:text-white transition-colors">{cs.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
