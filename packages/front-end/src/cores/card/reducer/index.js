import {cardsState} from './state'
import {CARDS_FETCHED} from '../constants/events'

export const cardReducer = (state = cardsState, action) => {
    switch (action.type) {
        case CARDS_FETCHED:
            return {
                ...state,
                cards: action.data,
            }
        default:
            return state
    }
}

function handleCardFetched(payload) {
    console.log(payload)
}
