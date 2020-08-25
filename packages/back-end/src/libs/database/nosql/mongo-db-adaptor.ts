import {EntityInfo} from "../../domain-driven/interfaces/repository.interface";
import {DbAdaptorAbstract} from "../db-adaptor.abstract";
import {Collection, MongoClient} from 'mongodb';

export class MongoDbAdaptor extends DbAdaptorAbstract {
    private static instance: MongoDbAdaptor

    static getInstance(): MongoDbAdaptor {
        if (!this.instance) {
            const db = process.env.MONGO_URL ?? 'mongodb://mongo:27017'
            const client = new MongoClient(db, {useUnifiedTopology: true})

            this.instance = new MongoDbAdaptor(client)
        }

        return this.instance
    }

    private constructor(
        private client: MongoClient
    ) {
        super()
    }

    async createEntity(schema: EntityInfo): Promise<boolean> {
        try {
            await this.setupConnection()
            await this.resolveCollection(schema)

            return true
        } catch (e) {
            return false
        }
    }

    async delete<T>(schema: EntityInfo, query: T): Promise<boolean> {
        try {
            await this.setupConnection()
            await this.resolveCollection(schema).deleteOne(query)

            return true
        } catch (e) {
            throw e
        }
    }

    async dropEntity(schema: EntityInfo): Promise<boolean> {
        try {
            await this.setupConnection()
            await this.resolveCollection(schema).drop()

            return true
        } catch (e) {
            return false
        }
    }

    async insert<T>(schema: EntityInfo, data: T): Promise<T> {
        try {
            await this.setupConnection()
            await this.resolveCollection(schema).insertOne(data)
        } catch (e) {
            throw e
        }
        return data;
    }

    async select<T, K>(schema: EntityInfo, query: K): Promise<T> {
        try {
            await this.setupConnection()
            return await this.resolveCollection(schema).findOne(query)
        } catch (e) {
            throw e
        }
    }

    async selectAll<T>(schema: EntityInfo): Promise<T[]> {
        try {
            await this.setupConnection()
            return await this.resolveCollection(schema).find({}).sort({id: -1}).toArray()
        } catch (e) {

        }
    }

    async truncate(schema: EntityInfo): Promise<boolean> {
        try {
            await this.setupConnection()
            await this.resolveCollection(schema).deleteMany({})

            return true
        } catch (e) {
            throw e
        }
    }

    async update<T, K>(entity: EntityInfo, data: T, query: K): Promise<boolean> {
        try {
            await this.setupConnection()
            await this.resolveCollection(entity).replaceOne(query, data)

            return true
        } catch (e) {
            throw e
        }
    }

    private async setupConnection(): Promise<void> {
        if (!this.client.isConnected()) {
            await this.client.connect()
        }
    }

    private resolveCollection(entity: EntityInfo): Collection {
        const collection  = `${entity.schemaName}-${entity.tableName}`

        return this.client.db(entity.dbName).collection(collection)
    }
}