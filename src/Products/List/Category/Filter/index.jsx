import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../../../../breakpoints';
import Option from './Option';

const Filter = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  padding-bottom: 1.5rem;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow: auto;
  @media all and (min-width: 48rem) {
    margin: 0;
  }
`;

const Refine = styled.p`
  margin: 0;
  margin-top: 2rem;
  margin-right: 2rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;
  font-weight: 400;
  flex-shrink: 0;
`;
export default () =>
  (<Filter>
    <MediaQuery maxDeviceWidth={breakpoints.sm - 1}>
      <Refine>Refine by</Refine>
    </MediaQuery>
    <Option value="Category" />
    <Option value="Colour" />
    <Option value="Size" />
    <Option position="right" value="Sort by price" />
  </Filter>);
