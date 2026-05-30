function Projects() {
  return (
    <div className="py-20 px-10">

      <h1 className="text-5xl font-bold text-cyan-600 mb-10">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-cyan-600">
            Stock Prediction System
          </h2>
          <p className="mt-3">
            Built using RNN, LSTM and GRU.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-cyan-600">
            Electro Django Website
          </h2>
          <p className="mt-3">
            Electronics booking web app.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;