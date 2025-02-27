import styled from "styled-components";
import Charts from "../components/Charts";

const Container = styled.div`
  padding: 20px 40px;
`;

const ChartPage = () => {
  return (
    <Container>
      <Charts />
    </Container>
  );
};

export default ChartPage;
