import { useEffect, useState } from "react";
import { parse, startOfISOWeek, format } from "date-fns";
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
import forecastJson from "../../../data/flu_forecast.json";
import realJson from "../../../data/fluStats.json";
import ForecastMetrics from "./ForecastMetrics/ForecastMetrics";
import { Headline, ForecastContainer } from "./ForecastChart.styled";
import Loader from "../Loader/Loader";

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
    <>
      <Headline>Прогноз захворюваності на 2025 рік</Headline>
      {forecastData.length > 0 ? (
        <ForecastContainer>
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
          </ResponsiveContainer>{" "}
        </ForecastContainer>
      ) : (
        <Loader />
      )}
      <ForecastMetrics forecastData={forecastData} realData={realData} />
    </>
  );
};

export default ForecastChart;
