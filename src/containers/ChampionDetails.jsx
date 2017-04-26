import React from 'react'
import styled from 'styled-components'
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
  font-family: fantasy;
`

const DetailsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border: papayawhip 1px;
  border-width: 1px;
  border-style: solid;
`

const Overlay = styled.div`
  width: 30%;
  background-color: black;
  color: papayawhip;
  height: 99%;
  position: absolute;
  opacity: 0.7;
  display: inline-block;
  margin-left: 0px;
  padding: 5px 10px 0 5px;
  overflow-y: scroll;
  word-wrap: break-word;
  text-align: center;
`

const ChampionName = styled.div`
  font-weight: bold;
  font-size: 2em;
  margin: 0 0 5px 0;
`

const ChampionImg = styled.img`
  display: block;
`

const loadData = ({getChampion, match}) => {
  getChampion(match.params.id)
}

class ChampionDetails extends React.Component {
  componentWillMount() {
    this.props.champion = undefined
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
    console.log(this.props.champion)
    if (this.props.champion === undefined) {
      return ''
    }

    return (
      <div>
        <DetailsWrapper>
          <Overlay>
            <ChampionName>{this.props.champion.get('name')}</ChampionName>
            <Typist avgTypingDelay={40}>
              {renderHTML(this.getLore())}
            </Typist>
          </Overlay>
          <ChampionImg src={this.getRandomSkin()} alt="Champion Skin" />
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
