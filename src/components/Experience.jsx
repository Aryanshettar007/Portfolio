import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight, ExternalLink } from 'lucide-react';
import ieeeLogo from '../assets/IEEE logo.jpg';
import gdgLogo from '../assets/gdg_jssate_b_logo.jpg';

const experiences = [
  {
    role: "Web Developer",
    org: "IEEE Student Branch JSSATEB",
    date: "2025 - Present",
    description: "Built and maintained the official IEEE website and conducted ML workshops for over 50 students.",
    links: [
        { label: "View Website", url: "https://ieee-jssateb.netlify.app/" }
    ],
    theme: "from-blue-500/10 to-cyan-500/10 border-blue-200/20",
    logo: ieeeLogo
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
                    className={`group relative p-8 md:p-10 rounded-3xl glass hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-all duration-300 border ${exp.theme}`}
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
                    
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <img src={exp.logo} alt={exp.org} className="w-14 h-14 object-contain" />
                                </div>
                                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                                    <Calendar size={14} />
                                    {exp.date}
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {exp.role}
                            </h3>
                            <div className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-6 flex items-center gap-2">
                                {exp.org}
                            </div>
                            
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                                {exp.description}
                            </p>
                        </div>

                        {exp.links && exp.links.length > 0 && (
                             <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700/50">
                                {exp.links.map((link, i) => (
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
                             </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
