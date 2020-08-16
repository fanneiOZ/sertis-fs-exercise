import React from 'react'

export function Title(props) {
    const { cardName } = props
    return (
        <span className='card header name'>{cardName}</span>
    )
}