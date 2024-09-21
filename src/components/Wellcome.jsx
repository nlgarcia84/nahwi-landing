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
  width: 100%;
`;

const ImgCard = styled.div`
  width: 300px;
  height: 300px;
  font-family: 'Open Sans', sans-serif;

  background-image: url(${khaledKhutba});
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextCard = styled.div`
  width: 300px;
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
        Aprende árabe de la A a la Z con total fluidez. Garantía de éxito al
        finalizar el curso
      </Title>
      <SubTitle>
        Te presentaré cómo nuestros estudiantes avanzan desde el primer día
        hasta alcanzar la fluidez. Después, podrás decidir si quieres
        experimentar este mismo progreso con nuestro programa de árabe.
      </SubTitle>
      <Card>
        <ImgCard></ImgCard>
        <TextCard>Aprender el árabe es posible si sabes como</TextCard>
      </Card>
      <ButtonCTA />
    </WellcomeContainer>
  );
};
