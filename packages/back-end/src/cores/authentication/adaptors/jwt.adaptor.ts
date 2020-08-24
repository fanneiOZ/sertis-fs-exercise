import {sign, SignOptions, verify} from "jsonwebtoken";
import {injectable} from "tsyringe";
import {UserState} from "../models/interfaces/user.interface";

@injectable()
export class JwtAdaptor {
    private readonly jwtSecretKey: string = 'testPrivateKey'
    private readonly signOptions: SignOptions = {
        algorithm: 'HS256',
        issuer: 'fanneiOZ',
        mutatePayload: false,
        expiresIn: '1 h'
    }

    sign<T>(user: UserState, additionalPayload?: T): string {
        const payload = {user, ...additionalPayload}

        return sign(payload, this.jwtSecretKey, this.signOptions)
    }

    verify(token: string): string | object {
        return verify(token, this.jwtSecretKey, this.signOptions)
    }
}