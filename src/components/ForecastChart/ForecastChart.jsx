import styled from "styled-components";

const Iframe = styled.iframe`
  margin-top: 60px;
  min-height: calc(100vh - 200px);
`;
const Reminder = styled.div`
  text-align: center;
  padding: 12px;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 4px;
  color: #856404;
  margin-bottom: 20px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
`;

const ForecastChart = () => {
  return (
    <>
      <Iframe src="http://localhost:8501" width="100%" />
      <Reminder>
        Для коректного відображення прогнозування, будь ласка, переконайтеся, що
        запущено Streamlit сервер за допомогою команди{" "}
        <code>streamlit run app.py</code>.
      </Reminder>
    </>
  );
};

export default ForecastChart;
