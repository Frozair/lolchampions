import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { SQUARE_IMAGE_URL } from '../../constants'

const Preview = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`
const Name = styled.span`
  position: absolute;
  bottom: 0;
  left: 5%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

export default class ChampionPreview extends React.Component {
  getChampImg() {
    return SQUARE_IMAGE_URL + '/' + this.props.champion.get('image').get('full')
  }

  getChampName() {
    return this.props.champion.get('name')
  }

  getChampLink() {
    return '/champions/' + this.props.champion.get('key')
  }

  render() {
    return (
      <Preview className="animated bounce">
        <StyledLink to={this.getChampLink()} className="champion-link">
          <img className="champion-img" src={this.getChampImg()} alt={this.getChampName()}/>
          <Name>{this.getChampName()}</Name>
        </StyledLink>
      </Preview>
    )
  }
}

ChampionPreview.propTypes = {
  champion: PropTypes.object.isRequired
}
