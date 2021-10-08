import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 15vh;
  background: blue;
  display: flex;
  justify-content: center;
`;

const StyledPageLink = styled.div`
  height: 50%;
  width: 15vw;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  color: white;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledPageLink>About</StyledPageLink>
      <StyledPageLink>Work</StyledPageLink>
      <StyledPageLink>Projects</StyledPageLink>
    </StyledHeader>
  );
};

export default Header;
