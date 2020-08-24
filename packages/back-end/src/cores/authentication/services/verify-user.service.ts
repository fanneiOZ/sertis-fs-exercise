import { injectable } from "tsyringe";
import { UnauthorizedException, UserNotFoundException } from "../exceptions";
import { UserState } from "../models/interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";

@injectable()
export class VerifyUserService {
  constructor(
    private userRepository: UserRepository,
    ) {}

  async execute(claims: string | object): Promise<UserState> {
    if (typeof claims !== 'object' || !claims.valueOf().hasOwnProperty('user')) {
      throw new UnauthorizedException()
    }

    const {id} = Object.entries(claims).find(([key]) => key === 'user')[1] as UserState

    const user = await this.userRepository.getById(id)

    if (!user) {
      throw new UserNotFoundException()
    }

    return user.getState()
  }
}
