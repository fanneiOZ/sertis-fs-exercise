import {takeEvery} from '@redux-saga/core/effects'
import {AUTHORIZE_USER, SIGN_IN, SIGN_UP} from '../constants/authentication.commands'
import {signUpSaga} from './sign-up.saga'
import {signInSaga} from './sign-in.saga'
import {authorizeUserSaga} from './authorize-user.saga'

export default function* () {
    yield takeEvery(SIGN_UP, signUpSaga)
    yield takeEvery(SIGN_IN, signInSaga)
    yield takeEvery(AUTHORIZE_USER, authorizeUserSaga)
}
