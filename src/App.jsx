import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import ChartPage from "./pages/ChartPage";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ChartPage />
    </Container>
  );
}

export default App;
