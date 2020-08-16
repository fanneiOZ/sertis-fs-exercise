import {injectable} from "tsyringe";
import {MongoDbAdaptor} from "../../../libs/database/nosql/mongo-db-adaptor";
import {DocumentRepository} from "../../../libs/domain-driven/document-repository";
import {Identifier, Writable} from "../../../libs/domain-driven/interfaces/repository.interface";
import {WritableUserState} from "../models/interfaces/user.interface";
import {User} from "../models/user";

@injectable()
export class UserRepository extends DocumentRepository<WritableUserState>{
    constructor() {
        super(
            MongoDbAdaptor.getInstance(),
            {
                dbName: 'sertis',
                schemaName: 'schema',
                tableName: 'user',
                schemaDefinitions: []
            }
        )
    }

    async getById(id: Identifier): Promise<User | undefined> {
        const query = {
            id: {
                $eq: id
            }
        }

        const data = await this.db.select(this.entityInfo, query) as WritableUserState

        if (!data) return

        return User.create(data.id, data.name, data.password)
    }

    createPersistence(writable: User): unknown {
        return writable.toJSON()
    }

    createWritable(document: WritableUserState): User {
        const {id, name, password} = document

        return User.create(id, name, password)
    }


}