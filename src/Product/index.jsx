import React, { Component } from 'react';
import styled from 'styled-components';

import {Helmet} from "react-helmet";
import ProductTitle from "./ProductTitle/";
import ProductCard from "./ProductCard/";
import Hr from "../Common/Hr/";
import SectionHeading from "./SectionHeading/";
import Textarea from "./Textarea/";
import WeRecommend from "./WeRecommend/";
import Shipping from "./Shipping/";
import MoreForYou from "./MoreForYou/";



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

        <MoreForYou></MoreForYou>
      </div>
    );
  }
}

export default Product;
