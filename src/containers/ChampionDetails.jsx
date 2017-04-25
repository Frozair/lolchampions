import React from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'
import Typist from 'react-typist'
import renderHTML from 'react-render-html'

import { getChampion } from '../actions/actions'
import { SPLASH_IMAGE_URL } from '../constants'

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`

const DetailsWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const typing = keyframes`
  from{ width: 0 }
  to{ width: 100% }
`

const LoreOverlay = styled.div`
  width: 30%;
  background-color: black;
  color: papayawhip;
  height: 100%;
  position: absolute;
  opacity: 0.7;
  display: inline-block;
  margin-left: 0px;
  padding: 5px 10px 0 5px;
  overflow-y: scroll;
  word-wrap: break-word;
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

  getLore() {
    return this.props.champion.get('lore')
  }

  buildChampion() {
    if (this.props.champion === undefined) {
      return ''
    }

console.log(this.getLore())
    return (
      <div>
        <h1>{this.props.champion.get('name')}</h1>
        <DetailsWrapper>
          <LoreOverlay>
            <Typist avgTypingDelay={40}>
              {renderHTML(this.getLore())}
            </Typist>
          </LoreOverlay>
          <img src={this.getRandomSkin()} alt="Champion Skin" />
        </DetailsWrapper>
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
