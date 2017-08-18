import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormattedPrice from '../../FormattedPrice';
import Heart from './Heart';

const Product = styled.div`padding: 0;`;

const Pic = styled.img`
  margin-bottom: 1rem;
  display: block;
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Promo = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Title = styled(Link)`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #171717;
  cursor: pointer;

  &:visited {
    color: #171717;
  }

  @media only screen and (min-width: 48em) {
    font-size: 0.875;
    line-height: 1.25rem;
  }
  @media only screen and (min-width: 62rem) {
    font-size: 1rem;
  }
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

const LinkTo = styled(Link)`
  cursor: pointer;
`;
const Underline = styled(Link)`
  color: #171717;
  text-decoration: underline;
`;

function ProductCard(props) {
  return (
    <Product>
      <LinkTo to={`/products/${props.category}/${props.subcategory}/${props.to}`}>
        <Pic src={props.src} alt={props.alt} />
      </LinkTo>
      <Info>
        <div>
          {props.promoLabel !== ' ' &&
            <Promo>
              {props.promoLabel}
            </Promo>}

          <Title to={`/products/${props.category}/${props.subcategory}/${props.to}`}>
            {props.productName}
          </Title>

          {props.coloursAmount !== 1 &&
            <Colours>
              Available in{' '}
              <Underline to={`/products/${props.category}/${props.subcategory}/${props.to}`}>
                {props.coloursAmount} colours
              </Underline>
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
  to: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  subcategory: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  promoLabel: PropTypes.string,
  coloursAmount: PropTypes.number,
};

ProductCard.defaultProps = {
  promoLabel: ' ',
  coloursAmount: 1,
};

export default ProductCard;
