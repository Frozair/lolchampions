import { fromJS } from 'immutable'

import { INITIAL_STATE } from '../constants/index'
import {
  FETCH_CHAMPIONS,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions/types'

export default function champions(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case FETCH_CHAMPIONS:
      return setFetching(state)
    case FETCH_SUCCESS:
      return setSuccess(state, action.data)
    case FETCH_FAILURE:
      return setError(state, action.error)
    default:
      return state
  }
}

function setFetching(state) {
  return state.set('fetching', true).set('loading', true)
}

function setSuccess(state, champions) {
  return state
          .set('champions', fromJS(champions))
          .set('fetching', false)
          .set('loading', false)
}

function setError(state, error) {
  return state.clear().set('error', true).set('errorMessage', error)
}
