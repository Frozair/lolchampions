import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import Routes from '../routes'

const Wrapper = styled.section`
  background: black;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  color: white;
`

const Root = ({ store, history }) => (
  <Wrapper>
    <Provider store={store}>
        <Routes history={history}/>
    </Provider>
  </Wrapper>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
