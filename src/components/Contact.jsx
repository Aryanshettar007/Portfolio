import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "aryanshettar007@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Background Gradients */}
       <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-indigo-100/50 to-transparent dark:from-indigo-950/30 dark:to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium"
        >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Currently available for freelance
        </motion.div>
        
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-zinc-900 dark:text-white mb-10 leading-tight tracking-tight"
        >
            Let's build something <br/>
            <span className="text-gradient">extraordinary.</span>
        </motion.h2>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 p-2 pl-6 bg-white dark:bg-zinc-900 rounded-full shadow-2xl border border-zinc-200 dark:border-zinc-800 hover:scale-105 transition-transform duration-300"
        >
            <span className="text-lg md:text-xl font-medium text-zinc-800 dark:text-zinc-200">{email}</span>
            <button 
                onClick={handleCopy}
                className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30"
                aria-label="Copy email"
            >
                {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
        </motion.div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-6">
             <a 
                href="https://www.instagram.com/aryan_shettar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
             >
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                    <Instagram size={24} />
                </div>
                <span className="text-sm font-medium">Instagram</span>
            </a>
             <a 
                href="https://www.linkedin.com/in/aryan-shettar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
             >
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
            </a>
             <a 
                href="https://github.com/Aryanshettar007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
             >
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                    <Github size={24} />
                </div>
                <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="mailto:aryanshettar007@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                </div>
                <span className="text-sm font-medium">Email</span>
            </a>
            <a 
                href="https://leetcode.com/u/aryanshettar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                    <img src="https://cdn.simpleicons.org/leetcode" alt="LeetCode" className="w-6 h-6 dark:invert" />
                </div>
                <span className="text-sm font-medium">LeetCode</span>
            </a>
            <a 
                href="https://www.geeksforgeeks.org/profile/aryan007k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
                <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform">
                     <img src="https://cdn.simpleicons.org/geeksforgeeks" alt="GeeksforGeeks" className="w-6 h-6 dark:invert" />
                </div>
                <span className="text-sm font-medium">GeeksforGeeks</span>
            </a>

        </div>
      </div>
    </section>
  )
}
