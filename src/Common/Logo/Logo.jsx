import React from 'react';
import logoImg from './logo.svg'
import styled from 'styled-components';


const Logo = styled.img`
  display: block;
  height: 10px;
  width: 138px;
  margin: 0px;
`;


export default () => {
  return (
    <Logo src={logoImg} alt="logo burrberry"></Logo>
  );
};
