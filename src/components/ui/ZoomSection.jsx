import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ZoomSection() {
    const containerRef = useRef(null);
    
    // Track scroll progress within this container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transform scroll progress to scale value
    // 0 -> 1 (normal)
    // 1 -> 50 (huge zoom)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 50]);
    
    // Fade out towards the end to avoid pixelation/clutter
    const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

    return (
        // Tall container to define scroll duration (300vh = 3 screens length)
        <div ref={containerRef} className="relative h-[300vh]">
            {/* Sticky container to keep content in view while scrolling */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                <motion.div 
                    style={{ scale, opacity }}
                    className="relative z-10"
                >
                    <h2 className="text-6xl md:text-9xl font-display font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-xy tracking-tighter whitespace-nowrap">
                        My Journey
                    </h2>
                    
                    {/* Optional: Add a subtle instruction */}
                    <motion.div 
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                        className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-sm text-zinc-500 font-medium tracking-widest uppercase"
                    >
                        Scroll to explore
                    </motion.div>
                </motion.div>
                
                {/* Optional Background Elements that also zoom but at different rate? */}
                {/* Keeping it clean for now as per "Lenis" simple bold text style */}
            </div>
        </div>
    );
}
