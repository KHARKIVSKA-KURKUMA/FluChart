import styled from "styled-components";

const Headline = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const ChartsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export { Headline, ChartsList, FormContainer };
