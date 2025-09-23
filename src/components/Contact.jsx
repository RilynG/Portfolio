import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import ME from "../assets/ME.jpeg";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mzzjplyd", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent! Thank you.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen py-16 px-6 md:px-12 lg:px-24 text-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-12 text-center">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Business Card */}
        <motion.div
          className="flex-1 bg-gradient-to-br from-red-600 to-black rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center text-center md:text-left
            transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ME}
            alt="Rilyn Griffin"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full shadow-lg mb-4"
          />
          <h3 className="text-2xl font-bold mb-1">Rilyn Griffin</h3>
          <p className="text-red-200 mb-4">Full Stack Developer & Cybersecurity Enthusiast</p>

          <div className="flex flex-col gap-2 mt-4">
            <a href="mailto:rilyngriffin@gmail.com" className="flex items-center gap-2 hover:text-black transition-colors">
              <FaEnvelope /> rilyngriffin@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rilyn-griffin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/RilynG" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="flex-1 bg-gray-900 rounded-2xl shadow-2xl p-6 md:p-8
            transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200 hover:border-red-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200 hover:border-red-600"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200 hover:border-red-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none transition-all duration-200 hover:border-red-600"
            />

            <motion.button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-black text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform font-semibold mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: status ? 1 : 0, y: status ? 0 : -10 }}
              transition={{ duration: 0.4 }}
              className="text-green-400 mt-2"
            >
              {status}
            </motion.p>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
