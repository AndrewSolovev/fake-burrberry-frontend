import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import triangle from './triangle.svg';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 2rem 0.5rem;
  @media only screen and (min-width: 48rem) {
    padding: 1.5rem 0 1rem 0;
    display: ${props => (props.mobileHidden ? 'none' : 'block')};
  @media only screen and (min-width: 62rem) {
     padding-top: 4rem;
  }
`;
const Title = styled.button`
  display: block;
  padding: 0rem;
  background-color: transparent;
  border: none;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;

  :after {
    content: '';
    background-image: url(${triangle});
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: 30%;
    right: 0rem;
    transform: ${props => (props.isOpened ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  @media only screen and (min-width: 48rem) {
    :after {
      display: none;
    }
  }
`;

function SectionHeading(props) {
  return (
    <Container>
      <Title isOpened={props.isOpened}>
        {props.sectionName}
      </Title>
    </Container>
  );
}

SectionHeading.propTypes = {
  isOpened: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
};

export default SectionHeading;
