function RoadmapTimeline({ roadmap }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Career Roadmap
      </h2>

      <div className="space-y-6">

        {roadmap.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <div className="bg-white/10 p-5 rounded-xl flex-1 border border-white/10 hover:scale-[1.02] transition">
              {step}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RoadmapTimeline;