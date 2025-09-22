import { useState } from "react";
import { motion } from "framer-motion";
import portfolio from "../assets/portfolio.png";
import preview from "../assets/preview.png";
import hatsupply from "../assets/hatsupply.png";

const projects = [
  {
    id: 1,
    title: "Budgeting App",
    description: "A full-stack budgeting app with income tracking, debt management, and savings goals.",
    image: preview,
    tech: ["React", "Express", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind.",
    image: portfolio,
    tech: ["React", "TailwindCSS"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "HatSupply E-commerce",
    description: "An online hat store with cart and checkout.",
    image: hatsupply,
    tech: ["React", "Node.js"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  const [featured, setFeatured] = useState(projects[0]);

  return (
    <motion.section
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Featured Project */}
        <motion.div
          className="md:col-span-2 relative bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-64 object-cover brightness-90"
          />
          <div className="p-6">
            <h3 className="text-3xl font-bold text-red-500 mb-2">{featured.title}</h3>
            <p className="text-gray-300 mb-4">{featured.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {featured.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-red-500 to-black text-white shadow"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={featured.demo}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-black text-white rounded-lg shadow-lg hover:scale-105 transform transition-transform"
              >
                Demo
              </a>
              <a
                href={featured.github}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transform transition-transform"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              className={`cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${p.id === featured.id ? "ring-2 ring-red-500 scale-105 shadow-2xl" : ""
                }`}
              onClick={() => setFeatured(p)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: p.id * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={p.image} alt={p.title} className="h-24 w-full object-cover" />
              <div className="p-2 bg-gray-900">
                <h4 className="text-white font-semibold">{p.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

  );
}
