import { motion, useMotionValue, useSpring, useTransform, LayoutGroup, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, RefreshCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import Magnetic from './ui/Magnetic';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const [activeId, setActiveId] = useState('main');

  const images = [
    { id: 'main', src: '/hero-main.jpg', alt: 'Profile Main' },
    { id: 'code', src: '/hero-code.jpg', alt: 'Coding Setup' },
    { id: 'casual', src: '/hero-casual.jpg', alt: 'Casual' }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 0.8; // Reduce max tilt by 20%
    const yPct = (mouseY / height - 0.5) * 0.8;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setActiveId('main'); 
  };

  // Revised Slot Logic for absolute clarity
  const getPositionProps = (imgId) => {
      // 1. If Active, take Center
      if (imgId === activeId) {
          return {
              zIndex: 10,
              initial: false,
              animate: { opacity: 1 },
              className: "absolute inset-0 rounded-[2rem]",
              style: { transform: "translateZ(20px)" } // Center depth
          };
      }
      
      // 2. Define who takes TopRight and BottomLeft
      // Default: main=Center, code=TR, casual=BL, etc.
      
      // We need a deterministic but rotating slot assignment based on the active index
      // Logic: 
      // Active = Center
      // (Active + 1) = Top Right
      // (Active + 2) = Bottom Left
      
      const imgIndex = images.findIndex(i => i.id === imgId);
      const activeImgIndex = images.findIndex(i => i.id === activeId);
      
      // Calculate relative position (1 or 2 steps ahead)
      let diff = (imgIndex - activeImgIndex + 3) % 3;
      
      if (diff === 1) {
          // Next image -> Top Right
           return {
              zIndex: 20,
              className: "absolute -top-12 -right-12 w-40 h-40 rounded-2xl border-4 border-white dark:border-zinc-900 hidden md:block",
              style: { transform: "translateZ(60px)" }
          };
      } else {
          // invalid/self case handled by first if, so this must be diff === 2 (Bottom Left)
           return {
              zIndex: 20,
              className: "absolute -bottom-8 -left-12 w-32 h-32 rounded-2xl border-4 border-white dark:border-zinc-900 hidden md:block",
              style: { transform: "translateZ(40px)" }
          };
      }
  };

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Developer", "Learner", "Designer", "Editor"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const title = "ARYAN SHETTAR";
  const words = title.split(" ");

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 px-6 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      
      {/* 🌌 Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.08),transparent_50%)] animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08),transparent_50%)] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)] blur-[100px]" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* 📝 Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-indigo-500/20 shadow-lg shadow-indigo-500/5 backdrop-blur-md"
            >
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Available for new projects
                </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8">
                {words.map((word, i) => (
                     <span key={i} className="inline-block mr-4 text-zinc-900 dark:text-white">
                         {word.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (i * 0.2) + (index * 0.03), type: "spring", stiffness: 100 }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
                
                {/* Dynamic Rotating Role */}
                <div className="h-[1.1em] overflow-hidden flex items-center justify-center lg:justify-start">
                    <AnimatePresence mode="wait">
                        <motion.span 
                            key={roles[roleIndex]}
                            initial={{ y: 50, opacity: 0, rotateX: -45 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            exit={{ y: -50, opacity: 0, rotateX: 45 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-xy bg-[length:200%_200%] inline-block"
                        >
                            {roles[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mb-12 leading-relaxed"
            >
                Crafting immersive digital experiences with clean code and creative design. Specializing in modern web technologies.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 items-center"
            >
               <Magnetic>
                   <a 
                     href="#projects"
                     className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-indigo-500/20 transition-all active:scale-95"
                   >
                     View My Work
                   </a>
               </Magnetic>

               <div className="flex gap-4">
                    <Magnetic>
                        <a href="https://github.com/Aryanshettar007" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:bg-white/50 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800 group block">
                            <Github size={24} className="text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="https://www.linkedin.com/in/aryan-shettar/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:bg-white/50 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800 group block">
                            <Linkedin size={24} className="text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
                        </a>
                    </Magnetic>
               </div>
            </motion.div>
        
        </div>

        {/* 🖼️ Hero Visual (3D Tilt & Gallery) */}
        <div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-80 h-96 md:w-[28rem] md:h-[34rem]"
            >
                {/* Background Glow */}
                <div 
                    style={{ transform: "translateZ(-50px)" }}
                    className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] blur-2xl opacity-30 dark:opacity-20 animate-pulse" 
                />

                <LayoutGroup>
                    {images.map((img) => {
                        const props = getPositionProps(img.id);
                        return (
                            <motion.div
                                layoutId={img.id}
                                key={img.id}
                                onMouseEnter={() => setActiveId(img.id)}
                                onClick={() => setActiveId(img.id)} // Touch support
                                className={`${props.className} overflow-hidden glass shadow-2xl cursor-pointer transition-shadow hover:shadow-indigo-500/20`}
                                style={props.style}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <motion.img 
                                    layoutId={`${img.id}-img`}
                                    src={img.src} 
                                    alt={img.alt} 
                                    className="w-full h-full object-cover"
                                />
                                {img.id === activeId && (
                                     <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" 
                                     />
                                )}
                            </motion.div>
                        );
                    })}
                </LayoutGroup>



            </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400 dark:text-zinc-600"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}
