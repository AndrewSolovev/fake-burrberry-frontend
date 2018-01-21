import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Colour = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: #171717;
  @media only screen and (min-width: 62rem) {
    margin-top: 0rem;
`;
const ChangeColour = styled.button`
  display: inline-block;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 19px;
  border-radius: 50px;
  border: 1px solid transparent;
  font-size: 0;
  ${props =>
    props.active === props.num &&
    css`
    border: 1px solid #232122;
  `} ${props => css`
    background-color: ${props.hex};
  `};
`;

export default class ColourСlass extends Component {
  state = {
    colours: [
      {
        hex: '#cfa880',
        name: 'Honey',
      },
      {
        hex: '#746F59',
        name: 'Khaki Green',
      },
    ],
    activeColour: 0,
  };

  setActive = (colourNum) => {
    this.setState({
      activeColour: colourNum,
    });
  };
  handleClick(num) {
    this.setActive(num);
  }

  render() {
    return (
      <div>
        <Colour>
          Colour: <b>{` ${this.state.colours[this.state.activeColour].name}`}</b>
        </Colour>
        {this.state.colours.map((colour, num) =>
          (<ChangeColour
            key={colour.hex}
            hex={colour.hex}
            name={colour.name}
            num={num}
            onClick={() => this.handleClick(num)}
            active={this.state.activeColour}
          >
            change colour to {colour.name}
          </ChangeColour>),
        )}
      </div>
    );
  }
}
