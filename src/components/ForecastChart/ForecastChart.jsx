import { useEffect, useState } from "react";
import Papa from "papaparse";
import { parse, startOfISOWeek, format } from "date-fns";
import styled from "styled-components";

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
    fetch("../../../data/flu_forecast.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedForecast = results.data
              .filter((item) => item.yhat && !isNaN(item.yhat))
              .map((item) => ({
                date: item.ds,
                yhat: parseFloat(item.yhat),
              }));
            setForecastData(parsedForecast);
          },
        });
      })
      .catch((error) => {
        console.error("❌ Error loading forecast CSV:", error);
      });

    fetch("../../../data/fluStats.json")
      .then((response) => response.json())
      .then((json) => {
        const parsedReal = json.years.flatMap((yearBlock) =>
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
      })
      .catch((error) => {
        console.error("❌ Error loading real JSON data:", error);
      });
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
              tickFormatter={(dateStr) => {
                const year = dateStr.slice(0, 4);
                return year;
              }}
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
