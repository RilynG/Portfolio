import { motion } from "framer-motion";

export default function Resume() {
  const experience = [
    {
      role: "Engineer Support Intern",
      company: "Tx Department of Transportation",
      period: "June 2023 - August 2023",
      details: "Analyzed technical project data and ensured compliance with engineering safety standards. Updated digital documentation and maintained structured databases for project tracking. Collaborated with technical teams to review systems specifications and identify improvement areas.",
    },
    {
      role: "Sales/Customer Satisfaction",
      company: "Autozone",
      period: "May 2024 - Present",
      details: "Provided technical support to customers by identifying and sourcing correct automotive parts using electronic inventory systems. Troubleshot product compatibility issues, offering solution-oriented recommendations. Handled transactions, returns, and exchanges with accuracy in point-of-sale systems.",
    },
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      school: "Texas Tech University",
      period: "2021 - Present",
      details: "Relevant coursework: Data Structures, Algorithms, OOP, Software Engineering Principles, Computer Networks, Assembly, Operating Systems, DBMS.",
    },
    {
      degree: "Associate of Arts",
      school: "North Central Texas College",
      period: "2020 - 2021",
      details: "General studies of English, math, and history.",
    },
  ];

  const certifications = ["Responsive Web Design - freeCodeCamp"];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Resume</h2>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-600 mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-red-600 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-gray-300">{edu.school} | {edu.period}</p>
                <p className="text-gray-300 mt-2">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-600 mb-6">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-red-600 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <p className="text-gray-300">{exp.company} | {exp.period}</p>
                <p className="text-gray-300 mt-2">{exp.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-600 mb-6">Certifications</h3>
          <motion.ul
            className="list-disc list-inside text-gray-300 space-y-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </motion.ul>
        </div>

        {/* Download Button */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="/Rilyn-Griffin-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
