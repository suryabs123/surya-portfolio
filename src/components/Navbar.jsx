import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-3xl font-bold text-cyan-600">
            Surya BS
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-lg font-medium">

            <Link to="/" className="hover:text-cyan-500 transition">
              About
            </Link>

            <Link to="/education" className="hover:text-cyan-500 transition">
              Education
            </Link>

            <Link to="/skills" className="hover:text-cyan-500 transition">
              Skills
            </Link>

            <Link to="/projects" className="hover:text-cyan-500 transition">
              Projects
            </Link>

            <Link to="/experience" className="hover:text-cyan-500 transition">
              Experience
            </Link>

            <Link to="/contact" className="hover:text-cyan-500 transition">
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-lg font-medium bg-white rounded-xl p-4 shadow-lg">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              About
            </Link>

            <Link
              to="/education"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Education
            </Link>

            <Link
              to="/skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Projects
            </Link>

            <Link
              to="/experience"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Experience
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-500"
            >
              Contact
            </Link>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;