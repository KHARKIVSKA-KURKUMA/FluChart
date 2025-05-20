import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 140px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 18px;
  border: 2px solid #efefef;
`;

const Th = styled.th`
  padding: 20px;
  background-color: #c599b6;
  text-align: center;
  color: #410445;
  font-size: 20px;
  border: 1px solid #efefef;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #efefef;
  text-align: center;
  color: #410445;
  font-size: 20px;
`;

const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #e6b2ba;
  }
  &:nth-child(even) {
    background-color: #fad0c4;
  }
`;

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-family: "Caveat", cursive;
  font-size: 36px;
`;

export { Table, Td, Th, Tr, Headline, Container };
