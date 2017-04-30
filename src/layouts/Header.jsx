import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.section`
  height: 80px;
  background: papayawhip;
  color: chocolate;
  box-shadow: inset 0 0 10px #000000;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`

const Header = () => (
  <HeaderContainer>
    <h1>LoL Champions</h1>
  </HeaderContainer>
)

export default Header
