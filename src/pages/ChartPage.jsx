import styled from "styled-components";
import Charts from "../components/Charts";
import BackButton from "../components/BackButton/BackButton";

const Container = styled.div`
  padding: 20px 40px;
  background-color: #f4f6ff;
`;

const ChartPage = () => {
  return (
    <Container>
      <BackButton />
      <Charts />
    </Container>
  );
};

export default ChartPage;
