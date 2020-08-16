import {injectable} from "tsyringe";
import {CardState} from "../../models/interfaces/card.interface";
import {CardRepository} from "../../repositories/card.repository";

@injectable()
export class GetCardsService {
    constructor(
        private cardRepository: CardRepository
    ) {}

    async execute(): Promise<CardState[]> {
        const cards = await this.cardRepository.getAll()

        return cards.map(card => card.getState())
    }
}