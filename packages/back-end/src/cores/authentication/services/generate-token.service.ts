import {injectable} from "tsyringe";
import {UserState} from "../models/interfaces/user.interface";

@injectable()
export class GenerateTokenService {
    constructor() {
    }

    execute<T>(user: UserState, payload?: T): string {
        return ''
    }
}