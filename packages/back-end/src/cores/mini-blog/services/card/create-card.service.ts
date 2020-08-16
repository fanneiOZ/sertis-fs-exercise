import {injectable} from "tsyringe";
import {Card} from "../../models/card";
import {CardState} from "../../models/interfaces/card.interface";
import {CardRepository} from "../../repositories/card.repository";
import {ResolveCategoryService} from "../category/resolve-category.service";

@injectable()
export class CreateCardService {
    constructor(
       private cardRepository: CardRepository,
       private categoryResolver: ResolveCategoryService,
    ) {}

    async execute(name: string, content: string, categoryName: string): Promise<CardState> {
        const category = this.categoryResolver.execute(categoryName)

        const author = {id: 'id', name: 'name'}
        const id = 'id'

        const card = Card.create(id, category, name, content, author)

        return card.getState()
    }
}