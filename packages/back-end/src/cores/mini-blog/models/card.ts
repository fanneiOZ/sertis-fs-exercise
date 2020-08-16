import {Identifier, Writable} from "../../../libs/domain-driven/interfaces/repository.interface";
import {Author, CardState} from "./interfaces/card.interface";
import {CategoryState} from "./interfaces/category.interface";

export class Card extends Writable<CardState> {
    private readonly state: CardState

    static create(
        id: Identifier,
        category: CategoryState,
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
            category,
        }

        return new Card(state)
    }

    private constructor(state: CardState) {
        super()
        this.state = state
    }

    edit(name: string, content: string, category?: CategoryState): boolean {
        let changed = false

        if (this.state.name !== name) {
            this.state.name = name
            changed = true
        }

        if (this.state.content !== content) {
            this.state.content = content
            changed = true
        }

        if (
            this.state.category.id !== category.id
            || this.state.category.name !== category.name
        ) {
            this.state.category = category
            changed = true
        }

        return changed
    }

    isEditableBy(authorId: string): boolean {
        return this.state.author.id === authorId
    }

    getState(): Readonly<CardState> {
        return this.state
    }

    getId(): Readonly<Identifier> {
        return this.state.id
    }

    toJSON(): CardState {
        return this.state;
    }
}