import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {CategoryState} from "./interfaces/category.interface";

export class Category {
    private readonly id: Identifier
    private name: string

    static create(name: string): Category {
        return new Category('id', name)
    }

    private constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }

    getId(): Identifier {
        return this.id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getState(): Readonly<CategoryState> {
        return {
            id: this.id,
            name: this.name,
        }
    }
}