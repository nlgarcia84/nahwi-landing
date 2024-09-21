import React from 'react';
import { items } from '../assets/items';
import styled from 'styled-components';
items;

const UnList = styled.ul`
  padding: 0.5em;
`;

const ListItems = styled.li`
  list-style: none;
  background-color: #f6c402;
  margin: 1em;
  padding: 1em;
`;

export const Items = () => {
  return (
    <div>
      <UnList>
        {items.map((item) => (
          <ListItems key={item.id}>{item.description}</ListItems>
        ))}
      </UnList>
    </div>
  );
};
