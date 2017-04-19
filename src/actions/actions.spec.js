import nock from 'nock'
import { ActionsObservable } from 'redux-observable'
import 'rxjs/add/operator/toPromise'

import * as actions from './actions'
import * as types from './types'


describe('Actions', () => {
  describe('FETCH_CHAMPIONS', () => {

    afterEach(() => {
      nock.cleanAll();
    });

    it('creates FETCH_SUCCESS when fetching all champions is done', () => {
      const payload = {
        "Jax": {"id":24,"key":"Jax","name":"Jax","title":"Grandmaster at Arms"},
        "Ahri": {"id":32,"key":"Ahri","name":"Ahri","title":"Ninetails Fox"}
      }

      nock(window.location.origin)
        .get('/champions')
        .reply(200, { payload: payload })

      const actions$ = ActionsObservable.of(actions.fetchChampions())

      return actions.fetchChampionsEpic(actions$).toPromise()
           .then((actionReceived) => {
             expect(actionReceived.type).toBe(types.FETCH_SUCCESS)
             expect(actionReceived.data).toEqual(payload)
           })
    })

    it('creates FETCH_FAILURE when cannot retrieve champions', () => {
      const actions$ = ActionsObservable.of(actions.fetchChampions())

      return actions.fetchChampionsEpic(actions$).toPromise()
           .then((actionReceived) => {
             expect(actionReceived.type).toBe(types.FETCH_FAILURE)
           })
    })
  })

  describe('GET_CHAMPION', () => {
    it('creates GET_CHAMPION action', () => {
      expect(actions.getChampion(123)).toEqual({
        type: types.GET_CHAMPION,
        key: 123
      })
    })
  })

  describe('FILTER_CHAMPIONS', () => {
    it('creates FILTER_CHAMPIONS action', () => {
      expect(actions.filterChampions('Mage')).toEqual({
        type: types.FILTER_CHAMPIONS,
        filterBy: 'Mage'
      })
    })
  })
})
