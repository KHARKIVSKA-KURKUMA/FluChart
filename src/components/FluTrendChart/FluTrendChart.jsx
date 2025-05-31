import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Headline, Descr, trendColors } from "./FluTrendChart.styled";

import fluStats from "../../../data/fluStats.json";

const FluTrendChart = () => {
  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const [stats, setStats] = useState({ min: 0, max: 0, avg: 0 });

  useEffect(() => {
    const formattedData = {};
    const allCases = [];
    const yearSet = new Set();

    fluStats.years.forEach((yearData) => {
      yearSet.add(yearData.year);
      yearData.data.forEach((weekData) => {
        const weekKey = `W${weekData.week}`;
        if (!formattedData[weekKey]) {
          formattedData[weekKey] = { week: weekData.week };
        }
        formattedData[weekKey][yearData.year] = weekData.cases;
        allCases.push(weekData.cases);
      });
    });

    setData(Object.values(formattedData));
    setYears(Array.from(yearSet).sort());
    setStats({
      min: Math.min(...allCases),
      max: Math.max(...allCases),
      avg: Math.round(allCases.reduce((a, b) => a + b, 0) / allCases.length),
    });
  }, []);

  return (
    <>
      <Headline>
        Щотижнева захворюваність на ГРВІ в Україні за 2019–2024 роки
      </Headline>
      <Descr>
        📉 Мінімум: {stats.min} | 📈 Максимум: {stats.max} | 📊 Середнє:{" "}
        {stats.avg}
      </Descr>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="week"
            label={{ position: "insideBottom", offset: -5 }}
            tick={{ fontSize: 10 }}
          />
          <YAxis label={{ angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          {years.map((year, index) => (
            <Line
              key={year}
              type="monotone"
              dataKey={year}
              stroke={trendColors[index % trendColors.length]}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

FluTrendChart.propTypes = {
  selectedData: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.string.isRequired,
    })
  ),
};

export default FluTrendChart;
