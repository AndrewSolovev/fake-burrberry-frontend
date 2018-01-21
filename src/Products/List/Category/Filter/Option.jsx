import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import arrowImg from '../../../../icons/arrow.svg';
import Dropdown from './Dropdown';

const Container = styled.div`
  position: relative;
  margin-right: 1rem;
  margin-left: ${props => (props.right ? 'auto' : '0')};
  @media only screen and (min-width: 48rem) {
    margin-right: ${props => (props.right ? '0' : '3rem')};
  }
`;

const Select = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
  background-color: #f3f3f3;
  font-weight: 400;
  cursor: pointer;
  color: #171717;
  ${props =>
    props.isOpened &&
    css`
    color: #171717;

`};
  ${props =>
    !props.isOpened &&
    props.active &&
    css`
    color: #999999;
`};

  &:after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    background-image: url(${arrowImg});
    background-size: cover;
    flex-shrink: 0;
    transform: ${props => (props.isOpened ? 'rotate(180deg)' : '')};
  }
`;

class Option extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    right: PropTypes.bool,
    changingColor: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
  };
  static defaultProps = {
    right: false,
  };

  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  handleClick() {
    if (!this.state.isOpened) {
      this.setState({
        isOpened: true,
      });
      this.props.changingColor();
    }
  }
  closeDropdown() {
    this.setState({
      isOpened: false,
    });
    this.props.changingColor();
  }

  render() {
    return (
      <Container right={this.props.right}>
        <Select
          title={this.props.title}
          onClick={this.handleClick}
          isOpened={this.state.isOpened}
          active={this.props.active}
        >
          {this.props.title}
        </Select>
        {this.state.isOpened &&
          <Dropdown
            right={this.props.right}
            content={this.props.content}
            closeDropdown={this.closeDropdown}
          >
            {this.props.children}
          </Dropdown>}
      </Container>
    );
  }
}

export default Option;
