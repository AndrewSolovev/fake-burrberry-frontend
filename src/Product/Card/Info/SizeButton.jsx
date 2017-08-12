import React, { Component } from "react";
import styled from "styled-components";

const SizeButton = styled.button`
  margin-right: 0.5rem;
  padding: 7px 1rem;
  border-radius: 2px;
  border: solid 1px #171717;
  background-color: inherit;
  font-size: 0.75rem;
  line-height: 1rem;
  ${props =>
    props.pressed &&
    `
		font-weight: 700;
	`};
`;

function Button(props) {
  return (
    <SizeButton pressed={props.pressed} type="button">
      {props.buttonName}
    </SizeButton>
  );
}

export default Button;
