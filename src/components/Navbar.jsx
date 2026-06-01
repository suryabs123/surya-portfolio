import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <h1 className="text-3xl font-bold text-cyan-600 text-center md:text-left mb-4 md:mb-0">
            Surya BS
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg font-medium">

            <Link to="/" className="hover:text-cyan-500">
              About
            </Link>

            <Link to="/education" className="hover:text-cyan-500">
              Education
            </Link>

            <Link to="/skills" className="hover:text-cyan-500">
              Skills
            </Link>

            <Link to="/projects" className="hover:text-cyan-500">
              Projects
            </Link>

            <Link to="/experience" className="hover:text-cyan-500">
              Experience
            </Link>

            <Link to="/contact" className="hover:text-cyan-500">
              Contact
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;