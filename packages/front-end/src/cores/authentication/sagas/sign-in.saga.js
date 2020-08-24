import {call, put} from '@redux-saga/core/effects'
import {Post} from '../../../libs/http/adaptors/axios.adaptor'
import {onUserSignedIn} from '../actions/sign-in.action'
import {closeSidePanel} from '../../../libs/display/actions/side-panel.actions'
import { authorizeUser } from "../actions/authorize-user.action";

export function* signInSaga(action) {
    try {
        const response = yield call(Post, 'http://localhost:3000/authenticate', action.payload.data)
        yield put(onUserSignedIn(response.data))

        const {token} = response.data
        window.localStorage.setItem('jwt', token)

        yield put(authorizeUser(token))

        yield put(closeSidePanel('sign-in-form'))
    } catch (e) {}
}
