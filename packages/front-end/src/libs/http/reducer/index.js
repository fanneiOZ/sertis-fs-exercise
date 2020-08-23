import {DROP_HTTP_REQUEST} from '../constants/commands'
import {HTTP_REQUEST_REJECTED, HTTP_REQUEST_RESOLVED, HTTP_REQUEST_SENT} from '../constants/events'
import {dropHttpRequest, fulfillHttpRequest, sendHttpRequest} from '../services/service'

export const httpReducer = (state = {}, action) => {
    switch (action.type) {
        case HTTP_REQUEST_SENT:
            return {
                ...state,
                ...sendHttpRequest(action),
            }

        case DROP_HTTP_REQUEST:
            return dropHttpRequest(state, action)

        case HTTP_REQUEST_REJECTED:
        case HTTP_REQUEST_RESOLVED:
            return {
                ...state,
                ...fulfillHttpRequest(action.type, state, action.response),
            }

        default:
            return state
    }
}
