
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, BookOpen, Clock, Tag, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { BLOG_POSTS, TOOLS } from '../constants';

const Resources: React.FC<{ onSelectBlog?: (id: string) => void }> = ({ onSelectBlog }) => {
  return (
    <div className="bg-black text-white pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-40 border-b border-white/10 mb-24">
        <div className="container-main">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow mb-4 inline-block"
          >
            RESOURCES
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-h1 mb-6"
          >
            Growth Playbooks and Insights
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/40 max-w-2xl font-light">The tactical frameworks we use to scale B2B brands.</p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container-main mb-32 md:mb-48">
        <h2 className="section-h2 mb-12 md:mb-16">THE GROWTH BLOG</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              onClick={() => onSelectBlog && onSelectBlog(post.id)}
              className="group cursor-pointer"
            >
              <div className="border border-white/10 p-10 md:p-14 hover:border-[#FFC947]/50 bg-white/[0.02] transition-all duration-500 rounded-[2rem] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="eyebrow tracking-[0.4em] text-[10px]">{post.category}</span>
                    <ArrowRight size={16} className="text-[#FFC947] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-10 leading-[1.1] group-hover:text-[#FFC947] transition-colors uppercase tracking-tight">
                    {post.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-center text-[10px] text-white/30 uppercase font-black tracking-[0.3em] pt-8 border-t border-white/5">
                  <span className="flex items-center"><Clock size={12} className="mr-2 text-[#FFC947]/50" /> {post.readTime || '5 MIN'}</span>
                  <span className="flex items-center"><Tag size={12} className="mr-2 text-[#FFC947]/50" /> {post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="container-main mb-32 md:mb-48">
        <div className="flex items-center space-x-4 mb-4">
          <Sparkles className="text-[#FFC947]" size={20} />
          <span className="eyebrow !mb-0">FREE GROWTH TOOLS</span>
        </div>
        <h2 className="section-h2 mb-12 md:mb-16">TOOLS TO TRY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOOLS.map((tool) => (
            <a 
              key={tool.id} 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#FFC947]/[0.02] border border-white/10 p-10 rounded-[2.5rem] hover:border-[#FFC947] transition-all duration-500 h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#FFC947]/10 transition-colors">
                    <ExternalLink size={20} className="text-[#FFC947] opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-[#FFC947] transition-colors">{tool.title}</h3>
                <p className="text-white/40 font-medium leading-relaxed mb-8 flex-grow">
                  {tool.description}
                </p>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFC947] flex items-center">
                  LAUNCH TOOL <ArrowRight size={12} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-main text-center">
        <div className="bg-[#FFC947] p-24 md:p-32 rounded-3xl text-black">
          <Mail className="mx-auto mb-8" size={48} />
          <h2 className="section-h1 mb-8 text-4xl lg:text-8xl">JOIN THE LIST</h2>
          <p className="text-lg md:text-xl font-black mb-12 max-w-xl mx-auto opacity-70 uppercase tracking-tight">Growth systems and outbound scripts delivered weekly.</p>
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="YOUR WORK EMAIL"
              className="px-8 py-5 flex-grow bg-black/10 border border-black/20 rounded-full font-black text-xs uppercase tracking-widest placeholder:text-black/30 focus:outline-none focus:border-black"
            />
            <button className="bg-black text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
