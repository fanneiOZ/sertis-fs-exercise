import {injectable} from "tsyringe";
import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {UserExistedException} from "../exceptions";
import {UserState} from "../models/interfaces/user.interface";
import {User} from "../models/user";
import {UserRepository} from "../repositories/user.repository";

@injectable()
export class AddUserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async execute(id: Identifier): Promise<UserState> {
        const existingUser = this.userRepository.getById(id)

        if (existingUser) {
            throw new UserExistedException()
        }

        const password = 'password'
        const name = 'name'
        const user = User.create(name, password)

        return user.getState()
    }
}