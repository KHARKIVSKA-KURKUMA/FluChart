import {
  Container,
  Headline,
  BgWrap,
  List,
  Item,
  StyledLink,
} from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Headline>ГРВІ в Україні</Headline>
      <BgWrap />
      <List>
        <Item>
          <StyledLink to="stats">Статистика захворюваності</StyledLink>
        </Item>
        <Item>
          <StyledLink to="forecast">Прогнозування захворюваності</StyledLink>
        </Item>
      </List>
    </Container>
  );
};

export default Home;
