import {call, put} from '@redux-saga/core/effects'
import {Get} from '../../../libs/http/adaptors/axios.adaptor'
import {onUserAuthorized} from '../actions/authorize-user.action'

export function* authorizeUserSaga(action) {
    try {
        const {token} = action.payload.data
        const response = yield call(Get, `http://localhost:3000/authorize?token=${token}`)
        yield put(onUserAuthorized(response.data))
    } catch (e) {}
}
