import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const IntensiveRate = ({ selectedData }) => {
  return (
    <>
      <h2>Інтенсивний показник захворюваності</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={selectedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis
            label={{
              value: "Інтенсивність",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="inRate"
            stroke="#ff7300"
            strokeWidth={2}
          />
          <ReferenceLine
            y={518.68}
            stroke="blue"
            strokeDasharray="3 3"
            label="Базовий поріг"
          />
          <ReferenceLine
            y={649.71}
            stroke="green"
            strokeDasharray="3 3"
            label="Середній підйом"
          />
          <ReferenceLine
            y={845.25}
            stroke="orange"
            strokeDasharray="3 3"
            label="Високий рівень"
          />
          <ReferenceLine
            y={921.59}
            stroke="red"
            strokeDasharray="3 3"
            label="Дуже високий рівень"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default IntensiveRate;
