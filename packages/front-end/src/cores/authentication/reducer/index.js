import {authenticationState} from './state'
import { USER_AUTHORIZED, USER_UNAUTHORIZED } from "../constants/authentication.events";

export const authenticationReducer = (state = authenticationState, action) => {
    switch (action.type) {
        case USER_AUTHORIZED:
            return {
                ...state,
                currentUser: action.data,
            }
        case USER_UNAUTHORIZED:
            return {
                ...state,
                currentUser: undefined
            }
        default:
            return state
    }
}
