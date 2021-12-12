import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;

const Projects = () => {
  return (
    <StyledAbout>
      <a
        href="https://www.pomokanban.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>pomokanban</p>
      </a>
      <a
        href="https://www.restaurantrec.xyz/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>restaurant recommender</p>
      </a>

      <a
        href="https://chesstutor.pythonanywhere.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>chess puzzles</p>
      </a>
    </StyledAbout>
  );
};

export default Projects;
