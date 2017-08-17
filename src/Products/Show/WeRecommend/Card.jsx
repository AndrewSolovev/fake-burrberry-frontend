import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormattedPrice from '../../../FormattedPrice';

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
  line-height: 1.125rem;
  font-weight: 400;
  text-align: left;
  @media only screen and (min-width: 62rem) {
    padding-top: 1rem;
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem;
    text-align: left;
    color: #171717;
  }
`;

const Price = styled.h2`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.875rem;
  color: #999999;
  @media only screen and (min-width: 62rem) {
    font-family: Raleway;
    font-size: 0.75rem;
    line-height: 1rem;
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
        <FormattedPrice price={props.price} currency={props.currency} />
      </Price>
    </Product>
  );
}

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ProductCard;
