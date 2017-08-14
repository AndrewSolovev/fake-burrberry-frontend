import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  text-align: center;
  background-color: #171717;
  border: solid 1px #171717;
  color: #ffffff;
  flex-basis: 100%;

  ${props =>
    props.secondary &&
    css`
    background-color: inherit;
    border: solid 1px #999999;
    color: #171717;
    @media only screen and (min-width: 62rem) {
      border: solid 1px #171717;
      margin-left: 1rem;
      margin-right: -0.5rem;
    }
  `};
`;
export default Button;
