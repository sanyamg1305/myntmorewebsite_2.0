
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';
import { CALENDLY_URL } from '../constants';
import logo from '../assets/final.png';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'Case Studies', value: 'case-studies' },
    { label: 'Resources', value: 'resources' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (value: string) => {
    onNavigate(value);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBooking = () => {
    window.open(CALENDLY_URL, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFC947] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-black border-white/10 py-4' 
            : 'bg-black border-white/5 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            className="cursor-pointer text-white select-none flex items-center group relative"
            onClick={() => handleNavClick('home')}
          >
            <div className="absolute inset-0 bg-[#FFC947]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={logo} alt="Myntmore Logo" className="h-24 md:h-32 w-auto relative z-10 transition-transform group-hover:scale-105" />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`text-[10px] font-medium uppercase tracking-[0.2em] transition-all hover:text-[#FFC947] ${
                  activePage === link.value ? 'text-[#FFC947]' : 'text-white/40'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBooking}
              className="hidden md:block bg-[#FFC947] text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full"
            >
              Book Strategy Call
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.value}
                  onClick={() => handleNavClick(link.value)}
                  className="text-3xl md:text-4xl font-black text-left uppercase tracking-tighter text-white hover:text-[#FFC947]"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={handleBooking}
                className="w-full bg-[#FFC947] text-black py-4 font-black text-lg uppercase tracking-widest rounded-full"
              >
                Book a Strategy Call
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-36 md:pt-48">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 md:pt-24 pb-12 border-t border-white/5">
        <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 border-b border-white/5 pb-16 md:pb-20 mb-10">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Myntmore Logo" className="h-64 md:h-80 w-auto mb-8 transition-opacity hover:opacity-80 cursor-pointer" onClick={() => handleNavClick('home')} />
            <p className="text-white/30 text-sm leading-relaxed mb-8 max-w-xs">
              Transforming B2B pipeline with AI-driven precision and authoritative thought leadership systems.
            </p>
            <div className="flex space-x-6 mb-8">
              <motion.a 
                href="https://www.linkedin.com/company/myntmore/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#FFC947' }} 
                className="text-white/40 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/myntmore/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#FFC947' }} 
                className="text-white/40 transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
            <motion.a
              href="https://www.linkedin.com/newsletters/lessons-i-d-bet-on-7266810614394601474/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFC947] hover:text-black transition-all"
            >
              Subscribe to Newsletter
            </motion.a>
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-[#FFC947]">Services</h4>
            <ul className="space-y-4 text-white/30 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>Lead Generation</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>Demand Generation</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>Personal Branding</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('services')}>SDR Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-[#FFC947]">Company</h4>
            <ul className="space-y-4 text-white/30 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('about')}>About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('case-studies')}>Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('contact')}>Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('contact')}>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-[#FFC947]">Resources</h4>
            <ul className="space-y-4 text-white/30 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('resources')}>Growth Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('resources')}>Outbound Playbooks</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('resources')}>Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
          <p>© 2024 Myntmore Agency. Built for Scale.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
