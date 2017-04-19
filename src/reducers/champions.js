import { fromJS } from 'immutable'

import { INITIAL_STATE } from '../constants/index'
import {
  FETCH_CHAMPIONS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  GET_CHAMPION
} from '../actions/types'

function setFetching(state) {
  return state.set('fetching', true).set('loading', true)
}

function setSuccess(state, entries) {
  return state
          .set('entries', fromJS(entries))
          .set('fetching', false)
          .set('loading', false)
}

function setError(state, error) {
  return state.clear().set('error', true).set('errorMessage', error)
}

function getChampion(state, key) {
  return state.set('viewing_champion', state.get('entries').get(key))
}

export default function champions(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case FETCH_CHAMPIONS:
      return setFetching(state)
    case FETCH_SUCCESS:
      return setSuccess(state, action.data)
    case FETCH_FAILURE:
      return setError(state, action.error)
    case GET_CHAMPION:
      return getChampion(state, action.key)
    default:
      return state
  }
}
