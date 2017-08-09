import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  padding: 1rem 0.5rem;
  font-family: 'Lora', serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 24px;
  color: #111111;
`;


class ProductTitle extends Component {
  render() {
    return (
      <Title>{this.props.productName}</Title>
    );
  };
};
export default ProductTitle;
