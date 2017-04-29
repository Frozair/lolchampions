import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
import renderHTML from 'react-render-html'

const Lore = ({html}) => {
  return (
    <Typist avgTypingDelay={40}>
      {renderHTML(html)}
    </Typist>
  )
}

Lore.propTypes = {
  html: PropTypes.string.isRequired
}

export default Lore
