import {REQUESTING} from "./constants";

/**
 * Create new request state
 *
 * @param action
 */
export function sendHttpRequest(action) {
    const {requestId, payload} = action

    return {
        [requestId]: {
            status: REQUESTING,
            payload,
        }
    }
}

/**
 * Drop request from state
 *
 * @param prevState
 * @param action
 */
export function dropHttpRequest(prevState, action) {
    const {requestId} = action

    if (prevState.hasOwnProperty(requestId)) {
        delete prevState[requestId]
    }

    return {
        ...prevState
    }
}

/**
 * Update request status on fulfilled
 *
 * @param status
 * @param prevState
 * @param action
 * @returns {{}}
 */
export function fulfillHttpRequest(status, prevState, action) {
    const {requestId, response} = action

    if (prevState.hasOwnProperty(requestId)) {
        return {
            [requestId]: {
                ...prevState.requestId,
                status,
                response
            }
        }
    }

    return {}
}