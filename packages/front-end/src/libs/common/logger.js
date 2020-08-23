import {store} from '../../store'

export function logger(action) {
    console.group(action.type)
    console.log(action)
    console.log(store.getState())
    console.groupEnd()
}
