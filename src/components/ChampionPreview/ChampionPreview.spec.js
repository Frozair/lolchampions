import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable'

import ChampionPreview from './ChampionPreview'
import { SQUARE_IMAGE_URL } from '../../constants'

describe('ChampionPreview', () => {
  describe('rendering', () => {
    it('ChampionPreview renders champion image', () => {
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
  })

  describe('interaction', () => {
    describe('clicking the image', () => {
      it('navigates to the champion detail page', () => {
        expect(1).toEqual(0)
      })
    })
  })
})
