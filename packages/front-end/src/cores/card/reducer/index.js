import {cardsState} from './state'
import {CARD_ADDED, CARD_DELETED, CARDS_FETCHED} from '../constants/events'

export const cardReducer = (state = cardsState, action) => {
    switch (action.type) {
        case CARDS_FETCHED:
            return {
                ...state,
                cards: action.data,
            }
        case CARD_ADDED:
            return {
                ...state,
                cards: [action.data, ...state.cards],
            }
        case CARD_DELETED:
            const cards = state.cards.filter(card => card.id !== action.data.id)

            return {
                ...state,
                cards,
            }
        default:
            return state
    }
}

function handleCardFetched(payload) {
    console.log(payload)
}
