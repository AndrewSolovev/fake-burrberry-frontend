/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heart extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <svg
        className={this.props.className}
        onClick={this.handleClick}
        width="16px"
        height="15px"
        viewBox="0 0 16 15"
        version="1.1"
      >
        <title>Shape</title>
        <desc>Created with Sketch.</desc>
        <defs>
          <path
            d="M7.00147577,14 L1.1995764,7.7486402 C-0.43417144,5.94319333 -0.39228047,3.05447833 1.28335834,1.29416763 C2.85426972,-0.353302646 5.34678245,-0.44357499 7.00147577,1.11362294 C8.67711458,-0.44357499 11.1905728,-0.353302646 12.7614842,1.3393038 L12.7614842,1.3393038 C14.395232,3.0996145 14.4161775,5.96576141 12.8033751,7.7486402 L12.8033751,7.7486402 L7.00147577,14 Z"
            id="path-1"
          />
        </defs>
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill={this.state.isToggleOn ? '#171717' : '#ffffff'}
          fillRule="evenodd"
        >
          <g id="Icon-/-Like" transform="translate(1.000000, 1.000000)">
            <mask id="mask-2" fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Shape" stroke="#171717" fillRule="nonzero" xlinkHref="#path-1" />
          </g>
        </g>
      </svg>
    );
  }
}
export default Heart;
