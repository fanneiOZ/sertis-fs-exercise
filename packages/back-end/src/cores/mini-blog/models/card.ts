import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";
import {Category} from "./category";
import {Author, CardState} from "./interfaces/card.interface";

export class Card {
    private state: CardState

    static create(
        id: Identifier,
        category: Category,
        name: string,
        content: string,
        author: Author
    ): Card {
        const state: CardState = {
            id,
            name,
            status: 'new',
            content,
            author,
            categories: [category],
        }

        return new Card(state)
    }

    private constructor(state: CardState) {
        this.state = state
    }

    addCategory(category: Category): boolean {
        const addingId = category.getId()
        const existingCategory = this.state.categories.find(category => category.getId() === addingId)

        if (!existingCategory) {
            this.state.categories.push(category)

            return true
        }

        return false
    }

    edit(name: string, content: string): boolean {
        let changed = false

        if (this.state.name !== name) {
            this.state.name = name
            changed = true
        }

        if (this.state.content !== content) {
            this.state.content = content
            changed = true
        }

        return changed
    }

    delete(): boolean {
        if (this.state.status !== 'deleted') {
            this.state.status = 'deleted'

            return true
        }

        return false
    }

    getState(): Readonly<CardState> {
        return this.state
    }
}