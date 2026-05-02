import { useState } from "react";
import axios from "axios";

import Hero from "./components/Hero";
import QueryBox from "./components/QueryBox";
import ResponseCards from "./components/ResponseCards";
import RoadmapTimeline from "./components/RoadmapTimeline";
import SkillGraph from "./components/SkillGraph";
import MarketInsights from "./components/MarketInsights";
import LearningPath from "./components/LearningPath";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // API Call
  const handleSubmit = async () => {
    if (!query) return;

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          query: query,
        }
      );

      setData(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white px-4 md:px-10">
      
      <Hero />

      <QueryBox
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {data && (
        <div className="space-y-10 pb-20">

          <ResponseCards data={data} />

          <RoadmapTimeline roadmap={data.roadmap} />

          <SkillGraph graph={data.graph} />

          <MarketInsights market={data.market_insights} />

          <LearningPath path={data.learning_path} />

        </div>
      )}
    </div>
  );
}

export default App;