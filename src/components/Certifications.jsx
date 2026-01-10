import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame, useSpring } from 'framer-motion';

// Using consistent placeholders with gradient backgrounds or simple patterns if images are missing
const certificates = [
  {
    id: 1,
    title: "Intro to ML",
    image: "/NPTEL.png", 
    issuer: "NPTEL",
    date: "2025",
    description: "Certification in Introduction to Machine Learning.",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS149S63210470009179040"
  },
  {
    id: 2,
    title: "Space Science Hackathon",
    image: "/ISRO_Certificate.png",
    issuer: "ISRO",
    date: "2025",
    description: "Participation in ISRO Space Science Hackathon."
  },
  {
    id: 10,
    title: "AI Foundations",
    image: "/oracle.png",
    issuer: "Oracle",
    date: "2025",
    description: "Fundamental concepts of Artificial Intelligence and Machine Learning on OCI.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D30CE6C527D3A0DD91C1EC473977F4BDC320FFF267497912AA3DA0A02F2EF714"
  },
  {
    id: 3,
    title: "Google Developer Groups",
    image: "/GDG_Certificate_ARYAN_SHETTAR.png",
    issuer: "GDG",
    date: "2025",
    description: "Active participation in Google Developer Groups events."
  },
  {
    id: 4,
    title: "Data Analytics Internship",
    image: "/Internship.png",
    issuer: "Company Name", 
    date: "2024",
    description: "Internship focused on Data Analytics." 
  },
  {
    id: 5,
    title: "Tech Summit",
    image: "/TechSummit_Certificate.jpg",
    issuer: "Tech Summit",
    date: "2024",
    description: "Participation in regional technology summit."
  },
  {
    id: 6,
    title: "Aikyam Hackathon",
    image: "/AIKYAM.png",
    issuer: "Aikyam",
    date: "2025",
    description: "Participation in Aikyam Hackathon."
  },
  {
    id: 7,
    title: "DSCE Hackathon",
    image: "/DSCE.png",
    issuer: "DSCE",
    date: "2025",
    description: "Participation in Dayananda Sagar College of Engineering Hackathon."
  },
  {
    id: 8,
    title: "SJBIT Hackathon",
    image: "/SJBIT_Certificate.jpg",
    issuer: "SJBIT",
    date: "2025",
    description: "Participation in SJB Institute of Technology Hackathon."
  },
  {
    id: 9,
    title: "Samyog Quiz Winner",
    image: "/samyog.jpg",
    issuer: "JSSATE",
    date: "2025",
    description: "2nd Prize Winner in JSSATE Samyog Branch Fest Quiz Event."
  }
];

export default function Certifications() {
  const containerRef = useRef(null);
  // We duplicate the list enough times to ensure seamless looping (4 sets)
  // Set 1 | Set 2 (Start Here) | Set 3 | Set 4
  const duplicatedCertificates = [...certificates, ...certificates, ...certificates, ...certificates];
  
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Speed of auto-scroll
  const speed = 2;

  useAnimationFrame(() => {
    // Determine exact width of one set of cards
    // Mobile: w-80 (320px) + gap-8 (32px) = 352px
    // Desktop: w-96 (384px) + gap-8 (32px) = 416px
    const isDesktop = window.innerWidth >= 768;
    const cardWidth = isDesktop ? 416 : 352;
    const setWidth = certificates.length * cardWidth;

    // Auto-scroll if not interacting
    if (!isHovered && !isDragging) {
      x.set(x.get() - speed);
    }
    
    // Infinite Loop Logic:
    // We want to keep 'x' within the range of the middle sets to allow infinite scrolling.
    
    // Case 1: Scrolled too far left (negative)
    // If we've scrolled past 2 sets (-2 * setWidth), jump back to 1 set (-1 * setWidth)
    if (x.get() <= -setWidth * 2) {
      x.set(x.get() + setWidth);
    }
    
    // Case 2: Scrolled too far right (positive magnitude shrinking)
    // If we're dragged into the first set buffer ( > -setWidth), jump forward to 2nd set
    // Ideally we start at -setWidth so we have user space to verify.
    // Let's enforce the view to be centered on a set initially? 
    // Actually, simple reset: if x > 0 (start of list), move to -setWidth.
    if (x.get() > -setWidth) {
       x.set(x.get() - setWidth);
    }
  });

  // Initialize position to start at the second set (so user can scroll left immediately)
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    const cardWidth = isDesktop ? 416 : 352;
    const setWidth = certificates.length * cardWidth;
    x.set(-setWidth);
  }, []);

  return (
    <section id="certifications" className="py-24 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden relative group">
       <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-4">
                Certifications
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                Continuous learning is key. Drag to explore or pause on hover.
            </p>
       </div>

      <div 
        className="flex relative items-center cursor-grab active:cursor-grabbing" 
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950 z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-950 z-20 pointer-events-none" />

        <motion.div 
            className="flex gap-8 px-8"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }} // Infinite loose constraints
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
        >
            {duplicatedCertificates.map((cert, index) => (
                <div 
                    key={`${cert.id}-${index}`}
                    className="relative flex-shrink-0 w-80 md:w-96 aspect-[1.5/1] bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 group/card transition-transform hover:scale-105 duration-300 pointer-events-auto"
                >
                    <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover select-none pointer-events-none" // Prevent image drag conflict
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-zinc-900/90 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center items-start text-left backdrop-blur-sm">
                         <span className="inline-block px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded mb-2 uppercase tracking-wide">
                            {cert.issuer}
                         </span>
                         <h3 className="text-white font-bold text-xl mb-2">{cert.title}</h3>
                         <p className="text-zinc-300 text-sm mb-4 line-clamp-3">
                            {cert.description}
                         </p>
                         <div className="mt-auto w-full pt-4 border-t border-zinc-700 flex justify-between items-center">
                            <span className="text-zinc-400 text-xs">Issued: {cert.date}</span>
                            {cert.link ? (
                                <a 
                                    href={cert.link}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white text-xs font-semibold underline cursor-pointer hover:text-indigo-400 transition-colors"
                                    onPointerDown={(e) => e.stopPropagation()} // Allow click through drag
                                >
                                    View Credential
                                </a>
                            ) : (
                                <span className="text-zinc-500 text-xs font-semibold cursor-not-allowed">
                                    No Link Available
                                </span>
                            )}
                         </div>
                    </div>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
