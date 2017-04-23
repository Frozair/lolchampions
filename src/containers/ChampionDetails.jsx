import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getChampion } from '../actions/actions'
import { SPLASH_IMAGE_URL } from '../constants'

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`

const loadData = ({getChampion, match}) => {  
  getChampion(match.params.id)
}

class ChampionDetails extends React.Component {
  componentWillMount() {
    loadData(this.props)
  }

  getRandomSkin() {
    const champion = this.props.champion
    const skins = champion.get('skins')
    const randomNumber = Math.floor(Math.random() * skins.size)
    const imageName = champion.get('image').get('full').replace('.png', '')

    return SPLASH_IMAGE_URL + '/' + imageName + '_' + skins.get(randomNumber).get('num') + '.jpg'
  }

  buildChampion() {
    if (this.props.champion === undefined) {
      return ''
    }

    return (
      <div>
        <h1>{this.props.champion.get('name')}</h1>
        <img src={this.getRandomSkin()} alt="Champion Skin" />
      </div>
    )
  }

  render() {
    return (
      <Wrapper>
        { this.buildChampion() }

      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    champion: state.champions.get('viewing_champion')
  }
}

export default connect(mapStateToProps, {
  getChampion
})(ChampionDetails)
