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
  font-size: 0.75rem;
  line-height: 1rem;
  padding-bottom: 0.5rem;
`;

const Title = styled(Link)`
  display: block;
  margin: 0;
  margin-bottom: 0.5rem;
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
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Price = styled.h2`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
`;

const LinkTo = styled(Link)`
  cursor: pointer;
`;
const Underline = styled(Link)`
  color: #171717;
  text-decoration: none;
  border-bottom: 1px solid #171717;
`;
const HeartIcon = styled(Heart)`
  margin-left: 0.5rem;
  cursor: pointer;
  flex-shrink: 0;
`;

function ProductCard(props) {
  return (
    <Product>
      <LinkTo to={`${props.to}`}>
        <Pic src={props.src} alt={props.alt} />
      </LinkTo>
      <Info>
        <div>
          {props.promoLabel !== ' ' &&
            <Promo>
              {props.promoLabel}
            </Promo>}

          <Title to={`/${props.to}`}>
            {props.productName}
          </Title>

          {props.coloursAmount !== 1 &&
            <Colours>
              Available in <Underline to={`${props.to}`}>{props.coloursAmount} colours</Underline>
            </Colours>}
          <Price>
            <FormattedPrice price={props.price} currency={props.currency} />
          </Price>
        </div>
        <HeartIcon />
      </Info>
    </Product>
  );
}

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  alt: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  promoLabel: PropTypes.string,
  coloursAmount: PropTypes.number,
};

ProductCard.defaultProps = {
  promoLabel: ' ',
  coloursAmount: 1,
  alt: ' ',
};

export default ProductCard;
