import {Post} from '../../../libs/http/adaptors/axios.adaptor'
import {onCardAdded} from '../actions/add-card.action'
import {call, put} from '@redux-saga/core/effects'
import {closeDialog} from '../../../libs/display/actions/dialog.actions'

export function* addCardSaga(action) {
    try {
        const {data} = action.payload
        const token = window.localStorage.getItem('jwt')
        const headers = {
            authorization: `Bearer ${token}`,
        }
        const response = yield call(Post, 'http://localhost:3000/card', data, {
            authorization: `Bearer ${token}`,
        })

        yield put(onCardAdded(response.data))
        yield put(closeDialog('add-new-card'))
    } catch (e) {}
}
