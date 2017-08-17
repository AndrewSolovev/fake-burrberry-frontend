import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import Title from '../Title';
import Showcase from './Showcase';
import Info from './Info';
import PrimaryButton from '../../../Common/Buttons/PrimaryButton';
import TextButton from '../../../Common/Buttons/TextButton';
import breakpoints from '../../../breakpoints';

const CardPic = styled.img`display: block;`;
const Container = styled.div`
  background-color: #ffffff;
  @media only screen and (min-width: 62rem) {
    background-color: #d4bdad;
  }
`;

const Buttons = styled.div`
  padding: 2rem 0rem 3rem 0rem;

  @media only screen and (min-width: 48rem) {
    padding: 2rem 0rem 3rem 0rem;
  }
  @media only screen and (min-width: 62rem) {
    padding: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 62rem) {
    flex-direction: row;
    padding-left: 0.5rem;
  }
`;

const DeliveryTitle = styled.h3`
  margin: 0;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
`;

const DeliveryP = styled.p`
  margin: 0;
  padding-top: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const BlackButton = PrimaryButton.extend`
  margin-bottom: 1rem;
  @media only screen and (min-width: 62rem) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

export default () =>
  (<Container>
    <section className="container">
      <div className="row">
        <MediaQuery minDeviceWidth={breakpoints.md}>
          <div>
            <CardPic src="/bitmap.jpg" />
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={breakpoints.md - 1}>
          <div className="col-xs-12">
            <Title>Long Cotton Gabardine Car Coat</Title>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={breakpoints.md - 1}>
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Showcase />
          </div>
        </MediaQuery>

        <div className="col-xs-12 col-md-5 col-lg-6">
          <Info />

          <Buttons>
            <ButtonsContainer>
              <MediaQuery maxDeviceWidth={breakpoints.md - 1}>
                <BlackButton>SELECT A SIZE</BlackButton>
              </MediaQuery>
              <MediaQuery minDeviceWidth={breakpoints.md}>
                <BlackButton>ADD TO BAG</BlackButton>
              </MediaQuery>
              <PrimaryButton secondary>FIND IN STORE</PrimaryButton>
            </ButtonsContainer>
            <MediaQuery maxDeviceWidth={breakpoints.md - 1}>
              <TextButton>NEED SIZE HELP?</TextButton>
            </MediaQuery>
          </Buttons>

          <MediaQuery minDeviceWidth={breakpoints.md}>
            <DeliveryTitle>Free Next Day Delivery</DeliveryTitle>
            <DeliveryP>Order before 7pm Monday to Thursday for delivery the next day</DeliveryP>
          </MediaQuery>
        </div>
      </div>
    </section>
  </Container>);