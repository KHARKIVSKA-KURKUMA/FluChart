import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import ChartPage from "./pages/ChartPage";

const Container = styled.div`
  background-color: antiquewhite;
  /* width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; */
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ChartPage />
    </Container>
  );
}

export default App;
