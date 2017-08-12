import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

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
  }
`;
function PriceInit(props) {
  return (
    <Price className="Price">
      <FormattedNumber
        value={props.price}
        style="currency"
        currency={props.currency}
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
  );
}

export default PriceInit;
