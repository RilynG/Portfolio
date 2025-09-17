import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { id: "react", icon: FaReact, label: "React" },
  { id: "js", icon: SiJavascript, label: "JavaScript" },
  { id: "node", icon: FaNodeJs, label: "Node.js" },
  { id: "mongo", icon: SiMongodb, label: "MongoDB" },
  { id: "py", icon: FaPython, label: "Python" },
  { id: "html", icon: FaHtml5, label: "HTML5" },
  { id: "css", icon: FaCss3Alt, label: "CSS3" },
  { id: "tw", icon: SiTailwindcss, label: "Tailwind" },
  { id: "git", icon: FaGitAlt, label: "Git" },
];

export default function SkillsLaptop() {
  return (
    <div className="w-full flex justify-center mt-8">
      {/* Increase max width for bigger laptop */}
      <div className="relative w-full max-w-3xl aspect-[920/620]">
        {/* Laptop SVG frame */}
        <svg viewBox="0 0 920 620" className="w-full h-full">
          <defs>
            <linearGradient id="alumnShine" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="40%" stopColor="#e6e7ea" />
              <stop offset="100%" stopColor="#f8fafb" />
            </linearGradient>
            <linearGradient id="bezelGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#111827" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b0b0b" />
              <stop offset="100%" stopColor="#330000" />
            </linearGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="18" stdDeviation="30" floodColor="#0b1220" floodOpacity="0.25"/>
            </filter>
          </defs>

          <g filter="url(#shadow)">
            <rect x="40" y="40" rx="26" width="840" height="480" fill="url(#alumnShine)" stroke="#d1d5db" strokeWidth="2"/>
            <rect x="58" y="62" rx="12" width="804" height="444" fill="url(#bezelGrad)" />
            <rect x="78" y="82" rx="6" width="764" height="404" fill="url(#screenGrad)" />
          </g>
        </svg>

        {/* Screen content */}
        <div className="absolute inset-[8.5%] flex flex-col items-center justify-start p-4">
          {/* Typewriter title */}
          <h2 className="text-center text-red-600 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 w-full">
            <Typewriter words={["My Stack"]} loop={false} cursor cursorStyle="|" typeSpeed={90} />
          </h2>

          {/* Skills Grid */}
          <div
            className="grid grid-cols-auto-fit gap-4 justify-items-center w-full mt-2"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(60px,1fr))" }}
          >
            {skills.map((skill, idx) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  initial={{ y: 2, opacity: 0 }}
                  animate={{ y: [2, -2, 2], opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 4 + (idx % 3), ease: "easeInOut", delay: idx * 0.1 }}
                  className="flex flex-col items-center text-white"
                >
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-red-600 hover:text-white transition-colors">
                    <SkillIcon style={{ width: "clamp(30px,5vw,48px)", height: "clamp(30px,5vw,48px)" }} />
                  </div>
                  <span className="mt-1 text-[11px] sm:text-sm text-gray-200 text-center">{skill.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
