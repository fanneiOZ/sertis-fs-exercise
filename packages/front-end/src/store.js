import {applyMiddleware, combineReducers, createStore} from 'redux'
import appReducer from './reducers/app/app.reducer'
import {displayReducer} from "./reducers";
import {localStorageMiddleware, loggerMiddleware} from "./middlewares";

const middlewares = [
    localStorageMiddleware,
    loggerMiddleware
]

const reducers = combineReducers({
    app: appReducer,
    display: displayReducer,
})

export const store = createStore(reducers, applyMiddleware(...middlewares))

console.log(store.getState())