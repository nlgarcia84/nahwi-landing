import React from 'react';
import styled from 'styled-components';
import { Items } from './Items';
Items;
styled;

const FocusSection = styled.div`
  text-align: center;
  padding: 2em;
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5em;
`;

export const Focus = () => {
  return (
    <FocusSection>
      La gramática y la morfología no deben ser lo primero al aprender Árabe...
      En lugar de eso, deberías concentrarte en lo siguiente...
      <Items />
    </FocusSection>
  );
};
