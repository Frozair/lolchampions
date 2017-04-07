import React from 'react';

import Main from '../layouts/Main'
import ChampionListContainer from '../containers/ChampionListContainer'

const Champions = (props) =>
(
  <Main>
    <ChampionListContainer {...props}/>
  </Main>
)

export default Champions;
