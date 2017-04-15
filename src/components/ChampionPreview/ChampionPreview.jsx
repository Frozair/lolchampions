import React from 'react'
import PropTypes from 'prop-types'

import { SQUARE_IMAGE_URL } from '../../constants'

export default class ChampionPreview extends React.Component {
  getChampImg() {
    return SQUARE_IMAGE_URL + '/' + this.props.champion.get('image').get('full')
  }

  render() {
    return (
      <div className="champion-preview">
        <img className="champion-img" src={this.getChampImg()} />
        <span className="champion-name">{this.props.champion.get('name')}</span>
      </div>
    )
  }
}

ChampionPreview.propTypes = {
  champion: PropTypes.object.isRequired
}
