import styled from "styled-components";
import LinkedIn from "icons/LinkedIn";
import GitHub from "icons/GitHub";
import Email from "icons/Email";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 15vh;
  background: purple;
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
  color: white;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledPageLink>
        <LinkedIn />
      </StyledPageLink>
      <StyledPageLink>
        <GitHub />
      </StyledPageLink>
      <StyledPageLink>
        <Email />
      </StyledPageLink>
    </StyledFooter>
  );
};

export default Footer;
