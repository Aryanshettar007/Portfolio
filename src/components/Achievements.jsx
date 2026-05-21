import { motion } from 'framer-motion';
import { Trophy, Cloud, Code2, ExternalLink, Star, Sparkles, ArrowUpRight } from 'lucide-react';

// Import achievement images
import gssocImg from '../assets/GSSOC.png';
import nasikoTop10Img from '../assets/Nasiko-Top10.jpg';
import cloudJamsImg from '../assets/Cloudjams.jpg';

const achievements = [
  {
    id: 1,
    title: "GSSoC '26 Contributor",
    subtitle: "GirlScript Summer of Code 2026",
    description: "Accepted as a Contributor & Mentee in GSSoC 2026 — contributing to Open Source Track and AI/Agents Track, collaborating with developers globally.",
    image: gssocImg,
    icon: Code2,
    gradient: "from-emerald-500 to-teal-600",
    borderAccent: "border-emerald-500/20 hover:border-emerald-500/40",
    link: "https://gssoc.girlscript.org/profile/2e26f30e-78ec-4d38-aae7-1a21406696ac",
    linkLabel: "View Profile",
    badge: "Open Source",
    badgeGradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    title: "Nasiko Buildathon — Top 10",
    subtitle: "Microsoft Office, Bengaluru",
    description: "Secured a Top 10 finish at the Nasiko Buildathon — an 8-hour solo agent-engineering sprint held at Microsoft Office, Prestige Ferns Galaxy.",
    image: nasikoTop10Img,
    icon: Trophy,
    gradient: "from-amber-500 to-orange-600",
    borderAccent: "border-amber-500/20 hover:border-amber-500/40",
    link: "#",
    linkLabel: "View Project",
    badge: "Winner",
    badgeGradient: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    title: "Google Cloud Goodies",
    subtitle: "Google Cloud Study Jams",
    description: "Earned exclusive Google Cloud swag — backpack, t-shirt, tumbler, and stickers — by completing Google Cloud Study Jams through GDG On Campus.",
    image: cloudJamsImg,
    icon: Cloud,
    gradient: "from-blue-500 to-indigo-600",
    borderAccent: "border-blue-500/20 hover:border-blue-500/40",
    badge: "Cloud",
    badgeGradient: "from-blue-500 to-indigo-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            Highlights
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-white mb-6">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-lg">
            Milestones and recognitions that define my journey.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border ${achievement.borderAccent} transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5`}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${achievement.badgeGradient} text-white shadow-lg`}>
                    <achievement.icon size={12} />
                    {achievement.badge}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mb-4">
                  <Star size={12} className="text-amber-500" fill="currentColor" />
                  {achievement.subtitle}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm flex-grow">
                  {achievement.description}
                </p>

                {/* Link */}
                {achievement.link && (
                  <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-300 group/link`}
                    >
                      {achievement.linkLabel}
                      <ArrowUpRight size={14} className="text-indigo-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
