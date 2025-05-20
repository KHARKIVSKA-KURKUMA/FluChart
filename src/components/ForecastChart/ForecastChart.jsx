import { useEffect, useState } from "react";
import { parse, startOfISOWeek, format } from "date-fns";
import styled from "styled-components";
import forecastJson from "../../../data/flu_forecast.json";
import realJson from "../../../data/fluStats.json";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import ForecastMetrics from "./ForecastMetrics/ForecastMetrics";

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-family: "Caveat", cursive;
  font-size: 36px;
`;

const ForecastChart = () => {
  const [forecastData, setForecastData] = useState([]);
  const [realData, setRealData] = useState([]);

  useEffect(() => {
    const parsedForecast = forecastJson
      .filter((item) => item.yhat && !isNaN(item.yhat))
      .map((item) => ({
        date: item.ds.slice(0, 10),
        yhat: parseFloat(item.yhat),
      }));
    setForecastData(parsedForecast);

    const parsedReal = realJson.years.flatMap((yearBlock) =>
      yearBlock.data.map((entry) => {
        const isoWeekStr = `${yearBlock.year}-W${entry.week
          .toString()
          .padStart(2, "0")}`;
        const weekStart = startOfISOWeek(
          parse(isoWeekStr, "RRRR-'W'II", new Date())
        );
        return {
          date: format(weekStart, "yyyy-MM-dd"),
          real: entry.cases,
        };
      })
    );
    setRealData(parsedReal);
  }, []);

  const mergedData = forecastData.map((forecast) => {
    const realEntry = realData.find((real) => real.date === forecast.date);
    return {
      ...forecast,
      real: realEntry ? realEntry.real : null,
    };
  });

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Headline>Прогноз захворюваності на 2025 рік</Headline>
      {forecastData.length > 0 ? (
        <ResponsiveContainer>
          <LineChart data={mergedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10 }}
              tickFormatter={(dateStr) => dateStr.slice(0, 4)}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="yhat"
              stroke="#1a1ef7"
              strokeWidth={2}
              dot={false}
              name="Прогноз"
            />
            <Line
              type="monotone"
              dataKey="real"
              stroke="#f11990"
              strokeWidth={2}
              dot={false}
              name="Фактичні дані"
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Завантаження даних...
        </p>
      )}
      <ForecastMetrics forecastData={forecastData} realData={realData} />
    </div>
  );
};

export default ForecastChart;
