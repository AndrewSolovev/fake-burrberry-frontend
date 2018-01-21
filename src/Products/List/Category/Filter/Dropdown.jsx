import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 1.5rem);
  left: -1.5rem;
  padding: 1rem 1.5rem 1.5rem;
  background-color: #f3f3f3;

  p {
    margin: 0;
    white-space: nowrap;
  }
  ${props =>
    props.right &&
    css`
    left: auto;
    right: -1.5rem;

`};
`;

class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    right: PropTypes.bool,
    closeDropdown: PropTypes.func.isRequired,
  };
  static defaultProps = {
    right: false,
  };

  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside(e) {
    if (!e.path.includes(this.node)) {
      this.props.closeDropdown();
    }
  }

  render() {
    return (
      <Wrapper
        innerRef={(node) => {
          this.node = node;
        }}
        right={this.props.right}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Dropdown;
