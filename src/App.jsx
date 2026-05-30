import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-cyan-100 via-white to-blue-200 min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;