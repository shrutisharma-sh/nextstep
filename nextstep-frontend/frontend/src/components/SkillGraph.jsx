import ForceGraph2D from "react-force-graph-2d";

function SkillGraph({ graph }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Skill Dependency Graph
      </h2>

      <div className="bg-white/10 rounded-2xl overflow-hidden border border-white/10">

        <ForceGraph2D
          graphData={graph}
          nodeAutoColorBy="id"
          width={900}
          height={500}
          backgroundColor="#050816"
        />

      </div>
    </div>
  );
}

export default SkillGraph;