import {call, put} from '@redux-saga/core/effects'
import {Post} from '../../../libs/http/adaptors/axios.adaptor'
import {onUserSignedUp} from '../actions/sign-up.action'

export function* signUpSaga(action) {
    try {
        const response = yield call(Post, 'http://localhost:3000/user', action.payload.data)
        yield put(onUserSignedUp(response.data))
    } catch (e) {}
}
