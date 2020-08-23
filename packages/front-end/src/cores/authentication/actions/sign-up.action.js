import {SIGN_UP} from '../constants/authentication.commands'
import {getCurrentUser, getUtcTimestamp} from '../../../libs/common'
import {USER_SIGNED_UP} from '../constants/authentication.events'

export function signUp(user) {
    return {
        type: SIGN_UP,
        payload: {
            timestamp: getUtcTimestamp(),
            actor: getCurrentUser(),
            data: {
                id: user.id,
                name: user.name,
                password: user.password,
            },
        },
    }
}

export function onUserSignedUp(data) {
    return {
        type: USER_SIGNED_UP,
        data,
    }
}
