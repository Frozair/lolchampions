import { fromJS, List } from 'immutable'
import nock from 'nock'

import { INITIAL_STATE } from '../constants/index'
import champions from './champions'
import * as actions from '../actions/actions'

jest.unmock('immutable')

describe('Champions Reducer', () => {
  it('should return the initial state', () => {
    const newState = champions()

    expect(newState).toEqual(INITIAL_STATE)
  })

  it('should handle FETCH_CHAMPIONS', () => {
    const nextState = champions(INITIAL_STATE, actions.fetchChampions())

    expect(nextState).toEqual(fromJS({
      loading: true,
      fetching: true
    }))
  })

  it('should handle FETCH_SUCCESS', () => {
    const data = {
      "24": {"key":24,"name":"Jax","title":"Grandmaster at Arms"},
      "32": {"key":32,"name":"Ahri","title":"Ninetails Fox"}
    }

    const nextState = champions(INITIAL_STATE, actions.fetchSuccess(data))

    expect(nextState).toEqual(fromJS({
      loading: false,
      fetching: false,
      entries: data
    }))
  })

  it('should handle FETCH_ERROR', () => {
    const errorMessage = "An error occurred"
    const nextState = champions(INITIAL_STATE, actions.fetchFailure(errorMessage))

    expect(nextState).toEqual(fromJS({
      error: true,
      errorMessage
    }))
  })

  it('should handle GET_CHAMPION', () => {
    const state = fromJS({
      entries: {
        "24": {"key":24,"name":"Jax","title":"Grandmaster at Arms"},
        "32": {"key":32,"name":"Ahri","title":"Ninetails Fox"}
      }
    })

    const nextState = champions(state, actions.getChampion("24"))

    expect(nextState).toEqual(fromJS({
      entries: {
        "24": {"key":24,"name":"Jax","title":"Grandmaster at Arms"},
        "32": {"key":32,"name":"Ahri","title":"Ninetails Fox"}
      },
      viewing_champion: {"key":24,"name":"Jax","title":"Grandmaster at Arms"}
    }))
  })

  it('should handle FILTER_CHAMPIONS', () => {
    const state = fromJS({
      entries: {
        "24": {"key":24,"name":"Jax","title":"Grandmaster at Arms", tags: [ 'Tank', 'Fighter' ]},
        "32": {"key":32,"name":"Ahri","title":"Ninetails Fox", tags: [ 'Mage' ]}
      }
    })

    const nextState = champions(state, actions.filterChampionsBy('Mage'))

    expect(nextState).toEqual(fromJS({
      entries: {
        "24": {"key":24,"name":"Jax","title":"Grandmaster at Arms", tags: [ 'Tank', 'Fighter' ]},
        "32": {"key":32,"name":"Ahri","title":"Ninetails Fox", tags: [ 'Mage' ]}
      },
      filtered_keys: ['Mage'],
      filtered_entries: {
        "32": {"key":32,"name":"Ahri","title":"Ninetails Fox", tags: [ 'Mage' ]}
      }
    }))
  })
})
