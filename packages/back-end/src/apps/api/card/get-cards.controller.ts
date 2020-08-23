import {injectable} from "tsyringe";
import {GetCardsService} from "../../../cores/mini-blog/services/card/get-cards.service";
import {Controller} from "../../../libs/common/controller";
import {ContentType} from "../../../libs/common/decorators/content-type.decorator";
import {DI} from "../../../libs/common/decorators/di-decorator";

@DI
@injectable()
export class GetCardsController extends Controller {
    constructor(
        private getCardsService: GetCardsService
    ) {
        super();
    }
    @ContentType('application/json')
    protected async handleRequest(): Promise<void> {
        this.resBody = await this.getCardsService.execute()
        this.setHeader('Access-Control-Allow-Origin', '*')
        this.setHeader('Access-Control-Allow-Origin', '*')

    }
}