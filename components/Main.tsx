import styled from "styled-components";
import About from "components/mainPages/About";

const StyledMain = styled.main`
  width: 100vw;
  height: 65vh;
  background: #ffffff;
`;

interface IProps {
  curPage: string;
}

const Main = ({ curPage }: IProps) => {
  return (
    <StyledMain>
      <About />
    </StyledMain>
  );
};

export default Main;
