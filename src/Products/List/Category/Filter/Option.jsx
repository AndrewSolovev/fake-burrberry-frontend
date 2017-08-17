import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowImg from './arrow.svg';

const Select = styled.p`
  flex-shrink: 0;
  margin: 0;
  margin-top: 2rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  font-weight: 400;

  &:after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    margin-right: 1rem;
    background-image: url(${arrowImg});
    background-size: cover;
    flex-shrink: 0;
  }

  @media only screen and (min-width: 48rem) {
    &:after {
      margin-right: 3rem;
    }

    &:last-child {
      text-align: right;
      flex-grow: 2;
      &:after {
        margin-right: 0;
      }
    }
  }
`;

function Option(props) {
  return (
    <Select value={props.value}>
      {props.value}
    </Select>
  );
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Option;
