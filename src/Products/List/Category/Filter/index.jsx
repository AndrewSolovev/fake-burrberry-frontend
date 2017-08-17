import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../../../../breakpoints';
import Option from './Option';

const Filter = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-bottom: 1.5rem;
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
    <Option value="Sort by price" />
  </Filter>);
