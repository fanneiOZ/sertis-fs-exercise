import {HttpException} from "../../libs/common/http-exception";

export class UserExistedException extends HttpException {
    constructor() {
        super(
            400,
            'UserAlreadyExisted',
            'This user already existed in the system'
        )
    }
}

export class UserNotFoundException extends HttpException {
    constructor() {
        super(
            404,
            'UserNotFound',
            'This user does not exist in the system'
        )
    }
}

export class UnauthorizedException extends HttpException {
    constructor() {
        super(
            403,
            'Unauthorized',
            'Not authorized by provided credentials.'
        )
    }
}