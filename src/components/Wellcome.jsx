import styled from 'styled-components';
import { ButtonCTA } from './ButtonCTA';
import khaledKhutba from '../assets/images/khaledImgKhutba.webp';

const WellcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #19355c;
  color: white;
  text-align: center;
  padding: 2em;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  color: #f6c402;
  line-height: 1em;
`;

const SubTitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  padding: 1em;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  margin: 1em;
`;

const ImgCard = styled.div`
  width: 100%;
  height: 300px;
  font-family: 'Open Sans', sans-serif;

  background-image: url(${khaledKhutba});
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextCard = styled.div`
  height: auto;
  background-color: white;
  font-size: 1.5em;
  line-height: 1em;
  color: black;
  padding: 1em;
`;

export const Wellcome = () => {
  return (
    <WellcomeContainer>
      <Title>
        ¿Harto de intentarlo sin resultados? Aprende árabe de una vez por
        todas... ¡y empieza a hablarlo ya!
      </Title>
      <SubTitle>
        Si llevas tiempo pensando en aprender árabe y no lo has hecho porque
        crees que es complicado, lento o imposible para ti... estás en el lugar
        adecuado. NahwiPro te enseña el idioma desde el primer día, de manera
        clara, sencilla y diseñada para hispanohablantes como tú.
      </SubTitle>
      <Card>
        <ImgCard></ImgCard>
        <TextCard>Aprender el árabe es posible si sabes como</TextCard>
      </Card>
      <h2>¿Estás listo para empezar?</h2>
      <ButtonCTA />
    </WellcomeContainer>
  );
};
