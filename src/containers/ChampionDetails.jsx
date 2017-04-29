import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getChampion } from '../actions/actions'
import { SPLASH_IMAGE_URL } from '../constants'
import ChampionName from '../components/ChampionName'
import Lore from '../components/Lore'
import InfoBar from '../components/InfoBar'

const Wrapper = styled.section`
  color: white;
  font-family: fantasy;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    display: inline;
  }
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
  height: 100%;
  position: absolute;
  opacity: 0.7;
  display: inline-block;
  margin-left: 0px;
  word-wrap: break-word;
  text-align: center;
  z-index: 100;

  @media (max-width: 1024px) {
    width: 100%;
    z-index: 100;
    opacity: 0.6;
  }
`

const ChampionImg = styled.img`
  display: block;

  @media (max-width: 1024px) {
    position: relative;
    left: -50%;
  }

  @media (max-width: 1020px) {
    left: -175%;
  }
`

const LoreContainer = styled.div`
  height: 55%;
  overflow-y: scroll;
  border-bottom: 1px solid papayawhip;
  padding-top: 10px;
`

const InfoContainer = styled.div`
  padding: 0 10px 0 10px;
`

const loadData = ({getChampion, match}) => {
  getChampion(match.params.id)
}

class ChampionDetails extends React.Component {
  componentWillMount() {
    // Only load data if it's a new champion
    if (this.props.champion === undefined) {
      loadData(this.props)
    } else if (this.props.champion.get('key') !== this.props.match.params.id) {
      this.props.champion = undefined
      loadData(this.props)
    }
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

    let info = this.props.champion.get('info')
    
    return (
      <div>
        <DetailsWrapper>
          <ChampionName name={this.props.champion.get('name')} />
          <Overlay>
            <LoreContainer>
              <Lore html={this.getLore()} />
            </LoreContainer>
            <InfoContainer>
              <InfoBar color="red" name="Attack" value={info.get('attack')} />
              <InfoBar color="green" name="Defense" value={info.get('defense')} />
              <InfoBar color="purple" name="Magic" value={info.get('magic')} />
              <InfoBar color="blue" name="Difficulty" value={info.get('difficulty')} />
            </InfoContainer>
          </Overlay>
          <ChampionImg src={this.getRandomSkin()} alt="Champion Skin" className="animated zoomIn"/>
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
