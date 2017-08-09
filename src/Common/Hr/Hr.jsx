import React from 'react';
import styled from 'styled-components';

const Line = styled.hr`
  margin: 0;
  border: none;
  height: 1px;
  color: #c6c6c6;
  background-color: #c6c6c6;

  @media only screen and (min-width: 768px) {
   display: none;
  }
`

export default () => {
  return (
    <Line></Line>
  );
};
