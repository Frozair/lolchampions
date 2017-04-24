import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import * as types from './types'
import Api from '../utilities/Api'


export const fetchSuccess = (data = {}) => ({ type: types.FETCH_SUCCESS, data })
export const fetchChampions = () => ({ type: types.FETCH_CHAMPIONS })
export const fetchFailure = (error) => ({ type: types.FETCH_FAILURE, error })
export const getChampion = (key) => ({ type: types.GET_CHAMPION, key })
export const filterChampionsBy = (filterKey) => ({ type: types.FILTER_CHAMPIONS_BY, filterKey})
export const resetFilterKey = (filterKey) => ({ type: types.RESET_FILTER_KEY, filterKey})

export const fetchChampionsEpic = (action$) => {
  return action$.ofType(types.FETCH_CHAMPIONS)
    .mergeMap(action =>
      Api.fetchChampions()
        .map((xhr) => fetchSuccess(xhr.response.payload))
        .catch((error) => Observable.of(fetchFailure(error)))
    )
}
