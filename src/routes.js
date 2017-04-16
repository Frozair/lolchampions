import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import ChampionsList from './containers/ChampionsList'

const Content = styled.section`
  padding: 100px 10% 150px 15%;
`

const Routes = (props) => (
  <Router {...props}>
    <div className="page">
      <div className="header"></div>

      <Content className="content">
        <Route exact path="/" component={ChampionsList} />
        {/* <Route path="champion/:id" component={Champion}/> */}
        {/* <Route path="*" component={InvalidPage}/> */}
      </Content>

      <div className="footer"></div>
    </div>
  </Router>
)

export default Routes
