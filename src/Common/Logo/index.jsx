import React from 'react';
import styled from 'styled-components';
import logoImg from './logo.svg';

const Logo = styled.img`
  display: block;
  height: 12px;
  width: auto;
  margin: 0px;

  @media only screen and (min-width: 62rem) {
    height: 16px;
  }
`;

export default () => <Logo src={logoImg} alt="logo burrberry" />;
