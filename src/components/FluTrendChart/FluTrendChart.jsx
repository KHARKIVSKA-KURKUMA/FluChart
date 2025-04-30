import React, { useEffect, useState } from "react";
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
import styled from "styled-components";

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-family: "Caveat", cursive;
  font-size: 36px;
`;

const colors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#ff0000",
  "#00c49f",
];

const FluTrendChart = () => {
  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const [stats, setStats] = useState({ min: 0, max: 0, avg: 0 });

  useEffect(() => {
    fetch("../../../data/fluStats.json")
      .then((res) => res.json())
      .then((jsonData) => {
        const formattedData = {};
        const allCases = [];
        const yearSet = new Set();

        jsonData.years.forEach((yearData) => {
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
          avg: Math.round(
            allCases.reduce((a, b) => a + b, 0) / allCases.length
          ),
        });
      });
  }, []);

  return (
    <>
      <Headline>Загальна кількість хворих</Headline>
      <p style={{ textAlign: "center" }}>
        📉 Мінімум: {stats.min} | 📈 Максимум: {stats.max} | 📊 Середнє:{" "}
        {stats.avg}
      </p>
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
              stroke={colors[index % colors.length]}
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
