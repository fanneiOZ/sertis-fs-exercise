import {injectable} from "tsyringe";
import {AuthenticateUserService} from "../../../cores/authentication/services/authenticate-user.service";
import {Controller} from "../../../libs/common/controller";
import {ContentType} from "../../../libs/common/decorators/content-type.decorator";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {AuthenticateRequestBody} from "./request.interfaces";

@DI
@injectable()
export class AuthenticateUserController extends Controller {
    constructor(
        private userAuthenticator: AuthenticateUserService
    ) {
        super()
    }

    @ContentType('application/json')
    protected async handleRequest(body: AuthenticateRequestBody): Promise<void> {
        console.log(body)

        const token = await this.userAuthenticator.execute(body.id, body.password)

        this.resBody = {token}
    }

}