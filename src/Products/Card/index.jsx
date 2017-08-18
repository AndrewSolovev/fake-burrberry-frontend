import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormattedPrice from '../../FormattedPrice';
import Heart from './Heart';

const Product = styled.a`
  display: block;
  padding: 0;
`;

const Pic = styled.img`
  padding-bottom: 1rem;
  display: block;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Promo = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
`;

const Colours = styled.p`
  margin: 0;
  margin-bottom: 0.375rem;
  padding-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Price = styled.h2`
  margin: 0;
  margin-top: 0.375rem;
  margin-bottom: 3rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
`;

const Underline = styled.a`text-decoration: underline;`;

function ProductCard(props) {
  return (
    <Product>
      <Pic src={props.src} alt={props.alt} />
      <Info>
        <div>
          {props.promoLabel !== ' ' &&
            <Promo>
              {props.promoLabel}
            </Promo>}
          <Title>
            {props.productName}
          </Title>
          {props.coloursAmount !== ' ' &&
            <Colours>
              Available in <Underline>{props.coloursAmount} colours</Underline>
            </Colours>}
          <Price>
            <FormattedPrice price={props.price} currency={props.currency} />
          </Price>
        </div>
        <Heart />
      </Info>
    </Product>
  );
}

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  promoLabel: PropTypes.string,
  coloursAmount: PropTypes.number,
};

ProductCard.defaultProps = {
  promoLabel: ' ',
  coloursAmount: ' ',
};

export default ProductCard;
