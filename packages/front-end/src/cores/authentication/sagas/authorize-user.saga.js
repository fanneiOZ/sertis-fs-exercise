import {call, put} from '@redux-saga/core/effects'
import {Get} from '../../../libs/http/adaptors/axios.adaptor'
import {onUserAuthorized, onUserUnauthorized} from '../actions/authorize-user.action'

export function* authorizeUserSaga(action) {
    try {
        const {token} = action.payload.data
        const {data} = yield call(Get, `http://localhost:3000/authorize?token=${token}`)
        yield put(onUserAuthorized(data))
    } catch (e) {
        yield put(onUserUnauthorized())
        window.localStorage.removeItem('jwt')
    }
}
