import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  margin: 0 -.5rem;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Pic = styled.img`
  flex-shrink: 0;
  object-fit: contain;
  width: auto;
  height: 400px;
  @media only screen and (min-width: 768px) {
    height: 576px;
  }
`;
export default () => {
  return (
    <Container>
      <Pic src="/bitmap_1.jpg" alt="man in a coat" />
      <Pic src="/bitmap_2.jpg" alt="coat closer" />
      <Pic src="/bitmap_3.jpg" alt="coat's collar closer" />
      <Pic src="/bitmap_4.jpg" alt="man in a coat from behind" />
    </Container>
  );
};
