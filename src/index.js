import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Product from './Product';
import Header from "./Common/Header/";
import Footer from "./Common/Footer/"
import {Helmet} from "react-helmet";

import 'normalize.css';
import 'flexboxgrid2';
import './index.css';

ReactDOM.render(
  <div>
    <Helmet>
      <title>Burrberry</title>
    </Helmet>
    <Header/>
    <Product/>
    <Footer/>
  </div>,
  document.getElementById('root')
);
