import React from 'react'

export function extractChildren(componentType, children) {
    const component = Object.values(children)
        .filter(child => typeof child === 'object' && child.hasOwnProperty('$$typeof'))
        .find(child => child.props.hasOwnProperty('id') && child.props.id === `modal-${componentType}`)

    const content = componentType === 'content' ? children : undefined

    return component ? <>{component}</> : content
}
