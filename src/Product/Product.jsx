import React, { Component } from 'react';
import styled from 'styled-components';

import {Helmet} from "react-helmet";
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductCard from "./ProductCard/ProductCard";
import Hr from "../Common/Hr/Hr";
import SectionHeading from "./SectionHeading/SectionHeading";
import Textarea from "./Textarea/Textarea";
import WeRecommend from "./WeRecommend/WeRecommend";
import Shipping from "./Shipping/Shipping";



class Product extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>

        <section className="container">
          <ProductTitle productName="Long Cotton Gabardine Car Coat"></ProductTitle>
          <ProductCard></ProductCard>
        </section>

        <Hr></Hr>

        <section className="container">
          <SectionHeading sectionName="DESCRIPTION"></SectionHeading>
          <Textarea></Textarea>
        </section>

        <Hr></Hr>

        <section className="container">
          <SectionHeading mobileHidden sectionName="SHIPPING & RETURNS"></SectionHeading>
          <Shipping></Shipping>
        </section>

        <Hr></Hr>

        <WeRecommend></WeRecommend>

        <section className="container">
          <h2 className="product-moreforyou-title">MORE FOR YOU</h2>
          <a className="product-moreforyou-link">Men's Black Trench Coats</a>
          <a className="product-moreforyou-link">Men's Short Trench Coats</a>
          <a className="product-moreforyou-link">Men's Long Trench Coats</a>
        </section>
      </div>
    );
  }
}

export default Product;
