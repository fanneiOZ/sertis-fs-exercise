import {injectable} from "tsyringe";
import {AddUserService} from "../../../cores/authentication/services/add-user.service";
import {Controller} from "../../../libs/common/controller";
import {ContentType} from "../../../libs/common/decorators/content-type.decorator";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {AuthenticateRequestBody, UserRequestBody} from "./request.interfaces";

@DI
@injectable()
export class AddUserController extends Controller {
    constructor(
        private addUserService: AddUserService
    ) {
        super()
    }

    @ContentType('application/json')
    protected async handleRequest(body: UserRequestBody): Promise<void> {
        const {id, name, password} = body
        const user = await this.addUserService.execute(id, name, password ?? `${id}`)

        this.resBody = {user}
    }
}