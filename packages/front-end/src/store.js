import {applyMiddleware, combineReducers, createStore} from 'redux'
import appReducer from './app/reducer/app.reducer'
import {localStorageMiddleware, loggerMiddleware} from './middlewares'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './sagas'
import {httpReducer} from './libs/http/reducer'
import {cardReducer} from './cores/card/reducer'
import {displayReducer} from './cores/display/reducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [localStorageMiddleware, loggerMiddleware, sagaMiddleware]

const reducers = combineReducers({
    app: appReducer,
    display: displayReducer,
    http: httpReducer,
    card: cardReducer,
})

export const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(RootSaga)
