import { List, fromJS } from 'immutable'

import { INITIAL_STATE } from '../constants/index'
import * as ActionTypes from '../actions/types'

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

function filterEntries(entries, filteredKeys) {
  return entries.filter((item) => {
    let pass = true
    for (let i = 0; i < filteredKeys.size; i++) {
        pass = pass && item.get('tags').includes(filteredKeys.get(i))
    }
    return pass
  })
}

function filter(state, filterKey) {
  let entries = state.get('entries')

  if (entries === undefined) {
    return state
  }

  if (state.get('filtered_entries') !== undefined) {
    entries = state.get('filtered_entries')
  }

  let filteredKeys
  if (state.get('filtered_keys') !== undefined) {
    filteredKeys = state.get('filtered_keys')
  } else {
    filteredKeys = new List()
  }

  filteredKeys = filteredKeys.push(filterKey)

  let filteredEntries = filterEntries(entries, filteredKeys)

  return state
          .set('filtered_keys', filteredKeys)
          .set('filtered_entries', filteredEntries)
}

function resetFilterKey(state, filterKey) {
  let entries = state.get('entries')

  if (entries === undefined || state.get('filtered_keys') === undefined) {
    return state
  }

  let filteredKeys = state.get('filtered_keys')
  let idx = filteredKeys.indexOf(filterKey)

  filteredKeys = filteredKeys.delete(idx)

  if (filteredKeys.size === 0) {
    return state
      .delete('filtered_keys')
      .delete('filtered_entries')
  }

  let filteredEntries = filterEntries(entries, filteredKeys)

  return state
          .set('filtered_keys', filteredKeys)
          .set('filtered_entries', filteredEntries)
}

export default function champions(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case ActionTypes.FETCH_CHAMPIONS:
      return setFetching(state)
    case ActionTypes.FETCH_SUCCESS:
      return setSuccess(state, action.data)
    case ActionTypes.FETCH_FAILURE:
      return setError(state, action.error)
    case ActionTypes.GET_CHAMPION:
      return getChampion(state, action.key)
    case ActionTypes.FILTER_CHAMPIONS_BY:
      return filter(state, action.filterKey)
    case ActionTypes.RESET_FILTER_KEY:
      return resetFilterKey(state, action.filterKey)
    default:
      return state
  }
}
