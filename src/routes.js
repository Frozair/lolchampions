import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ChampionsList from './containers/ChampionsList'

const Routes = (props) => (
  <Router {...props}>
    <div className="page">
      <div className="header"></div>

      <div className="content">
        <Route exact path="/" component={ChampionsList} />
        {/* <Route path="champion/:id" component={Champion}/> */}
        {/* <Route path="*" component={InvalidPage}/> */}
      </div>

      <div className="footer"></div>
    </div>
  </Router>
)

export default Routes
