import React from 'react'

export function AuthorInfo(props) {
    const {name} = props.author

    return (
        <span className='card footer author'>
            <span className='name'>{name}</span>
        </span>
    )
}