import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import FilterCheckBox from '../components/FilterCheckBox/FilterCheckBox'
import { filterChampionsBy, resetFilterKey } from '../actions/actions'

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

class Footer extends React.Component {
  componentWillMount() {
    this.filter = this.filter.bind(this)
  }

  filter(event) {
    const key = event.target.value
    if (event.target.checked) {
      this.props.filterChampionsBy(key)
    } else {
      this.props.resetFilterKey(key)
    }
  }

  render() {
    return (
      <FooterContainer>
        <FilteringContainer>
          <FilterCheckBox value="Assassin" label="Assassin" filter={this.filter}/>
          <FilterCheckBox value="Fighter" label="Fighter" filter={this.filter}/>
          <FilterCheckBox value="Mage" label="Mage" filter={this.filter}/>
          <FilterCheckBox value="Marksman" label="Marksman" filter={this.filter}/>
          <FilterCheckBox value="Support" label="Support" filter={this.filter}/>
          <FilterCheckBox value="Tank" label="Tank" filter={this.filter}/>
        </FilteringContainer>
      </FooterContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filteredKeys: state.champions.get('filtered_keys')
  }
}

export default connect(mapStateToProps, {
  filterChampionsBy,
  resetFilterKey
})(Footer)
