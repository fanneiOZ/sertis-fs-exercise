import {EntityInfo} from "../domain-driven/interfaces/repository.interface";

export abstract class DbAdaptorAbstract {
    abstract async insert<T>(entity: EntityInfo, data: T): Promise<T>
    abstract async select<T, K>(entity: EntityInfo, query: K): Promise<T>
    abstract async selectAll<T>(entity: EntityInfo): Promise<T[]>
    abstract async update<T, K>(entity: EntityInfo, data: T, query?: K): Promise<boolean>
    abstract async delete<T>(entity: EntityInfo, query: T): Promise<boolean>
    abstract async createEntity(entity: EntityInfo): Promise<boolean>
    abstract async dropEntity(entity: EntityInfo): Promise<boolean>
    abstract async truncate(entity: EntityInfo): Promise<boolean>
}