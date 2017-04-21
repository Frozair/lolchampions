import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { filterChampions } from '../../actions/actions'

const Wrapper = styled.section`
  margin:5px;
  color: chocolate;
`

class FilterCheckBox extends React.Component {
  componentWillMount() {
    this.filter = this.filter.bind(this)
  }

  filter() {
    let keys = this.props.filtered_keys
    if (keys === undefined) {
      keys = []
    }

    if (event.target.checked) {
      keys.push(event.target.value)
    } else {
      const index = keys.indexOf(event.target.value);

      if (index > -1) {
        keys.splice(index, 1);
      }
    }

    this.props.filterChampions(keys)
  }

  render() {
    return (
      <Wrapper>
        <input value={this.props.value} type="checkbox" onClick={this.filter} />
        <span>{this.props.label}</span>
      </Wrapper>
    )
  }
}

FilterCheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    filtered_keys: state.champions.get('filtered_keys')
  }
}

export default connect(mapStateToProps, {
  filterChampions
})(FilterCheckBox)
