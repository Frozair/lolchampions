import { ajax } from 'rxjs/observable/dom/ajax'

const fetchChampions = () =>
  ajax({
    url: `${window.location.origin}/champions`,
    // crossDomain: true,
    responseType: 'json'
  })

const Api = {
  fetchChampions
}

export default Api
