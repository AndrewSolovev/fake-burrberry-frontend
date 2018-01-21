import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import Title from '../Title';
import FormattedPrice from '../../../FormattedPrice';
import SizeButtons from './Sizes';
import breakpoints from '../../../breakpoints';
import Colours from './Colours';

const Info = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
  @media only screen and (min-width: 62rem) {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    margin-right: -0.5rem;
    padding-left: 0.5rem;
    padding-bottom: 1.5rem;
    border: none;
  }
`;
const PriceAndID = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.div`
  margin: 0;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: #111111;
  @media only screen and (min-width: 48rem) {
    margin: 0;
  }
  @media only screen and (min-width: 62rem) {
    padding-left: 1rem;
    font-weight: 500;
  }
`;
const Colour = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;
  @media only screen and (min-width: 62rem) {
    margin-top: 0rem;
`;
const ChangeColour = styled.button`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 19px;
  border-radius: 50px;
  border: 1px solid #232122;
  font-size: 0;
  background: ${props => (props.pressed ? '#cfa880' : '#232122')};
`;

const ID = styled.p`
  margin: 0;
  margin-top: 1.125rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 16px;
  color: #171717;
  @media only screen and (min-width: 48rem) {
    margin-top: 2px;
  }
`;

export default () =>
  (<div className="row">
    <MediaQuery minWidth={breakpoints.md}>
      <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
      <Price>
        <FormattedPrice price={110000} currency="RUB" />
      </Price>
    </MediaQuery>
    <div className="col-xs-12 col-md-12 col-xl-12">
      <Info>
        <MediaQuery maxWidth={breakpoints.md - 1}>
          <PriceAndID>
            <Price>
              <FormattedPrice price={110000} currency="RUB" />
            </Price>
            <ID>Item 39428531</ID>
          </PriceAndID>
        </MediaQuery>

        <div className=" col-xl-6">
          <Colours />
        </div>

        <MediaQuery minWidth={breakpoints.md}>
          <div className="col-md-6 col-xl-6">
            <SizeButtons />
          </div>
        </MediaQuery>
      </Info>
    </div>
  </div>);
