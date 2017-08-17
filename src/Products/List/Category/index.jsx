import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Desc from './Desc';
import Filter from './Filter';

const Category = styled.div`background-color: #f3f3f3;`;

export default () =>
  (<Category>
    <div className="container">
      <Title />
      <div className="col-xs-12 col-sm-9">
        <Desc />
      </div>
      <Filter />
    </div>
  </Category>);
