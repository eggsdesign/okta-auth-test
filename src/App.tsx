import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import Home from './components/Home';
import config from './config';
import Header from './components/Header';

const App = () => (
  <Router>
    <Security {...config}>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/implicit/callback" component={LoginCallback} />
    </Security>
  </Router>
);

export default App;
