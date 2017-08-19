import React from 'react';
import styled from 'styled-components';
import Option from './Option';

const Filter = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  padding-bottom: 1.5rem;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow: auto;
  @media all and (min-width: 48rem) {
    margin: 0;
  }
`;

export default () =>
  (<Filter>
    <Option value="Category" />
    <Option value="Colour" />
    <Option value="Size" />
    <Option position="right" value="Sort by price" />
  </Filter>);
