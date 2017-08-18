/* eslint no-undef: 0 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Show from './Products/Show/';
import List from './Products/List/';

addLocaleData([...en, ...ru]);

export default () =>
  (<Router>
    <IntlProvider locale={navigator.language}>
      <div>
        <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
        <Header />
        <Switch>
          <Route exact path="/products/:section/" component={List} />
          <Route exact path="/products/:section/:category" component={List} />
          <Route path="/products/:section/:category/:id" component={Show} />
        </Switch>
        <Footer />
      </div>
    </IntlProvider>
  </Router>);
