export function getAvatarUrl(name) {
    const isValidName = name || typeof name === 'string'
    const paramName = isValidName ? name.trim().replace(' ', '+') : 'John+Doe'

    return `https://ui-avatars.com/api/?bold=true&name=${paramName}&size=48`
}
