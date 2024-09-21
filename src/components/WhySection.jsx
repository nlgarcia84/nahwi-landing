import React from 'react';
import styled from 'styled-components';
styled;

const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  text-align: center;
`;

const WhyTitle = styled.div`
  font-size: 2em;
  margin-bottom: 0.5em;
  font-weight: bold;
  line-height: 1em;
  text-transform: uppercase;
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
        <WhyTitle>Aprender árabe no tiene que ser una tortura</WhyTitle>
        <h3>Nuestro enfoque es diferente...</h3>
        <WhyText>
          ⁠Si crees que es difícil, aburrido o que "nunca vas a conseguirlo",
          permíteme decirte una cosa: no es tu culpa. Hasta ahora, nadie te ha
          mostrado un método pensado para hispanohablantes que realmente
          funcione. ⁠NahwiPro no te ofrece promesas vacías ni técnicas
          anticuadas. Aquí aprenderás árabe a tu ritmo, con clases
          personalizadas y dinámicas, con profesores nativos que entienden
          exactamente lo que necesitas para empezar a hablar el idioma *desde
          ya*.
        </WhyText>
      </WhyContainer>
    </>
  );
};
