import {injectable} from "tsyringe";
import {Category} from "../../models/category";
import {CategoryRepository} from "../../repositories/category.repository";

@injectable()
export class ResolveCategoryService {
    constructor(
       private categoryRepository: CategoryRepository
    ) {}

    async execute(name: string): Promise<Category> {
        const existingCategory = await this.categoryRepository.getById(name)

        if (existingCategory) return existingCategory

        const category = Category.create(name)
        await this.categoryRepository.create(category)

        return category
    }
}