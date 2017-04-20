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

function filter(state, filterKeys) {
  let entries = state.get('entries')

  if (state.get('filtered_entries') !== undefined || filterKeys.length == 0) {
    entries = state.get('filtered_entries')
  }

  let filteredEntries = entries.filter((item) => {
    let pass = true
    for (let i = 0; i < filterKeys.length; i++) {
        pass = pass && item.get('tags').includes(filterKeys[i])
    }
    return pass
  })

  return state
          .set('filtered_entries', filteredEntries)
          .set('filtered_keys', filterKeys)
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
      return filter(state, action.filterKeys)
    default:
      return state
  }
}
