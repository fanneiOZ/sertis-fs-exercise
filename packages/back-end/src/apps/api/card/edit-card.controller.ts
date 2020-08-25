import {injectable} from "tsyringe";
import {AuthorizeUserService} from "../../../cores/authentication/services/authorize-user.service";
import {Author} from "../../../cores/mini-blog/models/interfaces/card.interface";
import {EditCardService} from "../../../cores/mini-blog/services/card/edit-card.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {CardRequestBody} from "./request.interfaces";

@DI
@injectable()
export class EditCardController extends Controller {
    constructor(
        private userAuthorizer: AuthorizeUserService,
        private editCardService: EditCardService
    ) {
        super()
    }

    protected async handleRequest(body: CardRequestBody): Promise<void> {
        const token = this.getHeader('authorization') as string
        this.context = this.userAuthorizer.execute(token)

        const {id: userId} = Object.entries(this.context)
            .find(([entry]) => entry === 'user')[1] as Author

        const { name, content, categoryName } = body
        const id = this.params.get('id')

        this.resBody = await this.editCardService.execute(id, name, content, categoryName, userId.toString())
    }
}