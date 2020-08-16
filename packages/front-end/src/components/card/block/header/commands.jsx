import React from 'react'

export function Commands(props) {
    const { editable } = props
    const displayClass = editable ? 'visible' : 'hidden'

    return (
        <ul className={`card header commands ${displayClass}`}>
            <li>
                <input id="edit" type="button" />
            </li>
            <li>
                <input id="delete" type="button" />
            </li>
        </ul>
    )
}