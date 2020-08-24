import {displayState} from './state'
import {CLOSE_DIALOG, CLOSE_SIDE_PANEL, OPEN_DIALOG, OPEN_SIDE_PANEL} from '../constants/commands'

export const displayReducer = (state = displayState, action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return {
                ...state,
                modal: {
                    activeId: action.payload.id,
                },
                backdrop: action.payload.backdrop,
            }
        case CLOSE_DIALOG:
            return {
                ...state,
                modal: {
                    activeId: undefined,
                },
                backdrop: false,
            }
        case OPEN_SIDE_PANEL:
            return {
                ...state,
                sidePanel: {
                    activeId: action.payload.id,
                },
                backdrop: action.payload.backdrop,
            }
        case CLOSE_SIDE_PANEL:
            return {
                ...state,
                sidePanel: {
                    activeId: undefined,
                },
                backdrop: false,
            }
        default:
            return state
    }
}
