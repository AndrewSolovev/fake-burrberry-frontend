import React, { Component } from 'react';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';
import Title from './Title';
import Card from './Card/';
import Hr from '../Common/Hr/';
import SectionHeading from './SectionHeading/';
import Textarea from './TextArea';
import WeRecommend from './WeRecommend/';
import Shipping from './Shipping';
import MoreForYou from './MoreForYou';
import MediaQuery from 'react-responsive';
import breakpoints from '../breakpoints';

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

export default () => (
  <div>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
    </Helmet>

    <Card />

    <Hr />

    <section className="container">
      <DescContainer>
        <div>
          <SectionHeading isOpened sectionName="DESCRIPTION" />
          <Textarea />
        </div>
        <MediaQuery minDeviceWidth={breakpoints.md}>
          <Img src="./desc_img.jpg" />
        </MediaQuery>
      </DescContainer>
    </section>

    <Hr />

    <MediaQuery minDeviceWidth={breakpoints.md}>
      <section className="container">
        <Gallery>
          <LeftImg src="./bitmap_3.jpg" />
          <CenterImg src="./bitmap_4.jpg" />
          <RightImg src="./bitmap_2.jpg" />
        </Gallery>
      </section>
    </MediaQuery>

    <section className="container">
      <MediaQuery maxDeviceWidth={breakpoints.sm - 1}>
        <SectionHeading sectionName="SHIPPING & RETURNS" />
      </MediaQuery>
      <Shipping />
    </section>

    <Hr />

    <WeRecommend />

    <MediaQuery maxDeviceWidth={breakpoints.sm}>
      <MoreForYou />
    </MediaQuery>
  </div>
);
