import {takeLatest} from '@redux-saga/core/effects'
import {fetchCardsSaga} from './fetch-card.saga'
import {FETCH_CARDS} from '../constants/actions'

export default function* () {
    yield takeLatest(FETCH_CARDS, fetchCardsSaga)
}
