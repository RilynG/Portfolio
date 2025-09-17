import { Typewriter } from "react-simple-typewriter";
import JONES from '../assets/JONES.jpg'; 
import ME from '../assets/ME.jpeg'; 
import SkillsLaptop from "./SkillsLaptop";

export default function About() {
  return (
   
    <section
      id="about"
      className="relative h-screen text-white py-20 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${JONES})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    > 
    {/* About me content */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg relative"> 
          <img
            src={ME}
            alt="Rilyn Griffin"
            className="w-full h-full object-cover object-top"    
          /> 
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-red-600 mb-4">About Me</h2>
          <p className="text-lg mb-4">
            <Typewriter
              words={["Hello! I’m Rilyn Griffin","Passionate Web Developer","Aspiring Software Engineer","Cyber Security Enthusiast","WRECK'EM"]}
              loop={0}         
              cursor
              cursorStyle="|"
              typeSpeed={100}   
            />
          </p>
          <p className="text-lg mb-6">
            I’m a senior at Texas Tech University pursuing a degree in Computer Science with a minor in Mathematics.
            I have a passion for full stack development and cyber security.
            When I’m not coding, you can find me exploring new technologies, golfing, or spending time with friends and family.
          </p>
          <SkillsLaptop />
        </div>
      </div>
    </section>
  );
}
