import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Champions from './Champions';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Champions} />
  </Router>
);

export default Routes;
