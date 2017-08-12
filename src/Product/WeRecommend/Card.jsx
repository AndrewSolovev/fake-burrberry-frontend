import React, { Component } from "react";
import styled from "styled-components";
import FormattedNumber from "../FormattedNumber";

const Product = styled.a`
  display: block;
  padding: 0;
`;

const Pic = styled.img`
  display: block;
  width: 100%;
`;
const Title = styled.h3`
  display: inline-block;
  margin: 0;
  padding-top: 0.5rem;
  font-size: 1rem;
  font-family: 'Lora', serif;
  line-height: 19px;
  font-weight: 400;
  text-align: left;
  @media only screen and (min-width: 992px) {
    padding-top: 1rem;
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.67;
    text-align: left;
    color: #171717;
  }
`;

const Price = styled.h2`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #999999;
  @media only screen and (min-width: 992px) {
    font-family: Raleway;
    font-size: 0.75rem;
    line-height: 1.33;
    text-align: left;
    color: #171717;
  }
`;
function ProductCard(props) {
  return (
    <Product>
      <Pic src={props.src} alt={props.alt} />
      <Title productName={props.productName}>
        {props.productName}
      </Title>
      <Price>
        <FormattedNumber price={props.price} currency={props.currency} />
      </Price>
    </Product>
  );
}

export default ProductCard;
