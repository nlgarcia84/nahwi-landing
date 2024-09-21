import React from 'react';
import styled from 'styled-components';
styled;

const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const WhyTitle = styled.div`
  font-size: 2.5em;
  margin-bottom: 0.5em;
  font-weight: bold;
`;

const WhyText = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 1em 2em;
`;

export const WhySection = () => {
  return (
    <>
      <WhyContainer>
        <WhyTitle>¿Cómo es posible? </WhyTitle>
        <h3>Nuestro enfoque es diferente...</h3>
        <WhyText>
          La mayoría de los métodos tradicionales te bombardean con reglas
          gramaticales y morfológicas desde el inicio... Después te llenan de
          reglas técnicas... Y al final, aún te cuesta comunicarte con fluidez
          en la práctica, a pesar de haber dedicado años a estudiar estos
          conceptos técnicos. ¿Te resulta familiar? Nosotros tenemos un enfoque
          más efectivo para aprender árabe...
        </WhyText>
      </WhyContainer>
    </>
  );
};
