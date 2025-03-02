import styled from "styled-components";

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-family: "Caveat", cursive;
  font-size: 56px;
`;

const ChartsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
export { Headline, ChartsList, FormContainer };
