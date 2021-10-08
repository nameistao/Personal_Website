import styled from "styled-components";

const StyledMain = styled.main`
  width: 100vw;
  height: 70vh;
  background: green;
`;

interface IProps {
  curPage: string;
}

const Main = ({ curPage }: IProps) => {
  return <StyledMain></StyledMain>;
};

export default Main;
