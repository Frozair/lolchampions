import { fromJS } from 'immutable'

import { INITIAL_STATE } from '../constants/index'
import {
  FETCH_CHAMPIONS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  GET_CHAMPION,
  FILTER_CHAMPIONS
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

function filter(state, filterBy) {
  console.log(state.get('entries'))
  return state.get('entries').filter((item) => {
    return item.get('tags').filter((tag) => {
      console.log(tag===filterBy)
       return tag === filterBy
    })
  })
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
    case FILTER_CHAMPIONS:
      return filter(state, action.filterBy)
    default:
      return state
  }
}
