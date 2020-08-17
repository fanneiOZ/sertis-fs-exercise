import {appState} from '../constants/default-app-state';
import {
    CLOSE_EDITOR,
    CLOSE_SIGN_IN,
    FETCH_CARDS, LOGGED_IN,
    OPEN_EDITOR,
    OPEN_SIGN_IN,
    PAGE_UNLOADED
} from '../constants/action-types';

export default (state = appState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
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
        case LOGGED_IN:
            return {
                ...state,
                currentUser: action.payload.user,
            }
        default:
            return state
    }
}