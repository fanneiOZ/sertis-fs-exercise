import {CLOSE_SIDE_PANEL, OPEN_SIDE_PANEL} from '../constants/commands'

export function openSidePanel(id, backdrop = true) {
    return {
        type: OPEN_SIDE_PANEL,
        payload: {id, backdrop},
    }
}

export function closeSidePanel(id) {
    return {
        type: CLOSE_SIDE_PANEL,
        payload: {id},
    }
}
