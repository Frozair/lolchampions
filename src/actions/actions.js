import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import * as types from './types'
import Api from '../utilities/Api'


export const fetchChampionsEpic = (action$) =>
  action$.ofType(types.FETCH_CHAMPIONS)
    .mergeMap(action =>
      Api.fetchChampions()
        .map((xhr) => fetchSuccess(xhr.response.payload))
        .catch((error) => Observable.of(fetchError(error)))
    )

export const fetchSuccess = (data = {}) => ({ type: types.FETCH_SUCCESS, data })
export const fetchChampions = () => ({ type: types.FETCH_CHAMPIONS });
export const fetchError = (error) => ({ type: types.FETCH_FAILURE, error })
