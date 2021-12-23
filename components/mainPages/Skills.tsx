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
      <strong>languages</strong>
      <p>typescript, javascript, go, java, python</p>
      <strong>databases</strong>
      <p>mongodb, redis, mysql, dynamodb</p>
      <strong>technologies</strong>
      <p>graphql, apollo, docker, elasticsearch, terraform, aws, datadog</p>
      <strong>front end</strong>
      <p>
        react, redux, next, css/sass, html, jest, react testing library, cypress
      </p>
    </StyledAbout>
  );
};

export default Skills;
