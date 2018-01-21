import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrowImg from '../../icons/arrow.svg';

const Shopping = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  border: none;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  background-color: #ffffff;
  color: #999999;
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    background-image: url(${arrowImg});
    background-size: cover;
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    margin-bottom: 2px;
    flex-shrink: 0;
  }
`;
const Select = styled.select`
  width: auto;
  border: none;
  padding: 0 0.5rem;
  background-color: transparent;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #999999;
  cursor: pointer;
  -webkit-appearance: none;
  opacity: 0;
`;

export default class ShoppingIn extends Component {
  state = {
    locationPos: 0,
  };

  handleSelect = (event) => {
    this.setState({
      locationPos: event.target.selectedIndex,
    });
  };

  render() {
    return (
      <div>
        <Shopping>
          Shopping in: {this.props.locations[this.state.locationPos]}
        </Shopping>
        <Select onChange={this.handleSelect}>
          {this.props.locations.map(location =>
            (<option key={location}>
              Shopping in: {location}
            </option>),
          )}
        </Select>
      </div>
    );
  }
}

ShoppingIn.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};
