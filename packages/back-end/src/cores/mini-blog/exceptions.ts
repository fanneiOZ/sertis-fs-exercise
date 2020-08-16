import {HttpException} from "../../libs/common/http-exception";

export class CardNotFoundException extends HttpException {
    constructor() {
        super(
            404,
            'CardNotFound',
            'Card not found by specified id.'
        )
    }
}