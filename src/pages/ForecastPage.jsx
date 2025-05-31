import styled from "styled-components";
import BackButton from "../components/BackButton/BackButton";
import ForecastChart from "../components/ForecastChart/ForecastChart";

const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const ForecastPage = () => {
  return (
    <Container>
      <BackButton />
      <ForecastChart />
    </Container>
  );
};

export default ForecastPage;
