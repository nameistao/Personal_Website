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

const About = () => {
  return (
    <StyledAbout>
      <p>my name is tao luo, and i'm a software enginner at fabric.</p>
      <p>previously, i studied computer science and business at usc.</p>
    </StyledAbout>
  );
};

export default About;
