import React from 'react';
import styled from 'styled-components';

const Desc = styled.p`
  margin: 0;
  padding-top: 1rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  font-weight: 400;
`;

export default () =>
  (<Desc>
    Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
    overalls and oversized cabans feature alongside our signature trench coat in both heritage.
  </Desc>);