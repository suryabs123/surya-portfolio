import surya from "../images/surya.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-20">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl grid md:grid-cols-2 gap-10 items-center"
      >

        {/* Left Side */}
        <div className="text-center">

          <img
            src={surya}
            alt="Surya BS"
            className="w-72 h-72 rounded-full border-4 border-cyan-500 object-cover mx-auto shadow-2xl hover:scale-105 transition duration-300"
          />

        </div>

        {/* Right Side */}
        <div>

          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-cyan-600">
              Surya BS
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-6">
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

        </div>

      </motion.div>

    </div>
  );
}

export default About;