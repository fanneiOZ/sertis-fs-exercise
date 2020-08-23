import {SEND_HTTP_REQUEST} from '../../../reducers/http/commands'
import {CARDS_FETCHED} from '../constants/events'
import {store} from '../../../store'

export function fetchCard() {
    const {method, uri} = cardApis.getAll
    const action = {
        type: SEND_HTTP_REQUEST,
        method,
        request: {
            url: `${backendServer}${uri}`,
        },
        nextEvents: {
            resolve: CARDS_FETCHED,
        },
    }

    store.dispatch(action)
}
