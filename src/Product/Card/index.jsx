import React, { Component } from "react";
import styled from "styled-components";

import Title from "../Title.jsx";
import Showcase from "./Showcase.jsx";
import Info from "./Info/";
import Button from "./Button.jsx";
import TextButton from "./Info/TextButton.jsx";
import Hr from "../../Common/Hr/";
import MediaQuery from "react-responsive";

const CardPic = styled.img`display: block;`;
const Container = styled.div`
  background-color: #ffffff;
  @media only screen and (min-width: 992px) {
    background-color: #d4bdad;
  }
`;

const Buttons = styled.div`
  padding: 2rem 0.5rem 3rem 0.5rem;

  @media only screen and (min-width: 768px) {
    padding: 2rem 0rem 3rem 0rem;
  }
  @media only screen and (min-width: 992px) {
    padding: 0rem 0rem 0rem 0rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    padding-left: 0.5rem;
  }
`;

const DeliveryTitle = styled.h3`
  margin: 0;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
`;

const DeliveryP = styled.p`
  margin: 0;
  padding-top: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

export default () => {
  return (
    <Container>
      <section className="container">
        <div className="row">
          <MediaQuery minDeviceWidth={992}>
            <div>
              <CardPic src="/bitmap.jpg" />
            </div>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={991}>
            <div className="col-xs-12">
              <Title />
            </div>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={991}>
            <div className="col-xs-12 col-md-7 col-lg-6">
              <Showcase />
            </div>
          </MediaQuery>

          <div className="col-xs-12 col-md-5 col-lg-6">
            <Info />

            <Buttons>
              <ButtonsContainer>
                <MediaQuery maxDeviceWidth={991}>
                  <Button buttonName="SELECT A SIZE" />
                </MediaQuery>
                <MediaQuery minDeviceWidth={992}>
                  <Button buttonName="ADD TO BAG" />
                </MediaQuery>
                <Button secondary buttonName="FIND IN STORE" />
              </ButtonsContainer>
              <MediaQuery maxDeviceWidth={991}>
                <TextButton buttonName="NEED SIZE HELP?"> </TextButton>
              </MediaQuery>
            </Buttons>

            <MediaQuery minDeviceWidth={992}>
              <DeliveryTitle>Free Next Day Delivery</DeliveryTitle>
              <DeliveryP>
                Order before 7pm Monday to Thursday for delivery the next day
              </DeliveryP>
            </MediaQuery>
          </div>
        </div>
      </section>
    </Container>
  );
};
