import PropTypes from "prop-types";
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
import styled from "styled-components";

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const IntensiveRate = ({ selectedData }) => {
  return (
    <>
      <Headline>Інтенсивний показник захворюваності</Headline>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={selectedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis
            label={{
              value: "Інтенсивність",
              angle: -90,
              position: "insideLeft",
            }}
            domain={[0, 1000]}
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
            label="Епідемічний поріг"
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
            label="Високий підйом"
          />
          <ReferenceLine
            y={921.59}
            stroke="red"
            strokeDasharray="3 3"
            label="Дуже високий підйом"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

IntensiveRate.propTypes = {
  selectedData: PropTypes.arrayOf(
    PropTypes.shape({
      week: PropTypes.number.isRequired,
      inRate: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default IntensiveRate;
