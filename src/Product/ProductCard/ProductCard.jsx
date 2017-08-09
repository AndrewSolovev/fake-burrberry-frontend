import React, { Component } from 'react';
import styled from 'styled-components';

import Showcase from "./Showcase/Showcase";
import Info from "./Info/Info";
import CardButton from "./CardButton/CardButton"

const ProductCardButtons = styled.div`
 padding: 2rem 0.5rem 3rem 0.5rem;

 @media only screen and (min-width: 768px) {
   padding: 2rem 0rem 3rem 0rem;
}`

const ProductCardButtonsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
`

const ButtonHelp =styled.button`
  padding: 0;
  padding-top: 0.5rem;
  background-color: #FFFFFF;
  border: none;
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
`


export default () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <Showcase></Showcase>
      </div>
      <div className="col-xs-12 col-md-5">
          <Info></Info>
          <ProductCardButtons>
            <ProductCardButtonsContainer>
              <CardButton buttonName="SELECT A SIZE"></CardButton>
              <CardButton buttonName="FIND IN STORE" colour="White"></CardButton>
            </ProductCardButtonsContainer>
            <ButtonHelp type="button">NEED SIZE HELP?</ButtonHelp>
          </ProductCardButtons>
        </div>
      </div>
  );
};
