export const loggerMiddleware = store => next => action => {
    console.group(action.type)
    if (action.payload) console.log({payload: action.payload})
    if (action.error) console.error({exception: action.exception})
    if (action.data) console.info({data: action.data})
    console.groupEnd()

    next(action)
}
