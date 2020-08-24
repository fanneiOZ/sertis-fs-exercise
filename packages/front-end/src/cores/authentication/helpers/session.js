import {store} from '../../../store'

export function getCurrentUser() {
    const user = store.getState().authentication.currentUser

    if (!user) {
        return {
            id: 'anonymous',
            name: 'Anonymous User',
        }
    }

    return {
        id: user.id,
        name: user.name,
    }
}