import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchChampions } from '../actions/actions'
import ChampionPreview from '../components/ChampionPreview/ChampionPreview'

const Wrapper = styled.section`
  width: 150px;
  height: 150px;
`

const loadData = ({fetchChampions}) => {
  fetchChampions()
}

class ChampionsList extends React.Component {
  componentWillMount() {
    loadData(this.props)
  }

  buildChampions() {
    return this.props.champions.map((champion) => {
      return <ChampionPreview champion={champion} />
    })
  }

  render() {
    console.log(this.props)
    return (
      <Wrapper>
        { this.props.champions != null ? this.buildChampions() : ''}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    champions: state.champions.get('entries')
  }
}

export default connect(mapStateToProps, {
  fetchChampions
})(ChampionsList)
