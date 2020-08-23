export function requiredId(id) {
    if (!id) throw Error('This component required its id')

    return id
}
