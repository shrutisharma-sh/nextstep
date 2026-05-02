function LearningPath({ path }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Learning Path
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {path.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
          >
            <p className="text-gray-300">
              Step {index + 1}
            </p>

            <h3 className="text-xl font-bold mt-2">
              {item}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
}

export default LearningPath;