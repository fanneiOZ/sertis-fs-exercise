import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {UnauthorizedException, UserNotFoundException} from "../exceptions";
import {UserRepository} from "../repositories/user.repository";

export class AuthorizeUserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    execute(id: Identifier, password: string, payload?: Record<string, unknown>): string {
        const user = this.userRepository.getById(id)

        if (!user) {
            throw new UserNotFoundException()
        }

        if (!user.authorize(password)) {
            throw new UnauthorizedException()
        }

        return ''
    }
}