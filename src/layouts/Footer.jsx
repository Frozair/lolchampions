import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.section`
  height: 60px;
  width: 100%;
  margin: 0
  color: #333132;
  background: #e9eaec;
  position: fixed;
  bottom: 0;
  box-shadow: inset 0 0 10px #000000;
  padding: 10px;
`

const Footer = () => (
  <FooterContainer>
    <h1>This is a footer</h1>
  </FooterContainer>
)

export default Footer
