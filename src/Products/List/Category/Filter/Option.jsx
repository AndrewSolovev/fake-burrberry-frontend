import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowImg from '../../../../icons/arrow.svg';

const Select = styled.button`
  flex-shrink: 0;
  margin: 0;
  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: ${props => (props.position ? 'auto' : '')};
  padding: 0;
  border: none;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  background-color: #f3f3f3;
  font-weight: 400;

  &:after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    background-image: url(${arrowImg});
    background-size: cover;
    flex-shrink: 0;
  }

  @media only screen and (min-width: 48rem) {
    margin-right: 3rem;
    margin-right: ${props => (props.position ? '0' : '')};
  }
  @media only screen and (min-width: 62rem) {
    margin-top: 2.5rem;
  }
`;

function Option(props) {
  return (
    <Select value={props.value} position={props.position}>
      {props.value}
    </Select>
  );
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Option;
