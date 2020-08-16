import {Route} from '../../../libs/common/route'
import {AddUserController} from './add-user.controller'
import {AuthenticateUserController} from "./authenticate-user.controller";

export const authenticatorRoutes: Route[] = [
    /**
     * Add new user
     */
    Route.create('post', '/user/').setHandler(AddUserController),
    /**
     * Authenticate user
     */
    Route.create('post', '/authenticate').setHandler(AuthenticateUserController)
]