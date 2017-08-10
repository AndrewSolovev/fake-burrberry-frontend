import React, { Component } from "react";
import styled from "styled-components";

import Pic from "../../Common/Image/";
import Title from "../Title/";
import Showcase from "./Showcase/";
import Info from "./Info/";
import Button from "./Button/";

var MediaQuery = require("react-responsive");

const Container = styled.div`
  background-color: #ffffff;
  @media only screen and (min-width: 1124px) {
    background-color: #d4bdad;
  }
`;

const Buttons = styled.div`
  padding: 2rem 0.5rem 3rem 0.5rem;

  @media only screen and (min-width: 768px) {
    padding: 2rem 0rem 3rem 0rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const ButtonHelp = styled.button`
  padding: 0;
  padding-top: 0.5rem;
  background-color: #ffffff;
  border: none;
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
`;

export default () => {
  return (
    <Container>
      <section className="container">
        <div className="row">
          <MediaQuery minDeviceWidth={1124}>
            <div className="col-xl-5">
              <Pic src="/bitmap.jpg" />
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1124}>
            <div className="col-xs-12">
              <Title productName="Long Cotton Gabardine Car Coat" />
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1124}>
            <div className="col-xs-12 col-md-7">
              <Showcase />
            </div>
          </MediaQuery>
          <div className="col-xs-12 col-md-5 col-xl-7">
            <Info />
            <Buttons>
              <ButtonsContainer>
                <Button buttonName="SELECT A SIZE" />
                <Button buttonName="FIND IN STORE" colour="White" />
              </ButtonsContainer>
              <ButtonHelp type="button">NEED SIZE HELP?</ButtonHelp>
            </Buttons>
          </div>
        </div>
      </section>
    </Container>
  );
};
