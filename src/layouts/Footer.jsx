import React from 'react'
import styled from 'styled-components'

import FilterCheckBox from '../components/FilterCheckBox/FilterCheckBox'

const FooterContainer = styled.section`
  height: 60px;
  width: 100%;
  margin: 0
  color: #333132;
  ${''/* background: #e9eaec; */}
  background: papayawhip;
  position: fixed;
  bottom: 0;
  box-shadow: inset 0 0 10px #000000;
  padding: 10px;
  display: flex;
  justify-content: center;
`

const FilteringContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <h1>This is a footer</h1>
        <FilteringContainer>
          <FilterCheckBox value="Assassin" label="Assassin"/>
          <FilterCheckBox value="Fighter" label="Fighter"/>
          <FilterCheckBox value="Mage" label="Mage"/>
          <FilterCheckBox value="Marksman" label="Marksman"/>
          <FilterCheckBox value="Support" label="Support"/>
          <FilterCheckBox value="Tank" label="Tank"/>
        </FilteringContainer>
      </FooterContainer>
    )
  }
}
