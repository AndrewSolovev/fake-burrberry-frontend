import React from "react";
import logoImg from "./logo.svg";
import styled from "styled-components";

const Logo = styled.img`
  display: block;
  height: 10px;
  width: auto;
  margin: 0px;

  @media only screen and (min-width: 992px) {
    height: 16px;
  }
`;

export default () => {
  return <Logo src={logoImg} alt="logo burrberry" />;
};