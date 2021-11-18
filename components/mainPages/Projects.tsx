import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 10%;
  margin: auto;
  text-align: center;
`;

const Projects = () => {
  return (
    <StyledAbout>
      <p>restaurant recommender</p>
      <p>pomodororo</p>
    </StyledAbout>
  );
};

export default Projects;
