/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormattedPrice from '../../FormattedPrice';

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

const Heart = styled.svg`padding-left: 0.5rem;`;
const Underline = styled.a`text-decoration: underline;`;

function ProductCard(props) {
  return (
    <Product>
      <Pic src={props.src} alt={props.alt} />
      <Info>
        <div>
          {props.promoLabel !== ' ' &&
            <Promo promoLabel={props.promoLabel}>
              {props.promoLabel}
            </Promo>}
          <Title productName={props.productName}>
            {props.productName}
          </Title>
          {props.coloursValue !== ' ' &&
            <Colours coloursValue={props.coloursValue}>
              Available in <Underline>{props.coloursValue} colours</Underline>
            </Colours>}
          <Price>
            <FormattedPrice price={props.price} currency={props.currency} />
          </Price>
        </div>
        <Heart width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
          <title>3CF726F5-2D61-4AA0-881C-02ACD3124AA4</title>
          <desc>Created with sketchtool.</desc>
          <defs />
          <g id="Symbols" stroke="none" strokeWidth="1" fill="#171717" fillRule="nonzero">
            <g
              id="Card/Mobile"
              transform="translate(-130.000000, -213.000000)"
              fillRule="nonzero"
              fill="#000000"
            >
              <g id="Stacked-Group">
                <g id="Group-4">
                  <g>
                    <g>
                      <g transform="translate(0.000000, 212.000000)">
                        <g id="icon/like" transform="translate(130.000000, 1.000000)">
                          <path
                            d="M7.00147577,14 L1.1995764,7.7486402 C-0.43417144,5.94319333 -0.39228047,3.05447833 1.28335834,1.29416763 C2.85426972,-0.353302646 5.34678245,-0.44357499 7.00147577,1.11362294 C8.67711458,-0.44357499 11.1905728,-0.353302646 12.7614842,1.3393038 L12.7614842,1.3393038 C14.395232,3.0996145 14.4161775,5.96576141 12.8033751,7.7486402 L12.8033751,7.7486402 L7.00147577,14 Z M1.72321353,7.34241465 L7.02242126,13.0521404 L12.3425745,7.31984657 C13.745922,5.80778481 13.745922,3.32529536 12.3425745,1.8132336 C12.3425745,1.8132336 12.3425745,1.8132336 12.3425745,1.8132336 L12.3425745,1.8132336 C10.939227,0.301171845 8.6561691,0.301171845 7.23187611,1.8132336 L7.00147577,2.06148255 L6.77107544,1.8132336 C5.36772793,0.27860376 3.08467006,0.27860376 1.66037707,1.76809743 C0.236084083,3.2575911 0.236084083,5.74008055 1.6184861,7.2747104 L1.66037707,7.29727848 L1.72321353,7.34241465 Z"
                            id="Shape"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </Heart>
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
  coloursValue: PropTypes.number,
};

ProductCard.defaultProps = {
  promoLabel: ' ',
  coloursValue: ' ',
};

export default ProductCard;
