import {authenticationState} from './state'
import {USER_AUTHORIZED} from '../constants/authentication.events'

export const authenticationReducer = (state = authenticationState, action) => {
    switch (action.type) {
        case USER_AUTHORIZED:
            return {
                ...state,
                currentUser: action.data,
            }
        default:
            return state
    }
}
