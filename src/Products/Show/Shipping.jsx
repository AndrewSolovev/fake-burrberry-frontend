import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import breakpoints from '../../breakpoints';

const Img = styled.img`
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 0rem;
    width: 100%;
  }
`;
const Title = styled.h2`
  display: none;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 500;

  @media only screen and (min-width: 48rem) {
    display: block;
  }
  @media only screen and (min-width: 62rem) {
    padding-top: 4rem;
    padding-left: 5.125rem;
  }
`;
const OptionsTitle = styled.h3`
  display: none;
  margin: 0;
  font-size: 0.75rem;
  line-height: 0.875rem;

  @media only screen and (min-width: 48rem) {
    display: block;
  }
  @media only screen and (min-width: 62rem) {
    padding-left: 5.125rem;
  }
`;
const OptionsDesc = styled.p`
  display: none;
  margin: 0;
  padding-top: 0.25rem;
  padding-bottom: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;

  @media only screen and (min-width: 48rem) {
    display: block;
  }
  @media only screen and (min-width: 62rem) {
    padding-left: 5.125rem;
  }
`;

export default () =>
  (<div className="row">
    <MediaQuery minWidth={breakpoints.sm}>
      <div className="col-md-7">
        <Img
          src={`${process.env.PUBLIC_URL}/shipping-img.jpg`}
          alt="two burberry's boxes with tape"
        />
      </div>
    </MediaQuery>

    <div className="col-md-5">
      <Title>DELIVERY</Title>
      <OptionsTitle>Free Next Day Delivery</OptionsTitle>
      <OptionsDesc>Order before 7pm Monday to Thursday for delivery the next day</OptionsDesc>
      <OptionsTitle>Collect-in-Store</OptionsTitle>
      <OptionsDesc>
        Order online today and pick up your items in storeas early as tomorrow
      </OptionsDesc>
      <OptionsTitle>Free Returns</OptionsTitle>
      <OptionsDesc>Enjoy free returns on your order</OptionsDesc>
      <OptionsTitle>Free Gift Packaging</OptionsTitle>
      <OptionsDesc>
        Discover our gift packaging, a gold lined box tied with a coloured ribbon
      </OptionsDesc>
    </div>
  </div>);
