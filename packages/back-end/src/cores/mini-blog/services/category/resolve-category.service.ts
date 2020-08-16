import {injectable} from "tsyringe";
import {Category} from "../../models/category";
import {CategoryRepository} from "../../repositories/category.repository";

@injectable()
export class ResolveCategoryService {
    constructor(
       private categoryRepository: CategoryRepository
    ) {}

    execute(name: string): Category {
        const existingCategory = this.categoryRepository.getByName(name)

        if (!existingCategory) {
            const category = Category.create(name)

            return category
        }

        return existingCategory
    }
}