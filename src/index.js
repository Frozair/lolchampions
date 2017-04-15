import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';

import Root from './containers/Root';
import configureStore from './store/configureStore'

const store = configureStore()
const history = browserHistory

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
