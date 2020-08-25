import {takeEvery, takeLatest} from '@redux-saga/core/effects'
import {fetchCardsSaga} from './fetch-card.saga'
import {ADD_CARD, DELETE_CARD, FETCH_CARDS} from '../constants/actions'
import {addCardSaga} from './add-card.saga'
import {deleteCardSaga} from './delete-card.saga'

export default function* () {
    yield takeLatest(FETCH_CARDS, fetchCardsSaga)
    yield takeEvery(ADD_CARD, addCardSaga)
    yield takeEvery(DELETE_CARD, deleteCardSaga)
}
