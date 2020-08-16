import {Identifier} from "../../../../libs/domain-driven/interfaces/repository.interface";
import {CategoryState} from "./category.interface";

export type CardStatus = 'new' | 'edited' | 'deleted'

export interface CardState {
    id: Identifier
    name: string
    status: CardStatus
    content: string
    category: CategoryState
    author: Author
}

export interface Author {
    id: Identifier
    name: string
}