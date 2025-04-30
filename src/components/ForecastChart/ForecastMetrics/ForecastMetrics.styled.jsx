import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 0.95rem;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 2px solid #ccc;
  text-align: left;
  cursor: help;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

const Headline = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-family: "Caveat", cursive;
  font-size: 36px;
`;

export { Table, Td, Th, Tr, Headline };
