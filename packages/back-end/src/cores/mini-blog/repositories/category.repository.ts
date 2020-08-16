import {injectable} from "tsyringe";
import {MongoDbAdaptor} from "../../../libs/database/nosql/mongo-db-adaptor";
import {DocumentRepository} from "../../../libs/domain-driven/document-repository";
import {Writable} from "../../../libs/domain-driven/interfaces/repository.interface";
import {Category} from "../models/category";
import {CategoryState} from "../models/interfaces/category.interface";

@injectable()
export class CategoryRepository extends DocumentRepository<CategoryState> {
    constructor() {
        super(
            MongoDbAdaptor.getInstance(),
            {
                dbName: 'sertis',
                schemaName: 'blog',
                tableName: 'categories',
                schemaDefinitions: []
            }
        )
    }

    async getById(name: string): Promise<Category | undefined> {
        try {
            const query = {
                id: {
                    $eq: name.toLowerCase()
                }
            }

            const data = await this.db.select(this.entityInfo, query) as CategoryState

            if (!data) return undefined

            return Category.create(data.name)
        } catch (e) {
            throw e
        }
    }

    createPersistence(writable: Writable<CategoryState>): unknown {
        return writable.toJSON()
    }

    createWritable(document: CategoryState): Writable<CategoryState> {
        return undefined
    }


}