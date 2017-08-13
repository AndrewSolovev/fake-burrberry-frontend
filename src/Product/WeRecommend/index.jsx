import React, { Component } from "react";
import styled from "styled-components";

import Card from "./Card";

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

const Container = styled.div`
  padding-top: 1.5rem;
  @media only screen and (min-width: 48rem) {
    padding-top: 1rem;
  }
`;
function WeRecommend(props) {
  return (
    <section className="container">
      <Title>WE RECOMMEND</Title>
      <Container>
        <div className="row">
          <div className="col-xs-6 col-md-3 col-lg-3">
            <Card
              src="/rec_1.jpg"
              alt="man in hoodie"
              price="27000"
              currency="RUB"
              productName="Lightweight Crew Neck Cashmere Sweater with Check Trim"
            />
          </div>
          <div className="col-xs-6 col-md-3 col-lg-3">
            <Card
              src="/rec_2.jpg"
              alt="man in jeans"
              price="22000"
              currency="RUB"
              productName="Check Detail Striped Silk Cotton T-shirt"
            />
          </div>
          <div className="col-xs-6 col-md-3 col-lg-3">
            <Card
              src="/rec_3.jpg"
              alt="bag"
              price="26800"
              currency="RUB"
              productName="Check Cashmere Scarf"
            />
          </div>
          <div className="col-xs-6 col-md-3 col-lg-3">
            <Card
              src="/rec_4.jpg"
              alt="shoes"
              price="45000"
              currency="RUB"
              productName="Leather Brogue Boots"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WeRecommend;
