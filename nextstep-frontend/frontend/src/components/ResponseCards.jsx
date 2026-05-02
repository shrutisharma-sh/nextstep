function ResponseCards({ data }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
        <h2 className="text-cyan-400 text-xl mb-2">
          Emotion
        </h2>

        <p className="capitalize text-2xl">
          {data.emotion}
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
        <h2 className="text-purple-400 text-xl mb-2">
          Career
        </h2>

        <p className="capitalize text-2xl">
          {data.career}
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
        <h2 className="text-pink-400 text-xl mb-2">
          Guidance
        </h2>

        <p>{data.guidance}</p>
      </div>

    </div>
  );
}

export default ResponseCards;