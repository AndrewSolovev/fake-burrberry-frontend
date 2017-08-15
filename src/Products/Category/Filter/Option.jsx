import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import arrowImg from './arrow.svg';

const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

const Select = styled.p`
  flex-shrink: 0;
  margin: 0;
  padding-top: 2rem;
  padding-left: 2rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  font-weight: 400;
`;
const Arrow = styled.img`
  width: 12px;
  height: 6px;
  padding-left: 0.5rem;
  flex-shrink: 0;
`;

function Option(props) {
  return (
    <Container>
      <Select value={props.value}>
        {props.value}
      </Select>
      <Arrow src={arrowImg} alt="arrow" />
    </Container>
  );
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Option;
