import React, { Component } from 'react';
import styled from 'styled-components';

import ProductCard from "./ProductCard/ProductCard";


const Title = styled.h2`
  display: inline-block;
  width: auto;
  margin: 0;
  margin-left: 0.5rem;
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #171717;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;
  @media only screen and (min-width: 768px) {
    padding-top: 1.5rem;
    margin-left: 0;
  }
`

const Container = styled.div`
  padding-top: 1.5rem;
  @media only screen and (min-width: 768px) {
    padding-top: 1rem;
  }
`


class WeRecommend extends Component {
  render() {
    return (
      <section className="container">
        <Title>WE RECOMMEND</Title>
        <Container>
          <div className="row">
            <ProductCard src="/rec_1.jpg" alt="man in hoodie"></ProductCard>
            <ProductCard src="/rec_2.jpg" alt="man in jeans"></ProductCard>
            <ProductCard src="/rec_3.jpg" alt="bag"></ProductCard>
            <ProductCard src="/rec_4.jpg" alt="shoes"></ProductCard>
          </div>
        </Container>
      </section>
    );
  };
};
export default WeRecommend;
