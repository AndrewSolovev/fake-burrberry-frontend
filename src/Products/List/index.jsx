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
            category="men"
            subcategory="heritage-trench-coats"
            to="the-westminster–long-heritage-trench-coat"
            promoLabel="Relaxed Fit"
            productName="The Westminster – Long Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            coloursAmount={3}
            price={120000}
            currency="RUB"
            alt="Trench Coat"
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            category="men"
            subcategory="heritage-trench-coats"
            to="the-kensington-mid-length-heritage-trench-coat"
            promoLabel="Classic fit"
            productName="The Kensington – Mid-Length Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            coloursAmount={4}
            price={110000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            category="men"
            subcategory="heritage-trench-coats"
            to="the-sandringham-mid-length-heritage-trench-coat"
            promoLabel="Tailered fit"
            productName="The Sandringham – Mid-length Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            coloursAmount={3}
            price={120000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-sm-3">
          <Card
            category="men"
            subcategory="heritage-trench-coats"
            to="the-chelsea–short-heritage-trench-coat"
            promoLabel="Slim fit"
            productName="The Chelsea – Short Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            coloursAmount={2}
            price={110000}
            currency="RUB"
          />
        </div>
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
