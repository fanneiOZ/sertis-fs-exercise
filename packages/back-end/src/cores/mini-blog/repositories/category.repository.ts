import {injectable} from "tsyringe";
import {Category} from "../models/category";

@injectable()
export class CategoryRepository {
    getByName(name: string): Category | undefined {
        return
    }
}