function Skills() {
  return (
    <div className="py-20 px-10">

      <h1 className="text-5xl font-bold text-cyan-600 mb-10">
        Skills
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <h2 className="text-2xl font-bold text-cyan-600 mb-3">
            Programming
          </h2>
          <p>Python, Java, C</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <h2 className="text-2xl font-bold text-cyan-600 mb-3">
            Web Development
          </h2>
          <p>Django, HTML, CSS, JavaScript, JSP, Servlets</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <h2 className="text-2xl font-bold text-cyan-600 mb-3">
            AI / ML
          </h2>
          <p>RNN, LSTM, GRU, CNN, GNN</p>
        </div>

      </div>

    </div>
  );
}

export default Skills;