import {injectable} from "tsyringe";
import {MongoDbAdaptor} from "../../../libs/database/nosql/mongo-db-adaptor";
import {DocumentRepository} from "../../../libs/domain-driven/document-repository";
import {Identifier, Writable} from "../../../libs/domain-driven/interfaces/repository.interface";
import {Card} from "../models/card";
import {CardState} from "../models/interfaces/card.interface";

@injectable()
export class CardRepository extends DocumentRepository<CardState>{
    constructor() {
        super(
            MongoDbAdaptor.getInstance(),
            {
                dbName: 'sertis',
                schemaName: 'blog',
                tableName: 'cards',
                schemaDefinitions: []
            }
        )
    }

    async getById(id: Identifier): Promise<Card | undefined> {
        try {
            const query = {
                id: {
                    $eq: id
                }
            }

            return await this.db.select(this.entityInfo, query)
        } catch (e) {
            throw e
        }
    }

    createPersistence(writable: Writable<CardState>): unknown {
        return writable.toJSON()
    }

    createWritable(document: CardState): Writable<CardState> {
        return undefined;
    }
}