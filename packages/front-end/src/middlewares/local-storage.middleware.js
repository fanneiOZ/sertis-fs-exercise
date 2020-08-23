// import {LOGGED_IN, LOGGED_OUT} from '../constants/action-types'
// import agent from '../agent'

export const localStorageMiddleware = store => next => action => {
    // if (action.type === LOGGED_IN) {
    //     if (!action.error) {
    //         window.localStorage.setItem('jwt', action.payload.user.token)
    //         agent.setToken(action.payload.user.token)
    //     }
    // } else if (action.type === LOGGED_OUT) {
    //     window.localStorage.setItem('jwt', '')
    //     agent.setToken(null)
    // }

    next(action)
}
