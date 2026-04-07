
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { CALENDLY_URL } from '../constants';

const Contact: React.FC = () => {
  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <div className="bg-black text-white pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-40 border-b border-white/10 mb-24">
        <div className="container-main">
          <h1 className="section-h1 mb-8">CONNECT</h1>
          <p className="text-xl md:text-4xl text-white/50 max-w-2xl font-light">Let's engineer your growth machine.</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="container-main grid grid-cols-1 lg:grid-cols-2 gap-32 bg-black">
        <div>
          <h2 className="section-h2 mb-12 md:mb-16">BOOK A CALL</h2>
          <div className="space-y-16 mb-24">
            <div className="flex items-start space-x-8 group">
              <div className="bg-white/5 border border-white/10 p-6 rounded-full group-hover:bg-[#FFC947] group-hover:text-black transition-colors backdrop-blur-md">
                <Calendar size={32} />
              </div>
              <div>
                <h4 className="eyebrow mb-2">Strategy Audit</h4>
                <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-colors">30-Minute Intro</p>
                <button 
                  onClick={handleBooking}
                  className="mt-6 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[#FFC947] hover:text-white transition-colors"
                >
                  Book Through Calendly <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={12} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5">
              <div className="flex items-start space-x-4">
                <Mail className="text-[#FFC947] mt-1" size={20} />
                <div>
                  <h4 className="eyebrow mb-2">DIRECT EMAIL</h4>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest break-all">growth@myntmore.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-[#FFC947]/5 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative border border-white/10 p-12 bg-white/[0.02] rounded-3xl hover:border-[#FFC947]/30 transition-all duration-700 h-[600px] flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #FFC947 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            <h3 className="section-h2 mb-4">READY?</h3>
            <p className="text-white/40 mb-12 max-w-xs font-medium uppercase tracking-[0.2em] text-[10px]">Start your revenue transformation today.</p>
            <button 
              onClick={handleBooking}
              className="bg-[#FFC947] text-black w-full py-6 font-black uppercase tracking-widest text-xs hover:bg-white transition-all rounded-full"
            >
              Secure Your Slot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
