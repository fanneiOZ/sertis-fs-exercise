import React from 'react'

export function Content(props) {
    const {content} = props

    return (
        <span className='card body content'>
            {content}
        </span>
    )
}