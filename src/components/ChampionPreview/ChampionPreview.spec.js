import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable'

import ChampionPreview from './ChampionPreview'
import { SQUARE_IMAGE_URL } from '../../constants'

describe('ChampionPreview', () => {
  describe('rendering', () => {
    it('renders champion image', () => {
      const champion = fromJS({
        name: 'Ahri',
        image: {
          full: 'Ahri.png'
        }
      })

      const expectedUrl = SQUARE_IMAGE_URL + '/' + champion.get('image').get('full')
      const championPreview = shallow(<ChampionPreview champion={champion}/>)

      expect(championPreview.find('img').prop('src')).toEqual(expectedUrl)
    })

    it('renders a link to the detail page', () => {
      const champion = fromJS({
        key: 12,
        name: 'Ahri',
        image: {
          full: 'Ahri.png'
        }
      })

      const expectedUrl = '/champions/' + champion.get('key')
      const championPreview = shallow(<ChampionPreview champion={champion}/>)

      expect(championPreview.find('.champion-link').prop('to')).toEqual(expectedUrl)
    })
  })
})
