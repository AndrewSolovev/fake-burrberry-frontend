import React, { Component } from 'react';
import styled from 'styled-components';

import {Helmet} from "react-helmet";
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductCard from "./ProductCard/ProductCard";
import Hr from "../Common/Hr/Hr";
import SectionHeading from "./SectionHeading/SectionHeading";
import Textarea from "./Textarea/Textarea";
import WeRecommend from "./WeRecommend/WeRecommend";



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
        <div className="row">
          <div className="col-md-7">
            <img className="product-shipping-img"src="/shipping-img.jpg" alt="two burberry's boxes with tape"/>
          </div>
          <div className="col-md-5">
            <h2 className="product-shipping-title">DELIVERY</h2>
            <h3 className="product-shipping-options-title">Free Next Day Delivery</h3>
              <p className="product-shipping-options-desc">Order before 7pm Monday to Thursday for delivery thenext day</p>
            <h3 className="product-shipping-options-title">Collect-in-Store</h3>
              <p className="product-shipping-options-desc">Order online today and pick up your items in storeas early as tomorrow</p>
            <h3 className="product-shipping-options-title">Free Returns</h3>
              <p className="product-shipping-options-desc">Enjoy free returns on your order</p>
            <h3 className="product-shipping-options-title">Free Gift Packaging</h3>
              <p className="product-shipping-options-desc">Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
          </div>
        </div>
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
