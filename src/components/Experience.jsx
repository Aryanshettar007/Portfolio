import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight, ArrowLeft } from 'lucide-react';
import ieeeLogo from '../assets/IEEE logo.jpg';
import ieeeCert from '../assets/IEEE.jpg';
import gdgLogo from '../assets/gdg_jssate_b_logo.jpg';

const experiences = [
  {
    role: "Web Master",
    org: "IEEE Student Branch JSSATEB",
    date: "2025 - Present",
    description: "Built and maintained the official IEEE website and conducted ML workshops for over 50 students.",
    links: [
        { label: "View Website", url: "https://ieee-jssateb.netlify.app/" }
    ],
    theme: "from-blue-500/10 to-cyan-500/10 border-blue-200/20",
    logo: ieeeLogo,
    certificate: ieeeCert
  },
  {
    role: "Tech Member",
    org: "Google Developer Groups (GDG) JSSATEB",
    date: "2025 - Present",
    description: "Mentored students during Google Cloud Study Jams and organized cybersecurity awareness events.",
    links: [],
    theme: "from-orange-500/10 to-red-500/10 border-orange-200/20",
    logo: gdgLogo
  }
];

function ExperienceCard({ exp, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-[450px] sm:h-[400px] perspective-1000">
      <motion.div 
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front Side */}
        <div 
          className={`absolute inset-0 w-full h-full p-8 md:p-10 rounded-3xl glass bg-white/5 dark:bg-zinc-900/50 border ${exp.theme} flex flex-col justify-between`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
          
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm hover:scale-110 transition-transform duration-300">
                  <img src={exp.logo} alt={exp.org} className="w-14 h-14 object-contain" />
                </div>
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                  <Calendar size={14} />
                  {exp.date}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {exp.role}
              </h3>
              <div className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6 flex items-center gap-2">
                {exp.org}
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                {exp.description}
              </p>
            </div>

            {((exp.links && exp.links.length > 0) || exp.certificate) && (
              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700/50 flex flex-wrap gap-6">
                {exp.links && exp.links.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-3 transition-all"
                  >
                    {link.label}
                    <ArrowUpRight size={18} />
                  </a>
                ))}
                {exp.certificate && (
                  <button 
                    onClick={() => setIsFlipped(true)}
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-3 transition-all cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight size={18} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Back Side */}
        <div 
          className={`absolute inset-0 w-full h-full p-6 rounded-3xl glass bg-white/10 dark:bg-zinc-900 border ${exp.theme} flex flex-col justify-between`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
              {exp.org} Certificate
            </span>
            <button 
              onClick={() => setIsFlipped(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 dark:bg-zinc-800 text-xs font-bold text-white transition-colors cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <ArrowLeft size={12} />
              Back
            </button>
          </div>
          <div className="flex-grow rounded-2xl overflow-hidden bg-black/5 dark:bg-black/30 border border-zinc-200/50 dark:border-white/5 flex items-center justify-center p-2">
            <img 
              src={exp.certificate} 
              alt={`${exp.org} Certificate`} 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
        >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-white mb-6">
                Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg">
                My journey in tech communities and leadership roles.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.2 }}
                >
                  <ExperienceCard exp={exp} index={index} />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
