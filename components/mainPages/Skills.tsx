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
      <strong>databases & cloud</strong>
      <p>mongodb, redis, mysql, dynamodb, aws</p>
      <strong>technologies</strong>
      <p>graphql, docker, elasticsearch, terraform, aws, datadog</p>
      <strong>front end</strong>
      <p>react, redux, next, css/sass, html, jest, enzyme, cypress</p>
    </StyledAbout>
  );
};

export default Skills;
