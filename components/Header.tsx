import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 15vh;
  background: #ffffff;
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
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;

const UnderLinedPageLink = styled.div`
  height: 50%;
  width: 15vw;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  font-size: 1.5rem;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

interface IProps {
  curPage: string;
  setCurPage: Function;
}

const Header = ({ curPage, setCurPage }: IProps) => {
  const aboutClickHandler = () => setCurPage("about");
  const workClickHandler = () => setCurPage("work");
  const projectsClickHandler = () => setCurPage("projects");

  return (
    <StyledHeader>
      {curPage === "about" ? (
        <UnderLinedPageLink>About</UnderLinedPageLink>
      ) : (
        <StyledPageLink onClick={aboutClickHandler}>About</StyledPageLink>
      )}
      {curPage === "work" ? (
        <UnderLinedPageLink>Work</UnderLinedPageLink>
      ) : (
        <StyledPageLink onClick={workClickHandler}>Work</StyledPageLink>
      )}
      {curPage === "projects" ? (
        <UnderLinedPageLink>Projects</UnderLinedPageLink>
      ) : (
        <StyledPageLink onClick={projectsClickHandler}>Projects</StyledPageLink>
      )}
    </StyledHeader>
  );
};

export default Header;
