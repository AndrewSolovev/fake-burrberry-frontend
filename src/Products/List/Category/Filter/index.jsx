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
    this.ChangingColor = this.ChangingColor.bind(this);
  }

  ChangingColor() {
    this.setState(prevState => ({
      isAnythingOpened: !prevState.isAnythingOpened,
    }));
  }

  render() {
    return (
      <Filter>
        <Option
          changingColor={this.ChangingColor}
          active={this.state.isAnythingOpened}
          title="Category"
        >
          {' '}<div>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
          </div>
        </Option>
        <Option
          changingColor={this.ChangingColor}
          active={this.state.isAnythingOpened}
          title="Colour"
        >
          {' '}{' '}
          <div>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
          </div>
        </Option>
        <Option
          changingColor={this.ChangingColor}
          active={this.state.isAnythingOpened}
          title="Size"
        >
          {' '}{' '}
          <div>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
            <p>content content content content content content content</p>
          </div>
        </Option>
        <Option
          changingColor={this.ChangingColor}
          active={this.state.isAnythingOpened}
          title="Sort by price"
          right
        >
          <div>
            <p>high or</p>
            <p>low</p>
            <p>it’s medium length of</p>
            <p>content</p>
          </div>
        </Option>
      </Filter>
    );
  }
}
export default Filters;
