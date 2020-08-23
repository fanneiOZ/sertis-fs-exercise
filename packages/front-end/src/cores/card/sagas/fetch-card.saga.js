import {call, put} from '@redux-saga/core/effects'
import {Get} from '../../../libs/http'
import {onCardFetched} from '../actions/fetch-cards.action'

export function* fetchCardsSaga() {
    const response = yield call(Get, 'http://localhost:3000/cards')

    yield put(onCardFetched(response.data))
}
