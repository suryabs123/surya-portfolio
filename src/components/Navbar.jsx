import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-md">

      <h1 className="text-2xl font-bold text-cyan-600">
        Surya BS
      </h1>

      <div className="flex gap-6 text-lg font-medium flex-wrap">

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
    </nav>
  );
}

export default Navbar;