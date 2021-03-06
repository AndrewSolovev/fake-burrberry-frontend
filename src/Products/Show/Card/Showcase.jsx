import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  margin: 0 -.5rem;
  @media only screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Pic = styled.img`
  flex-shrink: 0;
  object-fit: contain;
  width: auto;
  height: 400px;
  @media only screen and (min-width: 48rem) {
    height: 576px;
  }
`;
export default () =>
  (<Container>
    <Pic src={`${process.env.PUBLIC_URL}/bitmap_1.jpg`} alt="man in a coat" />
    <Pic src={`${process.env.PUBLIC_URL}/bitmap_2.jpg`} alt="coat closer" />
    <Pic src={`${process.env.PUBLIC_URL}/bitmap_3.jpg`} alt="coat's collar closer" />
    <Pic src={`${process.env.PUBLIC_URL}/bitmap_4.jpg`} alt="man in a coat from behind" />
  </Container>);
