import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ChartPage, ForecastPage, HomePage } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/FluChart/"}>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/stats" element={<ChartPage />} />
            <Route path="/forecast" element={<ForecastPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
