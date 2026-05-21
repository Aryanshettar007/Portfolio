import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles, Terminal, Cpu } from 'lucide-react';
import MedifindImg from '../assets/Medifind.png';
import GoViralImg from '../assets/GoViral.png';
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
    title: "GoViral-Pro",
    description: "AI-powered influencer marketing platform that enables brand-creator collaborations using machine learning to optimize campaign pricing, secure Stripe payments, and real-time negotiations.",
    tech: ["MERN", "Flask", "Scikit-Learn", "Stripe", "Socket.io", "Tailwind CSS"],
    links: { live: "https://www.youtube.com/watch?v=RIzXyACbldY", liveLabel: "Watch Demo" },
    gradient: "from-purple-500/20 to-pink-500/20",
    image: GoViralImg
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
                            <div className="p-0 h-full w-full relative group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center select-none relative overflow-hidden">
                                        {/* Grid background effect */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                                        
                                        <div className="relative z-10 flex flex-col items-center gap-4">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${project.gradient} flex items-center justify-center shadow-lg border border-white/10`}>
                                                {project.title.includes("CreatorRate") ? (
                                                    <Sparkles className="w-8 h-8 text-indigo-500 animate-pulse" />
                                                ) : (
                                                    <Cpu className="w-8 h-8 text-amber-500 animate-pulse" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-display font-bold text-zinc-800 dark:text-zinc-200 text-lg mb-1">{project.title}</div>
                                                <div className="text-xs text-zinc-500 dark:text-zinc-500 font-mono flex items-center gap-1.5 justify-center">
                                                    <Terminal className="w-3.5 h-3.5" />
                                                    production.env
                                                </div>
                                            </div>
                                            
                                            {/* Simulated Code Lines */}
                                            <div className="w-64 space-y-2 mt-2 opacity-60 dark:opacity-40">
                                                <div className="h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-800 w-full" />
                                                <div className="h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-800 w-5/6 mx-auto" />
                                                <div className="h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-800 w-4/5 mx-auto" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
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
                    {project.subtitle && (
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-2 block">
                            {project.subtitle}
                        </span>
                    )}
                    <h3 className="text-3xl font-display font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.title}
                    </h3>
                    
                    {Array.isArray(project.description) ? (
                        <ul className="list-disc pl-5 space-y-3 text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                            {project.description.map((bullet, idx) => (
                                <li key={idx} className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">{bullet}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                            {project.description}
                        </p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm text-zinc-600 dark:text-zinc-400 font-medium cursor-default hover:border-indigo-500/50 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex gap-6">
                        {project.links.live && (
                            <a 
                                href={project.links.live} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link"
                            >
                                <span>{project.links.liveLabel || 'Live Demo'}</span>
                                <ArrowUpRight size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                        )}
                        {project.links.github && (
                            <a 
                                href={project.links.github} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium hover:text-indigo-600 dark:hover:text-white transition-colors"
                            >
                                <Github size={18} />
                                <span>Source Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
