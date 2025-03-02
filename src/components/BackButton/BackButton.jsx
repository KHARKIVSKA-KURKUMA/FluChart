import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import { StyledLink } from "./BackButton.styled";

const BackButton = () => {
  return (
    <>
      <StyledLink to="/">
        <TbArrowBigLeftLineFilled size={35} color="#000000" />
      </StyledLink>
    </>
  );
};

export default BackButton;
