import {AUTHORIZE_USER} from '../constants/authentication.commands'
import {getUtcTimestamp} from '../../../libs/common'
import {USER_AUTHORIZED, USER_UNAUTHORIZED} from '../constants/authentication.events'

export function authorizeUser(token) {
    return {
        type: AUTHORIZE_USER,
        payload: {
            timestamp: getUtcTimestamp(),
            data: {token},
        },
    }
}

export function onUserAuthorized(data) {
    return {
        type: USER_AUTHORIZED,
        data,
    }
}

export function onUserUnauthorized() {
    return {
        type: USER_UNAUTHORIZED,
    }
}
