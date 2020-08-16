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

    async execute(id: Identifier, name: string, password: string): Promise<UserState> {
        const existingUser = await this.userRepository.getById(id)

        if (existingUser) {
            throw new UserExistedException()
        }

        const user = User.create(id, name, password)

        try {
            await this.userRepository.create(user)

            return user.getState()
        } catch (e) {
            throw e
        }
    }
}