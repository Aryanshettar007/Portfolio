import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.5"] // Wide offset for smooth reading while scrolling
  });

  const text = "I’m a Full-Stack Web Developer with hands-on experience in building AI-integrated platforms, secure backend APIs, and responsive user interfaces. I actively participate in hackathons and developer communities.";
  const words = text.split(" ");
  
  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
        <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest"
        >
            About Me
        </motion.span>
        
        <p className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight flex flex-wrap gap-x-3 gap-y-2 justify-center md:justify-start">
           {words.map((word, i) => {
             const start = i / words.length;
             const end = start + (1 / words.length);
             
             // Scale: Pop up (1 -> 1.3) then back to 1
             const scale = useTransform(scrollYProgress, 
                [start, start + 0.05, end + 0.05], 
                [1, 1.3, 1]
             ); 
             
             // Opacity: Dim -> Visible -> Stay Visible (Fill effect)
             const opacity = useTransform(scrollYProgress, 
                [start, start + 0.05, end + 0.05], 
                [0.2, 1, 1]
             );
             
             // Color: Gray -> Indigo -> Stay Indigo (Motion Grading)
             const color = useTransform(scrollYProgress, 
                [start, start + 0.05, end + 0.05], 
                ["#a1a1aa", "#4f46e5", "#4f46e5"]
             );
             
             return (
               <motion.span
                 key={i}
                 className="relative inline-block mx-1"
                 style={{ opacity, scale, color }} 
               >
                 {word}
               </motion.span>
             );
           })}
        </p>
      </div>
    </section>
  )
}
