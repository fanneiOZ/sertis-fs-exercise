import {takeEvery} from '@redux-saga/core/effects'
import {SIGN_UP} from '../constants/authentication.commands'
import {signUpSaga} from './sign-up.saga'

export default function* () {
    yield takeEvery(SIGN_UP, signUpSaga)
}
