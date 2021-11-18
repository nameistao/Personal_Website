import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;

const Skills = () => {
  return (
    <StyledAbout>
      <h3>languages</h3>
      <p>go, typescript, javascript, java, python, ruby</p>
      <h3>technologies</h3>
      <p>graphql, docker, terraform, aws, datadog</p>
      <h3>front end</h3>
      <p>react, redux, next, css/sass, html</p>
      <h3>databases</h3>
      <p>mongodb, redis, mysql, dynamodb</p>
    </StyledAbout>
  );
};

export default Skills;
