import React, { Component } from "react";
import styled from "styled-components";

import { Helmet } from "react-helmet";
import Pic from "./Common/Image/";
import Title from "./Product/Title/";
import Card from "./Product/Card/";
import Hr from "./Common/Hr/";
import SectionHeading from "./Product/SectionHeading/";
import Textarea from "./Product/Textarea/";
import WeRecommend from "./Product/WeRecommend/";
import Shipping from "./Product/Shipping/";
import MoreForYou from "./Product/MoreForYou/";

var MediaQuery = require("react-responsive");

class Product extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>

        <Card />

        <Hr />

        <section className="container">
          <SectionHeading sectionName="DESCRIPTION" />
          <Textarea />
        </section>

        <Hr />

        <section className="container">
          <MediaQuery maxDeviceWidth={768}>
            <SectionHeading sectionName="SHIPPING & RETURNS" />
          </MediaQuery>
          <Shipping />
        </section>

        <Hr />

        <WeRecommend />

        <MediaQuery maxDeviceWidth={768}>
          <MoreForYou />
        </MediaQuery>
      </div>
    );
  }
}

export default Product;
