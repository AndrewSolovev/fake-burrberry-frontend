import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Filter from './Filter';

const Category = styled.div`background-color: #f3f3f3;`;

export default () =>
  (<Category>
    <div className="container">
      <Title>Men&apos;s Сlothing</Title>
      <div className="col-xs-12 col-md-9 col-lg-7">
        <Description />
      </div>
      <Filter />
    </div>
  </Category>);
