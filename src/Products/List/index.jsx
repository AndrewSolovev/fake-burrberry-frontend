import React from 'react';
import styled from 'styled-components';

import Category from './Category/';
import Title from './Title';
import Card from '../Card';
import Hr from '../../Common/Hr/';
import Button from '../../Common/Buttons/PrimaryButton';

const SectionTitle = Title.extend`
  padding-top: 2rem;
  padding-bottom: 1rem;
  @media only screen and (min-width: 48rem) {
    padding-top: 4rem;
    padding-bottom: 2rem;
    font-size: 1.25rem;
  }
`;

const Line = Hr.extend`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const Showing = styled.div`text-align: center;`;

const ShowingOf = styled.p`
  margin: 0;
  padding-bottom: 1rem;
  line-height: 1.125rem;
  @media only screen and (min-width: 48rem) {
    padding-bottom: 2rem;
  }
`;
export default () =>
  (<div>
    <Category />
    <div className="container">
      <SectionTitle>Heritage Trench Coats</SectionTitle>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_3.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_2.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_1.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_4.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
      </div>
      <Line />

      <SectionTitle>Single Breasted Tren</SectionTitle>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_3.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_2.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_1.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            src="/rec_4.jpg"
            alt="bag"
            price={26800}
            currency="RUB"
            productName="Check Cashmere Scarf"
            promoLabel="Relaxed Fit"
            coloursAmount={3}
          />
        </div>
      </div>
      <Showing>
        <ShowingOf>Showing 8 of 17</ShowingOf>
        <Button secondary>View 9 more</Button>
      </Showing>
    </div>
  </div>);
