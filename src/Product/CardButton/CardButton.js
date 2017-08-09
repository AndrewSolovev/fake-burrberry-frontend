import React, { Component } from 'react';
import styled from 'styled-components';


class CardButton extends Component {



  render() {
    return <button className="product-card-button" type="button">{this.props.ButtonName}</button>;
  }
}

export default CardButton;
