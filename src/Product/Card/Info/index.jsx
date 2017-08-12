import React, { Component } from "react";
import styled from "styled-components";

import Title from "../../Title.jsx";
import TextButton from "./TextButton.jsx";
import SizeButton from "./SizeButton.jsx";
import Hr from "../../../Common/Hr/";
import MediaQuery from "react-responsive";

const Info = styled.div`
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;
  font-family: 'Raleway', 'Helvetica Neue', sans-serif;
  @media only screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    margin-right: -0.5rem;
    padding-left: 0.5rem;
    padding-bottom: 1.5rem;
    border: none;
  }
`;
const PriceAndID = styled.div`
  display: flex;
  justify-content: space-between;
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
  @media only screen and (min-width: 992px) {
    padding-left: 1rem;
    font-weight: 500;

`;

const Colour = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #171717;
  @media only screen and (min-width: 992px) {
    margin-top: 0rem;
`;
const ChangeColour = styled.button`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 19px;
  border-radius: 50px;
  border: 1px solid #232122;
  font-size: 0;
  background: ${props => (props.pressed ? "#cfa880" : "#232122")};
`;
const ID = styled.p`
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

const SizeContainer = styled.div`
  display: flex;
  justify-content space-between;
  margin-bottom: 1rem;
  `;

const Size = styled.p`
  margin: 0;
  padding-right: 5.5rem;
  font-family: Raleway;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #171717;
}
`;

export default () => {
  return (
    <div className="row">
      <MediaQuery minDeviceWidth={992}>
        <Title productName="Long Cotton Gabardine Car Coat Coat Coat Coat Coat" />
        <Price>110 000 руб</Price>
      </MediaQuery>

      <div className="col-xs-12 col-md-12 col-xl-12">
        <Info>
          <MediaQuery maxDeviceWidth={991}>
            <PriceAndID>
              <Price>110 000 руб</Price>
              <ID>Item 39428531</ID>
            </PriceAndID>
          </MediaQuery>

          <div className="col-xl-6">
            <Colour>
              Colour: <b>Honey</b>
            </Colour>
            <ChangeColour type="button">change colour to black</ChangeColour>
            <ChangeColour pressed type="button">
              change colour to honey
            </ChangeColour>
          </div>

          <MediaQuery minDeviceWidth={992}>
            <div className="col-xl-6">
              <SizeContainer>
                <Size>
                  Size: <b>XL</b>
                </Size>
                <TextButton buttonName="NEED SIZE HELP?" />
              </SizeContainer>
              <SizeButton buttonName="S" />
              <SizeButton buttonName="M" />
              <SizeButton buttonName="L" />
              <SizeButton pressed buttonName="XL" />
            </div>
          </MediaQuery>
        </Info>
      </div>
    </div>
  );
};
