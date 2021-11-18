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
        href="https://github.com/nameistao/Algo_Patterns"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>algo patterns</p>
      </a>
      <a
        href="https://restaurant-recommender-v3.vercel.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>restaurant recommender</p>
      </a>
      <a
        href="http://www.pomodororo.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>pomodororo</p>
      </a>
      <a
        href="https://github.com/nameistao/Chess_Puzzles"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>chess puzzles</p>
      </a>
    </StyledAbout>
  );
};

export default Projects;
