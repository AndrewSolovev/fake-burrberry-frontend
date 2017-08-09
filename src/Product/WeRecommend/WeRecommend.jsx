import React, { Component } from 'react';
import styled from 'styled-components';



class WeRecommend extends Component {
  render() {
    return (
      <section>
        <h2 className="product-recommendations-title">WE RECOMMEND</h2>
        <div className="product-recommendations-goods">
          <ProductCard>
          </ProductCard>

        </div>
        <SectionTitle>{this.props.sectionName}</SectionTitle>
      </section>
    );
  };
};
export default SectionHeading;
