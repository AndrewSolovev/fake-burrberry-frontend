import React, { Component } from 'react';
import styled from 'styled-components';
import Img from '../../../Common/Img/Img';


const Product = styled.a`
  display: block;
  padding: 0;
`
const ProductTitle = styled.h3`
  display: inline-block;
  margin: 0;
  padding-top: 0.5rem;
  font-size: 1rem;
  font-family: 'Lora', serif;
  line-height: 19px;
  font-weight: 400;
  text-align: left;
`

const ProductPrice = styled.h5`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color:#999999;
`

class ProductCard extends Component {
  render() {
    return (
      <div className="col-xs-6 col-md-3">
        <Product>
          <Img src={this.props.src} alt={this.props.alt} />
          <ProductTitle>Emroided Hooded</ProductTitle>
          <ProductPrice>27 000 руб</ProductPrice>
        </Product>
      </div>
    );
  };
};
export default ProductCard;
