import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  margin:5px;
  color: chocolate;
`

export default class FilterCheckBox extends React.Component {
  render() {
    return (
      <Wrapper>
        <input
          value={this.props.value}
          type="checkbox"
          onClick={(e) => this.props.filter(e)}
        />
        <span>{this.props.label}</span>
      </Wrapper>
    )
  }
}

FilterCheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired
}
