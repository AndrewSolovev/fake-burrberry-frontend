import React, { Component } from 'react';
import styled from 'styled-components';


const ProductCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
  @media only screen and (min-width: 768px) {
    margin: 0;
`

const Price = styled.h2`
  margin: 0;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  color: #111111;
  @media only screen and (min-width: 768px) {
    margin: 0;
`

const Colour = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #171717;
`
const ChangeColour = styled.button`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 0.77rem;
  padding: 19px;
  border-radius: 50px;
  border: 1px solid #232122;
  font-size: 0;
  background: ${props => props.pressed ? '#cfa880' : '#232122'};
`
const ProductID = styled.p`
  margin: 0;
  margin-top: 1.125rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 16px;
  color: #171717;
  @media only screen and (min-width: 768px) {
    margin-top: 2px;
`


class Info extends Component {
  render() {
    return (
      <ProductCardInfo>
        <div>
          <Price>110 000 руб</Price>
          <Colour>Colour: Honey</Colour>
          <ChangeColour type="button">change colour to black</ChangeColour>
          <ChangeColour pressed type="button">change colour to honey</ChangeColour>
        </div>
        <ProductID>Item 39428531</ProductID>
      </ProductCardInfo>
    );
  };
};
export default Info;
