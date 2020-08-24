import {takeEvery, takeLatest} from '@redux-saga/core/effects'
import {fetchCardsSaga} from './fetch-card.saga'
import {ADD_CARD, FETCH_CARDS} from '../constants/actions'
import {addCardSaga} from './add-card.saga'

export default function* () {
    yield takeLatest(FETCH_CARDS, fetchCardsSaga)
    yield takeEvery(ADD_CARD, addCardSaga)
}
