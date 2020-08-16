import {injectable} from "tsyringe";
import {AuthorizeUserService} from "../../../cores/authentication/services/authorize-user.service";
import {EditCardService} from "../../../cores/mini-blog/services/card/edit-card.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {Guard} from "../../../libs/common/decorators/guard.decorator";
import {CardRequestBody, CardRequestQuery} from "./request.interfaces";

@DI
@injectable()
export class EditCardController extends Controller {
    constructor(
        private userAuthorizer: AuthorizeUserService,
        private editCardService: EditCardService
    ) {
        super()
    }

    protected async handleRequest(body: CardRequestBody, query: CardRequestQuery): Promise<void> {
        const token = this.getHeader('authorization') as string
        this.context = this.userAuthorizer.execute(token)

        const { name, content, categoryName } = body
        const { id } = query

        await this.editCardService.execute(id, name, content, categoryName)
    }
}