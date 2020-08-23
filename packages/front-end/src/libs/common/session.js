export function getCurrentUser() {
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
