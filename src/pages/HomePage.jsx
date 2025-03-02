import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>ГРВІ в Україні</h1>
      <Link to="stats">Статистика захворюваності</Link>
      <Link to="forecast">Статистика захворюваності</Link>
    </div>
  );
};

export default HomePage;
