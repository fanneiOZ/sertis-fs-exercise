import {injectable} from "tsyringe";
import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {UserExistedException} from "../exceptions";
import {User} from "../models/user";
import {UserRepository} from "../repositories/user.repository";

@injectable()
export class AddUserService {
    constructor(
        private userRepository: UserRepository
    ) {
    }
    execute(id: Identifier): User {
        const existingUser = this.userRepository.getById(id)

        if (existingUser) {
            throw new UserExistedException()
        }

        const password = 'password'
        const name = 'name'

        return User.create(name, password)
    }
}