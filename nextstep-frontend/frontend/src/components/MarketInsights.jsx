import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MarketInsights({ market }) {

  const chartData = [
    {
      name: "Demand",
      value:
        market.demand === "High"
          ? 90
          : market.demand === "Medium"
          ? 60
          : 30,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Market Insights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="space-y-4">

          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-cyan-400 text-xl">
              Salary Range
            </h3>

            <p className="text-2xl mt-2">
              {market.salary}
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-purple-400 text-xl">
              Top Companies
            </h3>

            <ul className="mt-3 space-y-2">
              {market.companies.map((company, index) => (
                <li key={index}>
                  • {company}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="bg-white/10 p-6 rounded-2xl">

          <h3 className="text-pink-400 text-xl mb-4">
            Demand Level
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>
    </div>
  );
}

export default MarketInsights;