import styled from "styled-components";
import LinkedIn from "icons/LinkedIn";
import GitHub from "icons/GitHub";
import Email from "icons/Email";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 15vh;
  background: #264653;
  display: flex;
  justify-content: center;
`;

const StyledPageLink = styled.div`
  height: 50%;
  width: 10vw;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  color: white;
  font-size: 1.5rem;
`;

const StyledAnchor = styled.a`
  height: auto;
  width: 50%;
  margin: auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledPageLink>
        <StyledAnchor
          href="https://www.linkedin.com/in/nameistao/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn />
        </StyledAnchor>
      </StyledPageLink>
      <StyledPageLink>
        <StyledAnchor
          href="https://github.com/nameistao"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </StyledAnchor>
      </StyledPageLink>
      <StyledPageLink>
        <StyledAnchor
          href="mailto:taoluo@usc.edu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Email />
        </StyledAnchor>
      </StyledPageLink>
    </StyledFooter>
  );
};

export default Footer;
