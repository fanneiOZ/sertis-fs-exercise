import {FETCH_CARDS} from '../constants/actions'
import {CARD_FETCH_FAILED, CARDS_FETCHED} from '../constants/events'
import {getCurrentUser, getUtcTimestamp} from '../../../libs/common'

/**
 *
 * @returns {{type: string}}
 */
export function fetchCards() {
    return {
        type: FETCH_CARDS,
        payload: {
            timestamp: getUtcTimestamp(),
            actor: getCurrentUser(),
        },
    }
}

/**
 *
 * @param data
 * @returns {{data: *, type: string}}
 */
export function onCardFetched(data) {
    return {
        type: CARDS_FETCHED,
        data,
    }
}

export function onCardFetchFailed(exception) {
    return {
        type: CARD_FETCH_FAILED,
        exception,
    }
}
