import {displayState} from "./display.state";
import {CLOSE_MODAL, CLOSE_SIDE_BAR, OPEN_MODAL, OPEN_SIDE_BAR} from "./display.commands";

export const displayReducer = (state = displayState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modal: {
                    activeId: action.payload.modalId
                }
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: {
                    activeId: undefined
                },
            }
        case OPEN_SIDE_BAR:
            return {
                ...state,
                sideBar: {
                    activeId: action.payload.sideBarId
                }
            }
        case CLOSE_SIDE_BAR:
            return {
                ...state,
                sideBar: {
                    activeId: action.payload.sidebarId
                }
            }
        default:
            return state
    }
}