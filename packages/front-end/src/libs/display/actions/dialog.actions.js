import {CLOSE_DIALOG, OPEN_DIALOG} from '../constants/commands'

export function openDialog(id, backdrop = true) {
    return {
        type: OPEN_DIALOG,
        payload: {id, backdrop},
    }
}

export function closeDialog(id) {
    return {
        type: CLOSE_DIALOG,
        payload: {id},
    }
}
