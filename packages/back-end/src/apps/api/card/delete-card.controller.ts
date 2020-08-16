import {injectable} from "tsyringe";
import {DeleteCardService} from "../../../cores/mini-blog/services/card/delete-card.service";
import {Controller} from "../../../libs/common/controller";
import {DI} from "../../../libs/common/decorators/di-decorator";
import {Guard} from "../../../libs/common/decorators/guard.decorator";
import {CardRequestQuery} from "./request.interfaces";

@DI
@injectable()
export class DeleteCardController extends Controller {
    constructor(
        private deleteCardService: DeleteCardService
    ) {
        super()
    }

    @Guard()
    protected async handleRequest(body: unknown = undefined, query: CardRequestQuery): Promise<void> {
        const {id} = query

        await this.deleteCardService.execute(id)
    }
}