import {injectable} from "tsyringe";
import {Identifier} from "../../../../libs/domain-driven/interfaces/repository.interface";
import {CardState} from "../../models/interfaces/card.interface";
import {CardRepository} from "../../repositories/card.repository";

@injectable()
export class DeleteCardService {
    constructor(
        private cardRepository: CardRepository
    ) {}

    execute(id: Identifier): boolean {
        const card = this.cardRepository.getById(id)

        if (!card) {
            return false
        }

        const deleted = card.delete()

        if (deleted) {

        }

        return true
    }
}