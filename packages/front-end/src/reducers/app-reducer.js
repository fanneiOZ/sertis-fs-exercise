import {appState} from '../constants/default-app-state';
import {PAGE_LOADED, PAGE_UNLOADED} from '../constants/action-types';

export default (state = appState, action) => {
    switch (action.type) {
        case PAGE_LOADED:
            return {
                ...state,
                cards: action.payload[0].cards,
            }
        case PAGE_UNLOADED:
            return {}
        default:
            return state
    }
}