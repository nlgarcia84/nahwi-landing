import React from 'react';
import styled from 'styled-components';

const FocusSection = styled.div`
  text-align: center;
  padding: 2em;
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5em;
`;

const FinalSection = styled.div`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  font-weight: bold;
  line-height: 1em;
  text-transform: uppercase;
`;

export const Focus = () => {
  return (
    <FocusSection>
      <FinalSection>Tú puedes hacerlo, y lo sabes</FinalSection>
      Aprender árabe no es cuestión de suerte o talento, es cuestión de tener el
      método adecuado y dedicarle un poco de tiempo. Nahwi te da todo lo que
      necesitas para que finalmente lo consigas.
    </FocusSection>
  );
};
