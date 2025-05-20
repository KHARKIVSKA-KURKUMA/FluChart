import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  Td,
  Th,
  Tr,
  Headline,
  Container,
} from "./ForecastMetrics.styled";

const ForecastMetrics = ({ forecastData, realData }) => {
  const [metricsByYear, setMetricsByYear] = useState([]);

  useEffect(() => {
    if (forecastData.length === 0 || realData.length === 0) return;

    const merged = realData
      .map((real) => {
        const forecast = forecastData.find((f) => f.date === real.date);
        return {
          ...real,
          yhat: forecast ? forecast.yhat : null,
          year: new Date(real.date).getFullYear(),
        };
      })
      .filter((d) => d.yhat !== null);

    const grouped = {};
    merged.forEach(({ year, real, yhat }) => {
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push({ real, yhat });
    });

    const results = Object.entries(grouped).map(([year, values]) => {
      const n = values.length;
      const mae =
        values.reduce((sum, v) => sum + Math.abs(v.real - v.yhat), 0) / n;
      const mse =
        values.reduce((sum, v) => sum + Math.pow(v.real - v.yhat, 2), 0) / n;
      const rmse = Math.sqrt(mse);
      const mape =
        (values.reduce(
          (sum, v) => sum + Math.abs((v.real - v.yhat) / v.real),
          0
        ) /
          n) *
        100;

      return { year, mae, mse, rmse, mape };
    });

    setMetricsByYear(results);
  }, [forecastData, realData]);

  return (
    <Container>
      <Headline>Оцінки точності моделі прогнозування по кожному року</Headline>
      <Table>
        <thead>
          <Tr>
            <Th>Рік</Th>
            <Th title="(Mean Absolute Error)">
              MAE — середнє абсолютне відхилення між прогнозом і реальністю
            </Th>
            <Th title="(Mean Squared Error)">
              MSE — середнє квадратичне відхилення, підкреслює великі помилки
            </Th>
            <Th title="(Root Mean Squared Error)">
              RMSE — корінь з MSE, у тому ж масштабі, що й самі значення
            </Th>
            <Th title="(Mean Absolute Percentage Error)">
              MAPE (%) — середній відсоток помилки
            </Th>
          </Tr>
        </thead>
        <tbody>
          {metricsByYear.map(({ year, mae, mse, rmse, mape }) => (
            <Tr key={year}>
              <Td>{year}</Td>
              <Td>{mae.toFixed(2)}</Td>
              <Td>{mse.toFixed(2)}</Td>
              <Td>{rmse.toFixed(2)}</Td>
              <Td>{mape.toFixed(2)}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

ForecastMetrics.propTypes = {
  forecastData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      yhat: PropTypes.number.isRequired,
    })
  ).isRequired,
  realData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      real: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ForecastMetrics;
