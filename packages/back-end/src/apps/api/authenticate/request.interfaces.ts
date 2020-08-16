import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";

export interface AuthenticateRequestBody {
    id: Identifier
    password: string
}