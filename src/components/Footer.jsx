import styled from 'styled-components';
import Instagram from '../assets/images/ig.webp';
import Tiktok from '../assets/images/tiktok.webp';
import XSocial from '../assets/images/x.webp';

const FooterBox = styled.div`
  padding: 2em;
  background-color: ${(props) => props.theme.colors.textColor};
  color: white;
  text-align: center;
  font-size: 1em;
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
            <Img src={Instagram} />
          </a>
          <a href="https://www.tiktok.com/@nahwi.pro" target="_blank">
            <Img src={Tiktok} />
          </a>
          <a href="https://www.x.com/nahwipro/" target="_blank">
            <Img src={XSocial} />
          </a>
        </SocialMediaContainer>
      </FooterBox>
    </>
  );
};
