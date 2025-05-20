import styled from "styled-components";
import BackButton from "../components/BackButton/BackButton";
import FluTrendChart from "../components/FluTrendChart/FluTrendChart";
import ForecastChart from "../components/ForecastChart/ForecastChart";

const Container = styled.div`
  padding: 20px 40px;
  background-color: #fffdf6;
`;

const ForecastPage = () => {
  return (
    <Container>
      <BackButton />
      <FluTrendChart />
      <ForecastChart />
    </Container>
  );
};

export default ForecastPage;
