import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  font-size: 0.75rem;
  line-height: 14px;
  text-align: center;
  background-color: #171717;
  border: solid 1px #171717;
  color: #FFFFFF;

  ${props => props.сolour === "White" && `
    background-color: #FFFFFF;
    border: solid 1px #999999;
    color: #171717;
  `}
`;


class CardButton extends Component {
  render() {
    return (
      <Button сolour={this.props.colour} type="button">{this.props.buttonName}</Button>
    );
  };
};
export default CardButton;
