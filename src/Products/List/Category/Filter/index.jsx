import React, { Component } from 'react';
import styled from 'styled-components';
import Option from './Option';

const Filter = styled.div`
  display: flex;
  margin: 0;
  margin-top: 2rem;
  padding: 0;
  padding-bottom: 1.5rem;
  position: relative;
  overflow-x: @media only screen and (min-width: 48rem) {
    margin-top: 2.5rem;
  }
`;
class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { isAnythingOpened: false };
    this.isActive = this.isActive.bind(this);
  }

  isActive() {
    this.setState(prevState => ({
      isAnythingOpened: !prevState.isAnythingOpened,
    }));
  }

  render() {
    return (
      <Filter>
        <Option
          isActive={this.isActive}
          active={this.state.isAnythingOpened}
          value="Category"
          content="Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content  content content content content content content content "
        />
        <Option isActive={this.isActive} active={this.state.isAnythingOpened} value="Colour">
          <p>Content2</p>
        </Option>
        <Option isActive={this.isActive} active={this.state.isAnythingOpened} value="Size">
          <p>Content3</p>
        </Option>
        <Option
          isActive={this.isActive}
          active={this.state.isAnythingOpened}
          value="Sort by price"
          right
          content="
          high or low
          it’s medium length of content
        "
        />
      </Filter>
    );
  }
}
export default Filters;
