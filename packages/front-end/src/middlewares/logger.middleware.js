export const loggerMiddleware = store => next => action => {
    console.group(action.type)
    if (action.payload) console.log({payload: action.payload})
    if (action.error) console.error({exception: action.exception})
    console.groupEnd()

    next(action)
}
