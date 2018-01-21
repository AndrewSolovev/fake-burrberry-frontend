import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import TextButton from '../../../Common/Buttons/TextButton';
import SecondaryButton from '../../../Common/Buttons/SecondaryButton';

const SizeContainer = styled.div`
  display: flex;
  justify-content space-between;
  margin-bottom: 1rem;
  `;

const Size = styled.p`
  margin: 0;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: left;
  color: #171717;
}
`;
const SizeButton = SecondaryButton.extend`
  min-width: 43px;
  ${props =>
    props.size === props.active &&
    css`
   font-weight: 700;
 `};
`;

export default class SizeСlass extends Component {
  state = {
    sizes: ['S', 'M', 'L', 'XL'],
    activeSize: 'XL',
  };

  setActive(size) {
    this.setState({
      activeSize: size,
    });
  }
  handleClick(size) {
    this.setActive(size);
  }
  render() {
    return (
      <div>
        <SizeContainer>
          <Size>
            Size: <b>{` ${this.state.activeSize}`}</b>
          </Size>
          <TextButton>NEED SIZE HELP?</TextButton>
        </SizeContainer>
        {this.state.sizes.map(size =>
          (<SizeButton
            key={size}
            size={size}
            active={this.state.activeSize}
            setActive={this.setActive}
            onClick={() => this.handleClick(size)}
          >
            {size}
          </SizeButton>),
        )}
      </div>
    );
  }
}
