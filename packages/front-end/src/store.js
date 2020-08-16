import {applyMiddleware, createStore} from 'redux'
import appReducer from './reducers/app-reducer'
import {localStorageMiddleware} from "./middlewares/local-storage.middleware"

const middlewares = () => {
    return applyMiddleware(localStorageMiddleware)
}

export const store = createStore(appReducer, middlewares)