import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable'

import FilterCheckBox from './FilterCheckBox'

describe('FilterCheckBox', () => {
  let filterFunc = (event) => [event.target.value]
  const props = {
    value: 'Assasin',
    label: 'Assasin',
    filter: filterFunc
  }

  describe('rendering', () => {
    it('renders checkbox with value and label', () => {
      const filterCheckBox = shallow(<FilterCheckBox {...props}/>)

      expect(filterCheckBox.find('input').prop('value')).toEqual(props.value)
      expect(filterCheckBox.find('span').prop('children')).toEqual(props.label)
    })
  })

  // describe('events', () => {
  //   it('invokes callback when checkbox is clicked', () => {
  //     let filterFunc = (e) => console.log(e)
  //     const props = {
  //       value: 'Assasin',
  //       label: 'Assasin',
  //       filter: () => console.log("hola")
  //     }
  //     let value = ''
  //     const filterCheckBox = shallow(<FilterCheckBox {...props}/>)
  //
  //     expect(value).toEqual('')
  //     filterCheckBox.find('input').simulate('click')
  //     expect(value).toEqual(filterCheckBox.find('input').prop('value'))
  //   });
  // })
})
