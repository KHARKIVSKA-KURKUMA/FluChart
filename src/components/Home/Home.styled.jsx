import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../img/ua_map.png";

const Container = styled.div`
  background-color: #243a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  min-height: 100vh;
`;

const Headline = styled.h1`
  font-family: "Caveat", cursive;
  font-size: 72px;
  color: #ffffff;
  margin-top: 40px;
`;

const BgWrap = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 800px;
  width: 1000px;
  opacity: 0.2;
  position: absolute;
  top: 100px;
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 250px;
  z-index: 1;
  display: flex;
  gap: 30px;
  padding: 0;
`;

const Item = styled.li`
  background-color: #2c4e80;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #cbdceb;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
`;

const StyledLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  padding: 40px 60px;
`;

export { Container, Headline, BgWrap, List, Item, StyledLink };
