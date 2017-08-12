import React, { Component } from "react";
import styled from "styled-components";

import { Helmet } from "react-helmet";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

import Header from "./Common/Header";
import Product from "./Product/";
import Footer from "./Common/Footer";

addLocaleData([...en, ...ru]);

export default () => {
  return (
    <IntlProvider locale={navigator.language}>
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    </IntlProvider>
  );
};
