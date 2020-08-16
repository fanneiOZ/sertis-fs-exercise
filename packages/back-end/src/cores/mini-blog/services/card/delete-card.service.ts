import {injectable} from "tsyringe";
import {Identifier} from "../../../../libs/domain-driven/interfaces/repository.interface";
import {UnauthorizedException} from "../../../authentication/exceptions";
import {CardRepository} from "../../repositories/card.repository";

@injectable()
export class DeleteCardService {
    constructor(
        private cardRepository: CardRepository
    ) {}

    async execute(id: Identifier, userId: string): Promise<boolean> {
        const card = await this.cardRepository.getById(id)

        if (!card) {
            return false
        }

        if (card.isEditableBy(userId)) {
            await this.cardRepository.deleteById(id)
        } else {
            throw new UnauthorizedException()
        }

        return true
    }
}