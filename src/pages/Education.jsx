function Education() {
  return (
    <div className="py-20 px-8 md:px-20">

      <h1 className="text-5xl font-bold text-cyan-600 text-center mb-14">
        Education
      </h1>

      <div className="space-y-8 max-w-5xl mx-auto">

        {/* 1st - M.Tech */}
        <div className="bg-white shadow-xl rounded-3xl p-8 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-600">
             M.Tech
          </h2>

          <p className="text-lg mt-3">
            <span className="font-semibold">Institute:</span>{" "}
            Cambridge Institute of Technology, Bangalore
          </p>

          <p className="text-lg mt-2">
            <span className="font-semibold">CGPA:</span> 8.0
          </p>
        </div>

        {/* 2nd - BE */}
        <div className="bg-white shadow-xl rounded-3xl p-8 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-600">
            B.E
          </h2>

          <p className="text-lg mt-3">
            <span className="font-semibold">Institute:</span>{" "}
            Channabasaveshwara Institute of Technology, Gubbi
          </p>

          <p className="text-lg mt-2">
            <span className="font-semibold">CGPA:</span> 7.9
          </p>
        </div>

        {/* 3rd - PUC */}
        <div className="bg-white shadow-xl rounded-3xl p-8 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-600">
            12th (PUC)
          </h2>

          <p className="text-lg mt-3">
            <span className="font-semibold">Institute:</span>{" "}
            Mahesh PU College, Tumkur
          </p>

          <p className="text-lg mt-2">
            <span className="font-semibold">Percentage:</span> 70%
          </p>
        </div>

        {/* 4th - 10th */}
        <div className="bg-white shadow-xl rounded-3xl p-8 hover:scale-105 transition duration-300 border-l-8 border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-600">
            10th
          </h2>

          <p className="text-lg mt-3">
            <span className="font-semibold">Institute:</span>{" "}
            SM English School, Madhugiri
          </p>

          <p className="text-lg mt-2">
            <span className="font-semibold">Percentage:</span> 90%
          </p>
        </div>

      </div>

    </div>
  );
}

export default Education;