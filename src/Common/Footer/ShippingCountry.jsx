import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  @media only screen and (min-width: 48rem) {
    margin: 1.25rem 1.5rem 0 0;
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (min-width: 62rem) {
    margin-top: 2.25rem;
  }
`;

const LocationButton = styled.button`
  display: block;
  padding: 0;
  border: none;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  color: #999999;
  background-color: #f3f3f3;
  cursor: pointer;
`;
const Grey = styled.span`color: #171717;`;
const Select = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  border: none;
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

export default class ShippingCountry extends Component {
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
      <Wrapper>
        <LocationButton>
          Shipping country: <Grey>{this.props.locations[this.state.locationPos]}</Grey>
        </LocationButton>
        <Select onChange={this.handleSelect}>
          {this.props.locations.map(location =>
            (<option key={location}>
              Shipping country: {location}
            </option>),
          )}
        </Select>
      </Wrapper>
    );
  }
}

ShippingCountry.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};
