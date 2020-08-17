import {injectable} from "tsyringe";
import {AuthorizeUserService} from "../../../cores/authentication/services/authorize-user.service";
import {CreateCardService} from "../../../cores/mini-blog/services/card/create-card.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {CardRequestBody} from "./request.interfaces";

@DI
@injectable()
export class AddCardController extends Controller {
    constructor(
        private userAuthorizer: AuthorizeUserService,
        private createCardService: CreateCardService
    ) {
        super()
    }

    protected async handleRequest(body: CardRequestBody): Promise<void> {
        const {name, content, categoryName, author} = body

        this.resBody = await this.createCardService.execute(name, content, categoryName, author)
    }

}