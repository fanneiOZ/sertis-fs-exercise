import React from 'react'
import './backdrop.css'

export function BackDrop(props) {
    const {displaying, closeFn} = props

    return (
        <div
            id={'untitled-backdrop'}
            className={displaying}
            onClick={e => {
                e.preventDefault()
                if (closeFn) {
                    closeFn()
                }
            }}
        />
    )
}
