import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  margin: 0;
  padding-top: 1rem;
  margin-left: -0.5rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  font-weight: 400;
`;
const More = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;
export default () =>
  (<Description>
    Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
    overalls and oversized cabans feature alongside our signature trench coat in both heritage.{' '}
    <More>More</More>
  </Description>);
