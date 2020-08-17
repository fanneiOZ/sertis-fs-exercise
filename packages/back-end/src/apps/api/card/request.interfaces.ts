export interface AuthorRequestBody {
    id: string
    name: string
}
export interface CardRequestBody {
    name: string
    content: string
    categoryName: string
    author: AuthorRequestBody
}

export interface CardRequestQuery {
    id: string
}