import {injectable} from "tsyringe";
import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {User} from "../models/user";

@injectable()
export class UserRepository {
    getById(id: Identifier): User | undefined {
        return
    }
}