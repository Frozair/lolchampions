import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BarContainer = styled.div`
  border: 1px solid ${props => props.color};
  width: 100%;
  height: 30px;
  border-radius: 7px;
`

const Bar = styled.div`
  background: ${props => props.color};
  width:  ${props => ((props.value / 10) * 100) + '%' } ;
  height: 30px;
  border-radius: 7px;
`

const Label = styled.h1`
  margin: 0;
  padding-top: 10px;
  color: ${props => props.color};
`

const InfoBar = ({color, name, value}) => {
  return (
    <div>
      <Label>{name}</Label>
      <BarContainer color={color}>
        <Bar value={value} color={color}/>
      </BarContainer>
    </div>
  )
}

InfoBar.propTypes = {
  name: PropTypes.string.isRequired
}

export default InfoBar
