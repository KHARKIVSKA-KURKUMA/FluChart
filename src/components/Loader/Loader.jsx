import { Triangle } from "react-loader-spinner";
import styled from "styled-components";

const LoadingDesc = styled.p`
  font-size: 23px;
  text-align: center;
  margin-top: 5px;
`;

const Loader = () => {
  return (
    <>
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="#ff0000"
        ariaLabel="triangle-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClass=""
      />
      <LoadingDesc>Завантаження даних...</LoadingDesc>
    </>
  );
};

export default Loader;
