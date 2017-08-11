import React, { Component } from "react";
import styled from "styled-components";
import Image from "../../../Common/Image/";

const Product = styled.a`
  display: block;
  padding: 0;
`;
const ProductTitle = styled.h3`
  display: inline-block;
  margin: 0;
  padding-top: 0.5rem;
  font-size: 1rem;
  font-family: 'Lora', serif;
  line-height: 19px;
  font-weight: 400;
  text-align: left;
  @media only screen and (min-width: 1124px) {
    padding-top: 1rem;
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.67;
    text-align: left;
    color: #171717;
  }
`;

const ProductPrice = styled.h5`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #999999;
  @media only screen and (min-width: 1124px) {
    font-family: Raleway;
    font-size: 0.75rem;
    line-height: 1.33;
    text-align: left;
    color: #171717;
  }
`;

class ProductCard extends Component {
  render() {
    return (
      <div className="col-xs-6 col-md-3">
        <Product>
          <Image src={this.props.src} alt={this.props.alt} />
          <ProductTitle productName={this.props.productName}>
            {this.props.productName}
          </ProductTitle>
          <ProductPrice productPrice={this.props.productPrice}>
            {this.props.productPrice}
          </ProductPrice>
        </Product>
      </div>
    );
  }
}
export default ProductCard;
