import {SEND_HTTP_REQUEST} from "../reducers/http/commands";
import {Get} from "../libs/http";
import {
    HTTP_REQUEST_REJECTED,
    HTTP_REQUEST_RESOLVED,
    HTTP_REQUEST_SENT
} from "../reducers/http/events";

export const httpMiddleware = store => next => action => {
    let payload
    if (action.type === SEND_HTTP_REQUEST) {
        switch (action.method) {
            case 'GET':
                payload = send(store, Get, action.request)
        }
    }

    next(action)

    const {nextEvents} = action.request
    if (nextEvents && nextEvents.hasOwnProperty('resolve')) {
        store.dispatch({type: nextEvents.resolve.name, payload})
    }
}

function send(store, method, request) {
    const {url, data, headers, nextEvents} = request

    method(url, data, headers)
        .then(response => response)
        .catch((error, response) => {
            console.group('REQUEST rejected')
            console.log(error)
            console.log(response)
            console.groupEnd()

            // store.dispatch({type: HTTP_REQUEST_REJECTED, response, error})
        })

    // store.dispatch({type: HTTP_REQUEST_SENT, request})
}