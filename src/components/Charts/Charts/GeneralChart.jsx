import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const GeneralChart = ({ selectedData }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={selectedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="week"
            label={{ value: "Тиждень", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            label={{ value: "Випадки", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cases"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default GeneralChart;
