import { motion } from 'framer-motion';
import { 
  MonitorSmartphone, 
  Image as ImageIcon, 
  Server, 
  Lock, 
  ShieldCheck, 
  Hash, 
  Database, 
  ScanText, 
  BrainCircuit, 
  CloudUpload 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" },
      { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "SQL", component: Database }
    ]
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
      { name: "C", icon: "https://skillicons.dev/icons?i=c" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java" }
    ]
  },
  {
    title: "DevOps / Tools",
    skills: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render" }
    ]
  },
  {
    title: "Other",
    skills: [
      { name: "OCR", component: ScanText },
      { name: "Google Maps API", icon: "https://cdn.simpleicons.org/googlemaps" },
      { name: "Gemini API", icon: "https://cdn.simpleicons.org/googlegemini" },
      { name: "RAG", component: BrainCircuit },
      { name: "File Upload APIs", component: CloudUpload }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
       {/* Background Glow */}
      <div className="absolute top-[20%] right-[0%] w-[30%] h-[30%] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center text-zinc-900 dark:text-white mb-16"
        >
            Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
                <motion.div 
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-2xl bg-white/40 dark:bg-zinc-900/40 border border-white/50 dark:border-white/5"
                >
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 rounded-full bg-indigo-500" />
                        {category.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {category.skills.map((skill) => (
                            <div 
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-md border border-zinc-100 dark:border-zinc-700/50 group cursor-default"
                            >
                                <div className="w-8 h-8 mb-2 relative flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                                    {skill.component ? (
                                        <skill.component size={24} strokeWidth={1.5} />
                                    ) : (
                                        <img 
                                            src={skill.icon} 
                                            alt={skill.name} 
                                            className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                                        />
                                    )}
                                </div>
                                <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-center leading-tight">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
