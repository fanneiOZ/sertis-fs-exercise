import {applyMiddleware, combineReducers, createStore} from 'redux'
import {loggerMiddleware} from './middlewares'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas'
import {appReducer} from './app/reducer'
import {displayReducer} from './libs/display/reducer'
import {cardReducer} from './cores/card/reducer'
import {authenticationReducer} from './cores/authentication/reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [loggerMiddleware, sagaMiddleware]

const reducers = combineReducers({
    app: appReducer,
    display: displayReducer,
    authentication: authenticationReducer,
    card: cardReducer,
})

export const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(RootSaga)
