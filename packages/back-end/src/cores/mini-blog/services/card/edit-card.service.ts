import {injectable} from "tsyringe";
import {Identifier} from "../../../../libs/domain-driven/interfaces/repository.interface";
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

    async execute(id: Identifier, name: string, content: string, categoryName: string): Promise<CardState> {
        const card = this.cardRepository.getById(id)

        if (!card) {
            throw new CardNotFoundException()
        }

        const category = await this.categoryResolver.execute(categoryName)

        const changed = card.edit(name, content)

        card.addCategory(category)

        if (changed) {

        }

        return card.getState()
    }
}