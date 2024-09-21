import React from 'react';
import styled from 'styled-components';
import { benefits } from '../assets/benefits';
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

const MedinaTitle = styled.div`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  font-weight: bold;
  line-height: 1em;
  text-transform: uppercase;
`;

const Item = styled.li`
  list-style: none;
  margin: 0.5em;
  padding: 1em;
  background-color: #f6c402;
  color: #19355c;
  border-radius: 10px;
`;

export const MedinaMethod = () => {
  return (
    <MedinaContainer>
      <MedinaTitle>¿Por qué Nahwi es diferente?</MedinaTitle>
      {benefits.map((benefit) => (
        <Item key={benefit.id}>{benefit.description}</Item>
      ))}
    </MedinaContainer>
  );
};
