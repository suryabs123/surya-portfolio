import surya from "../images/surya.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-5">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={surya}
          alt="Surya BS"
          className="w-52 h-52 rounded-full border-4 border-cyan-500 mx-auto mb-6 object-cover shadow-2xl"
        />

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-600">Surya BS</span>
        </h1>

        <p className="text-xl text-gray-700">
          Computer Science Engineer | AI Enthusiast |
          Web Developer
        </p>
      </motion.div>

    </section>
  );
}

export default Home;