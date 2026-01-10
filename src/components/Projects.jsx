import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import MedifindImg from '../assets/Medifind.png';
import LegalEaseImg from '../assets/legalease.png';
import QuickGPTImg from '../assets/QuickGPT.png';

const projects = [
  {
    title: "MediFind",
    description: "AI-powered medicine locator and price optimizer that helps users find the best deals on pharmaceuticals nearby.",
    tech: ["React", "Node.js", "Google Maps API", "ML"],
    links: { live: "https://medi-find-impact-x.vercel.app/", github: "https://github.com/Aryanshettar007/MediFind-Impact-X" },
    gradient: "from-blue-500/20 to-indigo-500/20",
    image: MedifindImg
  },
  {
    title: "LegalEase",
    description: "AI legal document analyzer using OCR and RAG to simplify complex legal jargon for everyday users.",
    tech: ["MERN Stack", "OCR", "Gemini API", "JWT"],
    links: { live: "https://legal-ease-jss.vercel.app/", github: "https://github.com/Aryanshettar007/LegalEase" },
    gradient: "from-emerald-500/20 to-teal-500/20",
    image: LegalEaseImg
  },
  {
    title: "QuickGPT",
    description: "Full-stack AI chatbot with secure authentication and integrated payment gateway for premium features.",
    tech: ["MERN Stack", "Stripe", "ImageKit", "Gemini API"],
    links: { live: "https://quickgpt-aryan.vercel.app/", github: "https://github.com/Aryanshettar007/QUICKGPT" },
    gradient: "from-orange-500/20 to-rose-500/20",
    image: QuickGPTImg
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-zinc-100/30 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center md:text-left"
        >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-white mb-6">
                Featured Work
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg">
                A selection of projects where design meets complex engineering.
            </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                {/* Project Visual / Card */}
                <div className={`order-2 lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                     <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={`block relative aspect-video rounded-3xl overflow-hidden glass border-0 shadow-2xl group-hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.2)] transition-all duration-500 cursor-pointer`}
                     >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                        
                        {/* Inner content placeholder mimicking a browser/app window */}
                        <div className="absolute inset-4 top-8 bg-white/90 dark:bg-zinc-900/90 rounded-t-xl shadow-inner overflow-hidden border border-zinc-200/50 dark:border-white/5">
                            {/* Window controls */}
                            <div className="h-8 bg-zinc-100 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-white/5 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            </div>
                            {/* App Content Placeholder */}
                            <div className="p-0 h-full w-full relative group-hover:scale-105 transition-transform duration-700 ease-out">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                ) : (
                                    <div className="flex flex-col gap-4 items-center justify-center h-full opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 p-8">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 mb-4" />
                                        <div className="w-3/4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                        <div className="w-1/2 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <motion.div 
                                initial={false}
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center shadow-xl text-zinc-900 dark:text-white"
                            >
                                <ArrowUpRight size={28} />
                            </motion.div>
                        </div>
                     </a>
                </div>

                {/* Project Info */}
                <div className={`order-1 lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-400 font-medium cursor-default hover:border-indigo-500/50 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex gap-6">
                        <a 
                            href={project.links.live} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link"
                        >
                            <span>Live Demo</span>
                            <ArrowUpRight size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                        <a 
                            href={project.links.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium hover:text-indigo-600 dark:hover:text-white transition-colors"
                        >
                            <Github size={18} />
                            <span>Source Code</span>
                        </a>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
