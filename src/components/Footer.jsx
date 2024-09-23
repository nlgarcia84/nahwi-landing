import styled from 'styled-components';

const FooterBox = styled.div`
  padding: 2em;
  background-color: ${(props) => props.theme.colors.textColor};
  color: white;
  text-align: center;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const Img = styled.img`
  width: 1.5em;
`;

const Rights = styled.p`
  padding-bottom: 1em;
`;

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <Rights>2024 - Desarrollado por Desertdrop ©</Rights>
        <SocialMediaContainer>
          <a href="https://www.instagram.com/nahwi.pro/" target="_blank">
            <Img src="src/assets/images/ig.webp" />
          </a>
          <a href="https://www.tiktok.com/@nahwi.pro" target="_blank">
            <Img src="src/assets/images/tiktok.webp" />
          </a>
          <a href="https://www.x.com/nahwipro/" target="_blank">
            <Img src="src/assets/images/x.webp" />
          </a>
        </SocialMediaContainer>
      </FooterBox>
    </>
  );
};
