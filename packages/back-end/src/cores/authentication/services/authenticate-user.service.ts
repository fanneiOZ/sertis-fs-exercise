import {injectable} from "tsyringe";
import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {UnauthorizedException, UserNotFoundException} from "../exceptions";
import {UserRepository} from "../repositories/user.repository";
import {JwtAdaptor} from "../adaptors/jwt.adaptor";

@injectable()
export class AuthenticateUserService {
    constructor(
        private userRepository: UserRepository,
        private jwtAdaptor: JwtAdaptor,
    ) {}

    async execute(id: Identifier, password: string): Promise<string> {
        const user = await this.userRepository.getById(id)

        if (!user) {
            throw new UserNotFoundException()
        }

        if (!user.authorize(password)) {
            throw new UnauthorizedException()
        }

        return this.jwtAdaptor.sign(user.getState())
    }
}