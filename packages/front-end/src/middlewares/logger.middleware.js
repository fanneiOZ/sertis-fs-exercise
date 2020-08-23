export const loggerMiddleware = store => next => action => {
    console.group(action.type)
    if (action.payload) console.log({payload: action.payload})
    console.groupEnd()

    next(action)
}
