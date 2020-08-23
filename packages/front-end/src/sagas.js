import {fork} from '@redux-saga/core/effects'
import CardSaga from './cores/card/sagas/root.saga'

export default function* root() {
    yield fork(CardSaga)
}
