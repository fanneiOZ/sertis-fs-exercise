import {injectable} from "tsyringe";
import {AddUserService} from "../../../cores/authentication/services/add-user.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";

@DI
@injectable()
export class AddUserController extends Controller {
    constructor(
        private addUserService: AddUserService
    ) {
        super()
    }

    protected async handleRequest<T, K>(body?: T, query?: K): Promise<void> {
        this.resBody = await this.addUserService.execute('id')
    }
}