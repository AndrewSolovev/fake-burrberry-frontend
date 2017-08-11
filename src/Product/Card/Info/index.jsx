import React, { Component } from "react";
import styled from "styled-components";

import Title from "../../../Product/Title/";
import TextButton from "./TextButton/";
import SizeButton from "./SizeButton/";
var MediaQuery = require("react-responsive");

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
  @media only screen and (min-width: 1124px) {
    padding-left: 0.5rem;
  }
`;

const Price = styled.h2`
  margin: 0;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  color: #111111;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
  @media only screen and (min-width: 768px) {
    font-weight: 500;
    padding-bottom: 2rem;
`;

const Colour = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #171717;
`;
const ChangeColour = styled.button`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 0.77rem;
  padding: 19px;
  border-radius: 50px;
  border: 1px solid #232122;
  font-size: 0;
  background: ${props => (props.pressed ? "#cfa880" : "#232122")};
`;
const ProductID = styled.p`
  margin: 0;
  margin-top: 1.125rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 16px;
  color: #171717;
  @media only screen and (min-width: 768px) {
    margin-top: 2px;
  }
`;
const SizeContainer = styled.div`display: flex;`;

class Info extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1124}>
          <Title productName="Long Cotton Gabardine Car Coat Coat Coat Coat Coat" />
        </MediaQuery>
        <CardInfo>
          <div>
            <Price>110 000 руб</Price>
            <Colour>Colour: Honey</Colour>
            <ChangeColour type="button">change colour to black</ChangeColour>
            <ChangeColour pressed type="button">
              change colour to honey
            </ChangeColour>
          </div>
          <MediaQuery maxDeviceWidth={1123}>
            <ProductID>Item 39428531</ProductID>
          </MediaQuery>
          <MediaQuery minDeviceWidth={1124}>
            <div>
              <SizeContainer>
                <p>Size: XL</p>
                <TextButton buttonName="NEED SIZE HELP?" />
              </SizeContainer>
              <SizeButton buttonName="S" />
              <SizeButton buttonName="M" />
              <SizeButton buttonName="L" />
              <SizeButton buttonName="XL" />
            </div>
          </MediaQuery>
        </CardInfo>
      </div>
    );
  }
}
export default Info;
