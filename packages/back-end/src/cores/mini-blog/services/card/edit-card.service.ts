import {injectable} from "tsyringe";
import {Identifier} from "../../../../libs/domain-driven/interfaces/repository.interface";
import {UnauthorizedException} from "../../../authentication/exceptions";
import {CardNotFoundException} from "../../exceptions";
import {CardState} from "../../models/interfaces/card.interface";
import {CardRepository} from "../../repositories/card.repository";
import {ResolveCategoryService} from "../category/resolve-category.service";

@injectable()
export class EditCardService {
    constructor(
        private cardRepository: CardRepository,
        private categoryResolver: ResolveCategoryService,
    ) {}

    async execute(id: Identifier, name: string, content: string, categoryName: string, userId: string): Promise<CardState> {
        const card = await this.cardRepository.getById(id)

        if (!card) {
            throw new CardNotFoundException()
        }

        if (!card.isEditableBy(userId)) {
            throw new UnauthorizedException()
        }

        const category = await this.categoryResolver.execute(categoryName)

        const changed = card.edit(name, content, category.getState())

        if (changed) {
            await this.cardRepository.update(card)
        }

        return card.getState()
    }
}