import {DELETE_CARD} from '../constants/actions'
import {getCurrentUser} from '../../authentication/helpers/session'
import {getUtcTimestamp} from '../../../libs/common'
import {CARD_DELETED} from '../constants/events'

export function deleteCard(id) {
    return {
        type: DELETE_CARD,
        payload: {
            timestamp: getUtcTimestamp(),
            actor: getCurrentUser(),
            data: {id},
        },
    }
}

export function onCardDeleted(id) {
    return {
        type: CARD_DELETED,
        data: {id},
    }
}
