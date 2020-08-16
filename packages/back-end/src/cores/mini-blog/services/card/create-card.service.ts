import {injectable} from "tsyringe";
import {Card} from "../../models/card";
import {Author, CardState} from "../../models/interfaces/card.interface";
import {CardRepository} from "../../repositories/card.repository";
import {ResolveCategoryService} from "../category/resolve-category.service";
import {nanoid} from 'nanoid'

@injectable()
export class CreateCardService {
    constructor(
       private cardRepository: CardRepository,
       private categoryResolver: ResolveCategoryService,
    ) {}

    async execute(name: string, content: string, categoryName: string, author?: Author): Promise<CardState> {
        const category = await this.categoryResolver.execute(categoryName)

        const id = nanoid(10)

        const card = Card.create(id, category, name, content, author)

        await this.cardRepository.create(card)

        return card.getState()
    }
}