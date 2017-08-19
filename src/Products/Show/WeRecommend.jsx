import React from 'react';
import styled from 'styled-components';

import Card from '../Card';

const Title = styled.h2`
  display: inline-block;
  width: auto;
  margin: 0;
  padding-top: 3rem;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.125rem;
  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    margin-left: 0;
  }
  @media only screen and (min-width: 62rem) {
    display: block;
    padding-top: 4rem;
    padding-bottom: 1rem;
    border: none;
    text-align: center;
  }
`;

const Container = styled.div`padding-top: 1rem;`;
function WeRecommend() {
  return (
    <section className="container">
      <Title>WE RECOMMEND</Title>
      <Container>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card
              category="men"
              subcategory="heritage-trench-coats"
              to="the-westminster–long-heritage-trench-coat"
              productName="The Westminster – Long Heritage Trench Coat"
              src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
              price={120000}
              currency="RUB"
              alt="Trench Coat"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              category="men"
              subcategory="heritage-trench-coats"
              to="the-kensington-mid-length-heritage-trench-coat"
              productName="The Kensington – Mid-Length Heritage Trench Coat"
              src="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
              price={110000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              category="men"
              subcategory="heritage-trench-coats"
              to="the-sandringham-mid-length-heritage-trench-coat"
              productName="The Sandringham – Mid-length Heritage Trench Coat"
              src="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
              price={120000}
              currency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card
              category="men"
              subcategory="heritage-trench-coats"
              to="the-chelsea–short-heritage-trench-coat"
              productName="The Chelsea – Short Heritage Trench Coat"
              src="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
              price={110000}
              currency="RUB"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WeRecommend;
