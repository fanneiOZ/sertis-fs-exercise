import {applyMiddleware, combineReducers, createStore} from 'redux'
import appReducer from './reducers/app/app.reducer'
import {cardReducer, displayReducer, httpReducer} from './reducers'
import {localStorageMiddleware, loggerMiddleware} from './middlewares'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    localStorageMiddleware,
    loggerMiddleware,
    // httpMiddleware,
    sagaMiddleware,
]

const reducers = combineReducers({
    app: appReducer,
    display: displayReducer,
    http: httpReducer,
    card: cardReducer,
})

export const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(RootSaga)
