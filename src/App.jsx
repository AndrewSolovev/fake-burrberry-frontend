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
  (<IntlProvider locale={navigator.language}>
    <Router>
      <div>
        <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
        <Header />
        <Switch>
          <Route exact path="/men/" component={List} />
          <Route exact path="/men/:section/" component={List} />
          <Route exact path="/men/:section/:category" component={Show} />
          <Route path="/:section/:category/:id" component={Show} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
