import React, { Component } from "react";
import styled from "styled-components";

const TextButton = styled.button`
  padding: 0;
  padding-top: 0.5rem;
  background-color: inherit;
  color: #171717;
  border: none;
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
  @media only screen and (min-width: 992px) {
    padding-top: 0;
  }
`;

function Button(props) {
  return (
    <TextButton buttonName={props.buttonName} type="button">
      {props.buttonName}
    </TextButton>
  );
}

export default Button;
