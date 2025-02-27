import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const MortalityChart = ({ selectedData }) => {
  return (
    <>
      <Headline>Смертність</Headline>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={selectedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="week"
            label={{ position: "insideBottom", offset: -5 }}
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

MortalityChart.propTypes = {
  selectedData: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.number.isRequired,
      inRate: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MortalityChart;
