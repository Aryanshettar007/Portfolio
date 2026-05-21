import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Handle scroll for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (lenis) {
        lenis.scrollTo(`#${id}`);
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Qualification', id: 'qualification' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      <nav 
        className={`
            relative flex items-center justify-between px-6 
            transition-all duration-300
            ${scrolled 
                ? 'w-[95%] lg:w-[92%] xl:w-[85%] h-16 rounded-full bg-white/40 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.45),_inset_0_-1.5px_2.5px_rgba(0,0,0,0.05),_0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.15),_inset_0_-1.5px_2.5px_rgba(0,0,0,0.3),_0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl' 
                : 'w-full max-w-7xl h-20 bg-transparent border-transparent'
            }
        `}
      >
        {/* Ambient liquid blobs */}
        {scrolled && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none -z-10 opacity-40 dark:opacity-30">
            <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-full blur-xl animate-[pulse_8s_infinite_alternate]" />
            <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-full blur-xl animate-[pulse_6s_infinite_alternate-reverse]" />
          </div>
        )}

        <motion.div 
          className="text-2xl font-display font-bold text-gradient cursor-pointer flex items-center gap-0.5"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial="initial"
          animate={scrolled ? "hover" : "initial"}
          whileHover="hover"
        >
          
          <img 
            src="/My%20DP.jpg" 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover mr-2 shadow-sm border border-zinc-200 dark:border-zinc-800" 
          />
          <motion.span layout>A</motion.span>
          <motion.div 
            className="flex overflow-hidden"
            variants={{ hover: { transition: { staggerChildren: 0.05 } } }}
          >
            {"ryan".split("").map((l, i) => (
               <motion.span 
                 key={i} 
                 variants={{ initial: { width: 0, opacity: 0 }, hover: { width: "auto", opacity: 1 } }}
               >
                 {l}
               </motion.span>
            ))}
          </motion.div>
          
          <motion.span layout>S</motion.span>
          <motion.div 
            className="flex overflow-hidden"
            variants={{ hover: { transition: { staggerChildren: 0.05 } } }}
          >
            {"hettar".split("").map((l, i) => (
               <motion.span 
                 key={i} 
                 variants={{ initial: { width: 0, opacity: 0 }, hover: { width: "auto", opacity: 1 } }}
               >
                 {l}
               </motion.span>
            ))}
          </motion.div>
   
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-xs xl:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
          
          <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800" />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-zinc-300" /> : <Moon size={18} className="text-zinc-600" />}
          </button>

          <a
            href="/Resume-Aryan.pdf"
            download="Resume-Aryan.pdf"
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
          >
            <span>Resume</span>
            <Download size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                {theme === 'dark' ? <Sun size={20} className="text-zinc-300" /> : <Moon size={20} className="text-zinc-600" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X size={24} className="text-zinc-900 dark:text-white" /> : <Menu size={24} className="text-zinc-900 dark:text-white" />}
            </button>
        </div>

        {/* Mobile Menu (Glass Modal) */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="absolute top-20 right-0 left-0 mx-4 p-4 rounded-2xl bg-white/50 dark:bg-black/40 border border-white/40 dark:border-white/10 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.45),_0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.15),_0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl lg:hidden"
            >
                <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => scrollToSection(link.id)}
                        className="w-full text-left p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-200 font-medium transition-colors"
                    >
                        {link.name}
                    </button>
                ))}
                <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
                <a
                    href="/Resume-Aryan.pdf"
                    download="Resume-Aryan.pdf"
                    className="flex justify-center items-center gap-2 w-full p-3 bg-indigo-600 text-white rounded-xl font-medium"
                >
                    Download Resume
                </a>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
