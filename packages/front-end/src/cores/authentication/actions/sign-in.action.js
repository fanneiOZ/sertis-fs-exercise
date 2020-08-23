import {USER_SIGNED_IN} from '../constants/authentication.events'
import {SIGN_IN} from '../constants/authentication.commands'
import {getUtcTimestamp} from '../../../libs/common'

export function signIn(user) {
    return {
        type: SIGN_IN,
        payload: {
            timestamp: getUtcTimestamp(),
            data: {
                id: user.id,
                password: user.password,
            },
        },
    }
}

export function onUserSignedIn(data) {
    return {
        type: USER_SIGNED_IN,
        data,
    }
}
