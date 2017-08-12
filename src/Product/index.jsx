import React, { Component } from "react";
import styled from "styled-components";

import { Helmet } from "react-helmet";
import Title from "./Title.jsx";
import Card from "./Card/";
import Hr from "../Common/Hr/";
import SectionHeading from "./SectionHeading/";
import Textarea from "./TextArea.jsx";
import WeRecommend from "./WeRecommend/";
import Shipping from "./Shipping.jsx";
import MoreForYou from "./MoreForYou.jsx";
import MediaQuery from "react-responsive";

const DescContainer = styled.div`display: flex;`;

const Img = styled.img`
  display: block;
  width: 100%;
  padding-top: 4rem;
  padding-left: 1rem;
`;
const Gallery = styled.div`
  display: flex;
  justify-content: space-around;
`;
const LeftImg = styled.img`
  display: block;
  width: 315px;
  height: 420px;
  padding-top: 6rem;
`;
const CenterImg = styled.img`
  display: block;
  width: 315px;
  height: 420px;
  padding-top: 10rem;
  padding-bottom: 4rem;
`;
const RightImg = styled.img`
  display: block;
  width: 315px;
  height: 420px;
  padding-top: 4rem;
`;

export default () => {
  return (
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>

      <Card />

      <Hr />

      <section className="container">
        <DescContainer>
          <div>
            <SectionHeading dropped sectionName="DESCRIPTION" />
            <Textarea />
          </div>
          <MediaQuery minDeviceWidth={992}>
            <Img src="./desc_img.jpg" />
          </MediaQuery>
        </DescContainer>
      </section>

      <Hr />

      <MediaQuery minDeviceWidth={992}>
        <section className="container">
          <Gallery>
            <LeftImg src="./bitmap_3.jpg" />
            <CenterImg src="./bitmap_4.jpg" />
            <RightImg src="./bitmap_2.jpg" />
          </Gallery>
        </section>
      </MediaQuery>

      <section className="container">
        <MediaQuery maxDeviceWidth={767}>
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
};