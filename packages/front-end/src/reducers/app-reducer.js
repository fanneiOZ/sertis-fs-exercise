import {appState} from '../constants/default-app-state';
import {
    CLOSE_EDITOR,
    CLOSE_SIGN_IN,
    FETCH_CARDS,
    OPEN_EDITOR,
    OPEN_SIGN_IN,
    PAGE_LOADED,
    PAGE_UNLOADED
} from '../constants/action-types';

export default (state = appState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
        case PAGE_LOADED:
            return {
                ...state,
                cards: action.payload.cards,
            }
        case PAGE_UNLOADED:
            return {}
        case OPEN_EDITOR:
            return {
                ...state,
                editing: true,
            }
        case CLOSE_EDITOR:
            return {
                ...state,
                editing: false,
            }
        case OPEN_SIGN_IN:
            return {
                ...state,
                authenticating: true,
            }
        case CLOSE_SIGN_IN:
            return {
                ...state,
                authenticating: false,
            }
        default:
            return state
    }
}