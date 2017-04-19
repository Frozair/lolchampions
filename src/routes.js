import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import ChampionsList from './containers/ChampionsList'
import ChampionDetails from './containers/ChampionDetails'

const Content = styled.section`
  padding: 100px 10% 150px 10%;
`

const Routes = (props) => (
  <Router {...props}>
    <div className="page">
      <Header />

      <Content className="content">
        <Route exact path="/" component={ChampionsList} />
        <Route exact path="/champions/:id" component={ChampionDetails}/>
        {/* <Route path="*" component={InvalidPage}/> */}
      </Content>

      <Footer />
    </div>
  </Router>
)

export default Routes
