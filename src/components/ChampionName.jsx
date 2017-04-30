import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NameWrapper = styled.div`
  font-weight: bolder;
  font-size: 2em;
  font-weight: bolder;
  text-align: center;
  color: chocolate;
  background: #e9eaec;
  padding-top: 8px;
`

const ChampionName = ({name}) => {
  return (
    <NameWrapper>{name}</NameWrapper>
  )
}

ChampionName.propTypes = {
  name: PropTypes.string.isRequired
}

export default ChampionName
