import React from 'react';
import styled from 'styled-components';
import logoImg from './logo.svg';

const Logo = styled.img`
  height: 12px;
  width: auto;
  @media only screen and (min-width: 62rem) {
    height: 16px;
  }
`;

export default () => <Logo src={logoImg} alt="logo burrberry" />;
