import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { filterChampions } from '../../actions/actions'

const Wrapper = styled.section`
  justify-content: center;
`

class FilterCheckBox extends React.Component {
  componentWillMount() {
    this.filter = this.filter.bind(this)
  }

  filter() {
    // TODO - handle check/uncheck
    let keys = this.props.filtered_keys

console.log('keys: ' + keys)
    if (keys === undefined) {
      keys = []
    }

    keys.push(this.props.value)
    this.props.filterChampions(keys)
  }

  render() {
    return (
      <Wrapper>
        <input value={this.props.value} type="checkbox" onClick={this.filter} />
        {this.props.label}
      </Wrapper>
    )
  }
}

FilterCheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  console.log('filtered keys updated: ' + state.champions.get('flitered_keys'))
  return {
    filtered_keys: state.champions.get('filtered_keys')
  }
}

export default connect(mapStateToProps, {
  filterChampions
})(FilterCheckBox)
