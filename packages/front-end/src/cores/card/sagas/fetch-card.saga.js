import {call, put} from '@redux-saga/core/effects'
import {onCardFetched} from '../actions/fetch-cards.action'
import {Get} from '../../../libs/http/adaptors/axios.adaptor'

/**
 *
 * @returns {Generator<SimpleEffect<"CALL", CallEffectDescriptor<never>>|SimpleEffect<"PUT", PutEffectDescriptor<{data: *, type: string}>>, void, *>}
 */
export function* fetchCardsSaga() {
    try {
        const response = yield call(Get, 'http://localhost:3000/cards')

        yield put(onCardFetched(response.data))
    } catch (e) {}
}
