import BackButton from "../components/BackButton/BackButton";
import FluTrendChart from "../components/FluTrendChart/FluTrendChart";
import ForecastChart from "../components/ForecastChart/ForecastChart";
import ForecastMetrics from "../components/ForecastChart/ForecastMetrics/ForecastMetrics";

const ForecastPage = () => {
  return (
    <div>
      <BackButton />
      <FluTrendChart />
      <ForecastChart />
    </div>
  );
};

export default ForecastPage;
