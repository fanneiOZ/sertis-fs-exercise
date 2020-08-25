import {call, put} from '@redux-saga/core/effects'
import {Delete} from '../../../libs/http/adaptors/axios.adaptor'
import {onCardDeleted} from '../actions/delete-cards.action'

export function* deleteCardSaga(action) {
    const {id} = action.payload.data
    try {
        const token = window.localStorage.getItem('jwt')
        const headers = {Authorization: `Bearer ${token}`}
        const response = yield call(Delete, `http://localhost:3000/card/${id}`, headers)

        if (response.data.deleted) {
            yield put(onCardDeleted(id))
        }
    } catch (e) {}
}
