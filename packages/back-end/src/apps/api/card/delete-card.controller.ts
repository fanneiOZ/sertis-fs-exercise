import {injectable} from "tsyringe";
import {AuthorizeUserService} from "../../../cores/authentication/services/authorize-user.service";
import {Author} from "../../../cores/mini-blog/models/interfaces/card.interface";
import {DeleteCardService} from "../../../cores/mini-blog/services/card/delete-card.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {AuthorRequestBody, CardRequestQuery} from "./request.interfaces";

@DI
@injectable()
export class DeleteCardController extends Controller {
    constructor(
        private userAuthorizer: AuthorizeUserService,
        private deleteCardService: DeleteCardService,
    ) {
        super()
    }

    protected async handleRequest(body: AuthorRequestBody, query: CardRequestQuery): Promise<void> {
        const userId = body.id
        const {id} = query

        await this.deleteCardService.execute(id, userId.toString())
    }
}