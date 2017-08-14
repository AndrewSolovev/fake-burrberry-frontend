import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

export default props =>
  (<FormattedNumber
    value={props.price}
    style="currency"
    currency={props.currency}
    currencyDisplay="symbol"
    minimumFractionDigits={0}
  />);
