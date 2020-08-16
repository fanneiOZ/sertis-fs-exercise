import {injectable} from "tsyringe";
import {AuthorizeUserService} from "../../../cores/authentication/services/authorize-user.service";
import {Author} from "../../../cores/mini-blog/models/interfaces/card.interface";
import {DeleteCardService} from "../../../cores/mini-blog/services/card/delete-card.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {CardRequestQuery} from "./request.interfaces";

@DI
@injectable()
export class DeleteCardController extends Controller {
    constructor(
        private userAuthorizer: AuthorizeUserService,
        private deleteCardService: DeleteCardService,
    ) {
        super()
    }

    protected async handleRequest(body: unknown = undefined, query: CardRequestQuery): Promise<void> {
        const token = this.getHeader('authorization') as string
        this.context = this.userAuthorizer.execute(token)

        const {id: userId} = Object.entries(this.context)
            .find(([entry]) => entry === 'user')[1] as Author

        const {id} = query

        await this.deleteCardService.execute(id, userId.toString())
    }
}