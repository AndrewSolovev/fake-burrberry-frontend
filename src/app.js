import React, { Component } from "react";
import styled from "styled-components";

import { Helmet } from "react-helmet";
import Header from "./Common/Header";
import Product from "./Product/";
import Footer from "./Common/Footer";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  );
};
