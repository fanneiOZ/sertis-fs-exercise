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

            const data = await this.db.select(this.entityInfo, query) as CardState

            return Card.create(data.id, data.category, data.name, data.content, data.author)
        } catch (e) {
            throw e
        }
    }

    async getAll(): Promise<Card[]> {
        try {
            const data = await this.db.selectAll(this.entityInfo)

            return data.map(data => {
                const {id, category, name, content, author} = data as CardState

                return Card.create(id, category, name, content, author)
            })
        } catch (e) {
            throw e
        }
    }

    async deleteById(id: Identifier): Promise<void> {
        const query = {
            id: {
                $eq: id
            }
        }
        await this.db.delete(this.entityInfo, query)
    }

    async update(card: Card): Promise<void> {
        const query = {
            id: {
                $eq: card.getId()
            }
        }

        await this.db.update(this.entityInfo, card, query)
    }

    createPersistence(writable: Writable<CardState>): unknown {
        return writable.toJSON()
    }

    createWritable(document: CardState): Writable<CardState> {
        return undefined;
    }
}