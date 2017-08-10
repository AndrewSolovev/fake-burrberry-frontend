import React, { Component } from "react";
import styled from "styled-components";
import Pic from "../../../Common/Image/";

const Container = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  margin: 0 -.5rem;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const ShowcasePic = Pic.extend`
  flex-shrink: 0;
  object-fit: contain;
  width: auto;
  height: 400px;
  @media only screen and (min-width: 768px) {
    height: 576px;
  }
`;

class Showcase extends Component {
  render() {
    return (
      <Container>
        <ShowcasePic src="/bitmap_1.jpg" alt="man in a coat" />
        <ShowcasePic src="/bitmap_2.jpg" alt="coat closer" />
        <ShowcasePic src="/bitmap_3.jpg" alt="coat's collar closer" />
        <ShowcasePic src="/bitmap_4.jpg" alt="man in a coat from behind" />
      </Container>
    );
  }
}
export default Showcase;
