import {Route} from '../../../libs/common/route'
import {AddUserController} from './add-user.controller'

export const authenticatorRoutes: Route[] = [
    /**
     * Add new user
     */
    Route.create('post', '/user/').setHandler(AddUserController),
]