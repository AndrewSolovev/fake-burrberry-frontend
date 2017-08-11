import React, { Component } from "react";
import styled from "styled-components";

const SizeButton = styled.button`
  margin-right: 0.5rem;
  width: 43px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #171717;
  background-color: inherit;
}
`;

class Button extends Component {
  render() {
    return (
      <SizeButton type="button">
        {this.props.buttonName}
      </SizeButton>
    );
  }
}
export default Button;
