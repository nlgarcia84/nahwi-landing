import React from 'react';
import styled from 'styled-components';
styled;

const MedinaContainer = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #19355c;
  color: white;
  text-align: center;
  padding: 2em;
`;

export const MedinaMethod = () => {
  return (
    <MedinaContainer>
      Vas a aprender con el mismo enfoque que los estudiantes de conocimiento en
      Medina. Este es el método que utilicé para dominar el árabe en 2 años.
    </MedinaContainer>
  );
};
