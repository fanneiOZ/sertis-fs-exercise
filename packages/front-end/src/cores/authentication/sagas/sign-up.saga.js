import {call, put} from '@redux-saga/core/effects'
import {Post} from '../../../libs/http/adaptors/axios.adaptor'
import {onUserSignedUp} from '../actions/sign-up.action'
import {signIn} from '../actions/sign-in.action'
import { closeSidePanel } from "../../../libs/display/actions/side-panel.actions";

export function* signUpSaga(action) {
    try {
        const response = yield call(Post, 'http://localhost:3000/user', action.payload.data)
        yield put(onUserSignedUp(response.data))

        const {id, password} = action.payload.data
        yield put(signIn({id, password}))

        yield put(closeSidePanel('sign-up-form'))
    } catch (e) {}
}
