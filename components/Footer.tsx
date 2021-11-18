import styled from "styled-components";
import LinkedIn from "icons/LinkedIn";
import GitHub from "icons/GitHub";
import Email from "icons/Email";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 20vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

const StyledPageLink = styled.div`
  height: 20vh;
  width: 20vh;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
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
          <LinkedIn color="black" />
        </StyledAnchor>
      </StyledPageLink>
      <StyledPageLink>
        <StyledAnchor
          href="https://github.com/nameistao"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub color="black" />
        </StyledAnchor>
      </StyledPageLink>
      <StyledPageLink>
        <StyledAnchor
          href="mailto:taoluo@usc.edu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Email color="black" />
        </StyledAnchor>
      </StyledPageLink>
    </StyledFooter>
  );
};

export default Footer;
