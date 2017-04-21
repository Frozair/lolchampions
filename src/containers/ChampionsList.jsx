import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchChampions, filterChampions } from '../actions/actions'
import ChampionPreview from '../components/ChampionPreview/ChampionPreview'

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const loadData = ({fetchChampions, champions}) => {
  if (champions === undefined) {
    fetchChampions()
  }
}

class ChampionsList extends React.Component {
  componentWillMount() {
    loadData(this.props)
  }

  buildChampions() {
    if (this.props.champions.size == 0) {
      return <h2>No champions for those filters</h2>
    }

    return this.props.champions.map((champion) => {
      return <ChampionPreview champion={champion} />
    })
  }

  render() {    
    return (
      <Wrapper>
        { this.props.champions != null ? this.buildChampions() : ''}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  let champs = (
    state.champions.get('filtered_keys') ?
    state.champions.get('filtered_entries') :
    state.champions.get('entries')
  )
  return {
    champions: champs
  }
}

export default connect(mapStateToProps, {
  fetchChampions,
  filterChampions
})(ChampionsList)
