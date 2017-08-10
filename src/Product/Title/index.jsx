import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 1rem 0.5rem;
  font-family: 'Lora', serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  color: #111111;

  @media only screen and (min-width: 768px) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 28px;
  }
`;

class ProductTitle extends Component {
  render() {
    return (
      <Title>
        {this.props.productName}
      </Title>
    );
  }
}
export default ProductTitle;
