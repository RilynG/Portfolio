import { Typewriter } from "react-simple-typewriter";
import JONES from '../assets/JONES.jpg';
import ME from '../assets/ME.jpeg';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaServer, FaJava, FaGitAlt } from "react-icons/fa";
import "../index.css"; 
import { SiC, SiCplusplus, SiMongodb, SiMysql, SiTailwindcss, SiVite } from "react-icons/si";

export default function About() {
  const techStack = [
    //Front end
    { name: "React", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Vite", icon: <SiVite /> },
    //Back end
    { name: "ExpressJS", icon: <FaServer /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    //Databases
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    //Programming languages
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
    //Tools
    { name: "Git", icon: <FaGitAlt /> },
  ];

  const radius = 120;

  return (
    <section
      id="about"
      aria-label="About section"
      className="relative min-h-screen text-white py-16 px-6 md:py-20 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${JONES})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-12">
        {/* Avatar with orbital icons */}
        <div className="relative flex-shrink-0 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56">
          <div className="rounded-full overflow-hidden shadow-2xl ring-4 ring-black/40 w-full h-full">
            <img
              src={ME}
              alt="Rilyn Griffin"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="absolute inset-0 orbit-container">
            {techStack.map((tech, idx) => {
              const angle = (idx / techStack.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={tech.name}
                  className="absolute top-1/2 left-1/2 text-red-600 text-3xl sm:text-4xl cursor-pointer group"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  {tech.icon}
                  <span className="absolute bottom-full mb-2 px-2 py-1 bg-black text-red-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-3">About Me</h2>

          <p className="text-base sm:text-lg text-gray-100 mb-4">
            <Typewriter
              words={[
                "Hello! I’m Rilyn Griffin",
                "Passionate Web Developer",
                "Aspiring Software Engineer",
                "Cyber Security Enthusiast",
                "WRECK'EM"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
            />
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-gray-200 mb-6 max-w-3xl mx-auto md:mx-0">
            I’m a senior at Texas Tech University pursuing a degree in Computer Science with a minor in Mathematics.
            I have a passion for full stack development and cyber security.
            When I’m not coding, you can find me exploring new technologies, golfing, or spending time with friends and family.
          </p>
          <div className="mt-8">
            <h3 className="text-red-600 text-2xl font-bold mb-4">Currently Working On</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Capstone Project", color: "bg-blue-500" },
                { name: "Cyber-Aerial Security", color: "bg-green-500" },
                { name: "Interview Prep", color: "bg-purple-600" },
                { name: "Budgeting App", color: "bg-yellow-500" },
                { name: "Portfolio Site", color: "bg-pink-500" },
                { name: "Golf Swing", color: "bg-orange-500" },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`${item.color} text-white px-4 py-2 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer`}
                  title={item.name}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
