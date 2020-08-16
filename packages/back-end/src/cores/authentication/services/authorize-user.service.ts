import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {UnauthorizedException, UserNotFoundException} from "../exceptions";
import {UserRepository} from "../repositories/user.repository";
import {GenerateTokenService} from "./generate-token.service";

export class AuthorizeUserService {
    constructor(
        private userRepository: UserRepository,
        private generateTokenService: GenerateTokenService,
    ) {}

    async execute(id: Identifier, password: string, payload?: Record<string, unknown>): Promise<string> {
        const user = this.userRepository.getById(id)

        if (!user) {
            throw new UserNotFoundException()
        }

        if (!user.authorize(password)) {
            throw new UnauthorizedException()
        }

        return this.generateTokenService.execute(user.getState(), payload)
    }
}