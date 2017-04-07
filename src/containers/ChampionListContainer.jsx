import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchChampions } from '../actions/actions'

const Wrapper = styled.section`
  background: red;
  width: 150px;
  height: 150px;
`

const loadData = ({fetchChampions}) => {
  fetchChampions()
}

class ChampionList extends React.Component {
  componentWillMount() {
    loadData(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <Wrapper>
        <h1>Hello World</h1>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    champions: null
  }
}

const ChampionListContainer = connect(mapStateToProps, {
  fetchChampions
})(ChampionList)

export default ChampionListContainer
