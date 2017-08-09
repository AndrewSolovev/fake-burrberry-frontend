import React, { Component } from 'react';
import styled from 'styled-components';


const Pic = styled.img`
  display: block;
  width: 100%;
`;

class Img extends Component {
  render() {
    return (
        <Pic src={this.props.src} alt={this.props.alt} />
    );
  };
};
export default Img;