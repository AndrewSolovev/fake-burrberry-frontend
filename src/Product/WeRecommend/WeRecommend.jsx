import React, { Component } from 'react';
import styled from 'styled-components';

import ProductCard from "./ProductCard/ProductCard";



class WeRecommend extends Component {
  render() {
    return (
      <section className="container">
        <h2 className="product-recommendations-title">WE RECOMMEND</h2>
        <div className="product-recommendations-goods">
          <div className="row">
            <ProductCard src="/rec_1.jpg" alt="man in hoodie"></ProductCard>
            <ProductCard src="/rec_2.jpg" alt="man in jeans"></ProductCard>
            <ProductCard src="/rec_3.jpg" alt="bag"></ProductCard>
            <ProductCard src="/rec_4.jpg" alt="shoes"></ProductCard>
          </div>
        </div>
      </section>
    );
  };
};
export default WeRecommend;
