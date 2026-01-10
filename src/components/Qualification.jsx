import { motion } from 'framer-motion';

const qualifications = [
  { 
    id: 1,
    year: '2023 – Present',
    title: 'Bachelor of Engineering',
    subtitle: 'Information Science',
    institution: 'JSS Academy of Technical Education, Bengaluru',
    score: '8.7'
  },
  { 
    id: 2,
    year: '2020 – 2022',
    title: 'Pre-University (11–12)',
    subtitle: 'Science',
    institution: 'SBR PU College, Kalaburagi',
    score: '85%' 
  },
  { 
    id: 3,
    year: '2020',
    title: '10th Grade',
    subtitle: 'Secondary School',
    institution: 'SBR Public School, Kalaburagi',
    score: '90%' 
  }
];

export default function Qualification() {
  return (
    <section id="qualification" className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white mb-16 text-center"
        >
            <span className="text-gradient">Qualifications</span>
        </motion.h2>

        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-12">
          {qualifications.map((q, i) => (
            <motion.div 
                key={q.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 md:pl-12 group"
            >
              {/* Dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950 group-hover:bg-indigo-500 transition-colors duration-300" />
              
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all cursor-default border border-zinc-100 dark:border-zinc-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{q.title}</h3>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full">{q.year}</span>
                  </div>
                  
                  <div className="text-lg text-zinc-700 dark:text-zinc-300 font-medium mb-2">
                    {q.institution}
                  </div>
                  
                  <div className="text-zinc-500 dark:text-zinc-500 text-sm font-mono">
                    {q.id === 1 ? "CGPA" : "Percentage"}: <span className="text-zinc-900 dark:text-zinc-200 font-bold">{q.score}</span>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
