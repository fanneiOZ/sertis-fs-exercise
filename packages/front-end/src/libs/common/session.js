import {store} from '../../store'

export function getCurrentUser() {
    store.getState()
    const token = ''

    if (!token) {
        return {
            id: 'anonymous',
            name: 'Anonymous User',
        }
    }

    return {
        id: 'user-id',
        name: 'user-name',
    }
}
