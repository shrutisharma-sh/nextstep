function QueryBox({
  query,
  setQuery,
  handleSubmit,
  loading,
}) {
  return (
    <div className="max-w-4xl mx-auto mb-12">

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">

        <textarea
          rows="4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask your AI career coach..."
          className="w-full bg-transparent outline-none text-lg resize-none"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all"
        >
          {loading ? "Analyzing..." : "Ask AI"}
        </button>

      </div>
    </div>
  );
}

export default QueryBox;