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
      <p>go, typescript, javascript, java, python</p>
      <strong>databases</strong>
      <p>mongodb, redis, mysql, dynamodb, etcd</p>
      <strong>technologies</strong>
      <p>graphql, docker, terraform, aws, datadog</p>
      <strong>front end</strong>
      <p>react, redux, next, css/sass, html</p>
    </StyledAbout>
  );
};

export default Skills;
