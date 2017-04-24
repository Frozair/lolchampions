import { fromJS } from 'immutable'

import { INITIAL_STATE } from '../constants/index'
import {
  FETCH_CHAMPIONS,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  GET_CHAMPION,
  FILTER_CHAMPIONS,
  FILTER_CHAMPIONS_BY
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

function filter(state, filterKey) {
  let entries = state.get('entries')

  if (entries === undefined) {
    return state
      .delete('filtered_entries')
      .delete('filtered_keys')
  }

  if (state.get('filtered_entries') !== undefined) {
    entries = state.get('filtered_entries')
  }

  let filteredKeys = []
  if (state.get('filtered_keys') !== undefined) {
    filteredKeys = state.get('filtered_keys')
  }

  filteredKeys.push(filterKey)

  let filteredEntries = entries.filter((item) => {
    let pass = true
    for (let i = 0; i < filteredKeys.length; i++) {
        pass = pass && item.get('tags').includes(filteredKeys[i])
    }
    return pass
  })

  return state
          .set('filtered_keys', fromJS(filteredKeys))
          .set('filtered_entries', filteredEntries)
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
    case FILTER_CHAMPIONS_BY:
      return filter(state, action.filterKey)
    default:
      return state
  }
}
