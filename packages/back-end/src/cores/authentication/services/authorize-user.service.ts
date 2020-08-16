import {injectable} from "tsyringe";
import {UnauthorizedException} from "../exceptions";
import {JwtAdaptor} from "../adaptors/jwt.adaptor";

@injectable()
export class AuthorizeUserService {
    constructor(
        private jwtAdaptor: JwtAdaptor
    ) {}

    execute(token: string): string | object {
        const claims = this.jwtAdaptor.verify(token)

        if (!claims) {
            throw new UnauthorizedException()
        }

        return claims
    }
}