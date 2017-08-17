/* eslint no-undef: 0 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Product from './Products/Show/';
import Products from './Products/List/';

addLocaleData([...en, ...ru]);

export default () =>
  (<Router>
    <IntlProvider locale={navigator.language}>
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
        <Footer />
      </div>
    </IntlProvider>
  </Router>);
