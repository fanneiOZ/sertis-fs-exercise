import {FETCH_CARDS} from '../constants/actions'
import {CARDS_FETCHED} from '../constants/events'
import {getCurrentUser, getUtcTimestamp} from '../../../libs/common'

/**
 *
 * @returns {{type: string}}
 */
export function fetchCard() {
    return {
        type: FETCH_CARDS,
        payload: {
            timestamp: getUtcTimestamp(),
            actor: getCurrentUser(),
        },
    }
}

export function onCardFetched(data) {
    return {
        type: CARDS_FETCHED,
        data,
    }
}
