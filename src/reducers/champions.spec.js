import { fromJS } from 'immutable'
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
      "Jax": {"id":24,"key":"Jax","name":"Jax","title":"Grandmaster at Arms"},
      "Ahri": {"id":32,"key":"Ahri","name":"Ahri","title":"Ninetails Fox"}
    }

    const nextState = champions(INITIAL_STATE, actions.fetchSuccess(data))

    expect(nextState).toEqual(fromJS({
      loading: false,
      fetching: false,
      champions: data
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
})
