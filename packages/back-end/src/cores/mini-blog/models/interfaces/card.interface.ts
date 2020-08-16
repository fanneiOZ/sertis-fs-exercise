import {Identifier} from "../../../../libs/domain-driven/interfaces/repository.interface";
import {Category} from "../category";

export type CardStatus = 'new' | 'edited' | 'deleted'

export interface CardState {
    id: Identifier
    name: string
    status: CardStatus
    content: string
    categories: Category[]
    author: Author
}

export interface Author {
    id: Identifier
    name: string
}