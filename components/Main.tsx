import styled from "styled-components";
import About from "components/mainPages/About";
import Skills from "components/mainPages/Skills";
import Projects from "components/mainPages/Projects";

const StyledMain = styled.main`
  width: 100vw;
  height: 65vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

interface IProps {
  curPage: string;
}

const Main = ({ curPage }: IProps) => {
  return (
    <StyledMain>
      {curPage == "about" && <About />}
      {curPage == "skills" && <Skills />}
      {curPage == "projects" && <Projects />}
    </StyledMain>
  );
};

export default Main;
