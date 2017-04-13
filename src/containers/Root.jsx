import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import Routes from '../routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
      <Routes history={history}/>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
