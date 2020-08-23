import {applyMiddleware, combineReducers, createStore} from 'redux'
import {localStorageMiddleware, loggerMiddleware} from './middlewares'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas'
import {appReducer} from './app/reducer'
import {displayReducer} from './cores/display/reducer'
import {cardReducer} from './cores/card/reducer'
import {authenticationReducer} from './cores/authentication/reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [localStorageMiddleware, loggerMiddleware, sagaMiddleware]

const reducers = combineReducers({
    app: appReducer,
    display: displayReducer,
    authentication: authenticationReducer,
    card: cardReducer,
})

export const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(RootSaga)
