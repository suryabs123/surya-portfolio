import surya from "../images/surya.png";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl grid md:grid-cols-2 gap-12 items-center"
      >

        {/* Profile Image */}
        <div className="text-center">

          <img
            src={surya}
            alt="Surya BS"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-500 object-cover mx-auto shadow-2xl hover:scale-105 transition duration-300"
          />

        </div>

        {/* About Content */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-cyan-600">
              Surya BS
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 mb-6">
            Computer Science Engineer | AI Enthusiast |
            Web Developer
          </p>

          <h2 className="text-3xl font-bold text-cyan-600 mb-4">
            About Me
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            I am a Computer Science Engineering graduate passionate
            about Artificial Intelligence, Web Development,
            IoT, and Teaching.

            I have worked on projects such as Stock Prediction
            using RNN, LSTM, and GRU, Django Web Applications,
            Smart Energy Meter Systems, and Student Management Systems.

            Currently, I am working as a Teaching Assistant at
            Cambridge Institute of Technology and enjoy helping
            students understand technical concepts.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-8 bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-600 hover:scale-105 transition"
          >
            <FaDownload />
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-4xl">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-gray-800 hover:scale-110 transition" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-pink-500 hover:scale-110 transition" />
            </a>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default About;