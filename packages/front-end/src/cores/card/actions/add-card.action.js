import {getCurrentUser, getUtcTimestamp} from '../../../libs/common'
import {ADD_CARD} from '../constants/actions'

/**
 * Add card data and submit add new card request to backend API
 *
 * @param card
 * @returns {{payload: {actor: ({name: string, id: string}|{name: string, id: string}), payload: {card: *}, timestamp: number}, type: string}}
 */
export function addCard(card) {
    return {
        type: ADD_CARD,
        payload: {
            timestamp: getUtcTimestamp(),
            actor: getCurrentUser(),
            data: {card},
        },
    }
}
