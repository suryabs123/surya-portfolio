import fetal from "../images/projects/fetal.png";
import skin from "../images/projects/skin.png";
import electro from "../images/projects/electro.png";

function Projects() {
  return (
    <div className="py-20 px-8 md:px-20">

      <h1 className="text-5xl font-bold text-cyan-600 text-center mb-14">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Project 1 */}
        <div className="bg-white shadow-xl rounded-3xl p-6 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">

          <img
            src={fetal}
            alt="Fetal Abnormalities Detection"
            className="w-full h-48 object-cover rounded-2xl mb-4"
          />

          <h2 className="text-xl font-bold text-cyan-600">
            Early Detection of Fetal Abnormalities
          </h2>

          <p className="mt-3 text-gray-700">
            Built using KNN, K-Means, SVM and Random Forest algorithms.
          </p>

        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-xl rounded-3xl p-6 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">

          <img
            src={skin}
            alt="Hybrid CNN GNN"
            className="w-full h-48 object-cover rounded-2xl mb-4"
          />

          <h2 className="text-xl font-bold text-cyan-600">
            Hybrid CNN-GNN for Skin Lesion Analysis
          </h2>

          <p className="mt-3 text-gray-700">
            Developed using CNN (ResNet50) and GNN for skin cancer classification.
          </p>

        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-xl rounded-3xl p-6 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">

          <img
            src={electro}
            alt="Electro"
            className="w-full h-48 object-cover rounded-2xl mb-4"
          />

          <h2 className="text-xl font-bold text-cyan-600">
            Electro Repair Service Web App
          </h2>

          <p className="mt-3 text-gray-700">
            Full-stack electronics repair service application using Django.
          </p>

        </div>

        {/* Project 4 */}
        <div className="bg-white shadow-xl rounded-3xl p-6 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <img
            src={port}
            alt="Port"
            className="w-full h-48 object-cover rounded-2xl mb-4"
          />
          <h2 className="text-xl font-bold text-cyan-600">
            Portfolio profile 
          </h2>

          <p className="mt-3 text-gray-700">
            designed the portfolio profile of my own using jsx
          </p>

        </div>

        {/* Project 5 */}
        <div className="bg-white shadow-xl rounded-3xl p-6 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">

          <h2 className="text-xl font-bold text-cyan-600">
            Student Management System
          </h2>

          <p className="mt-3 text-gray-700">
            Developed using JSP, Servlets and MySQL.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Projects;