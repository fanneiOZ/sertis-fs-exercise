export const loggerMiddleware = store => next => action => {
    console.log({...action, newState: store.getState()})

    next(action)
}
