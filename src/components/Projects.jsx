import preview from '../assets/preview.png';
import portfolio from '../assets/portfolio.png';
import hatsupply from '../assets/hatsupply.png';
import TortillaBackground from "../components/TortillaBackground";

export default function Projects() {
  const projects = [
    {
      title: "Budgeting App",
      description: "A personal budgeting app to track income, expenses, credit cards, and savings goals using React, Tailwind, and MongoDB.",
      tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      image: preview,
      link: "#",
    },
    {
      title: "HatSupply E-commerce Website",
      description: "An online store for hats where users can browse products, add items to their cart, and checkout. Built with React, Tailwind CSS, and Node.js.",
      tech: ["React", "Node.js", "API Integration"],
      image: hatsupply,
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio to showcase projects, skills, and About Me section with animations and responsive design.",
      tech: ["React", "Tailwind CSS", "Vite"],
      image: portfolio,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className=" text-white py-20 px-6 md:px-12 lg:px-24"
    >
        
      <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative group bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl font-bold text-red-600 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-red-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-red-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
