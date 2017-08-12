import React, { Component } from "react";
import styled from "styled-components";

const TextButton = styled.button`
  padding: 0;
  padding-top: 0.5rem;
  background-color: inherit;
  color: #171717;
  border: none;
  font-family: 'Raleway', sans-serif;
  line-height: 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  @media only screen and (min-width: 62rem) {
    padding-top: 0;
  }
`;

export default TextButton;
