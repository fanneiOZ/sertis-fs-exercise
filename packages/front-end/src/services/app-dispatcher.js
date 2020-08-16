import {store} from '../store'
import {PAGE_LOADED} from "../constants/action-types";

export function pageLoad() {
    const payload = {
        cards: []
    }
    store.dispatch({type: PAGE_LOADED, payload})
}