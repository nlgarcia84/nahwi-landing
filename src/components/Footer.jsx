import styled from 'styled-components';

const FooterBox = styled.div`
  padding: 2em;
  background-color: ${(props) => props.theme.colors.textColor};
  color: white;
  text-align: center;
`;

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <p>2024 - Desarrollado por Desertdrop ©</p>
      </FooterBox>
    </>
  );
};
