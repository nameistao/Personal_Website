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

const Skills = () => {
  return (
    <StyledAbout>
      <p>go, typescript, javascript, java, python, ruby</p>
    </StyledAbout>
  );
};

export default Skills;
