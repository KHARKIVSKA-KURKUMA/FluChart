import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MortalityChart = ({ selectedData }) => {
  return (
    <>
      <h2>Смертність</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={selectedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="week"
            label={{ value: "Тиждень", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            label={{ value: "Смертність", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mortality"
            stroke="#ff0000"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default MortalityChart;
