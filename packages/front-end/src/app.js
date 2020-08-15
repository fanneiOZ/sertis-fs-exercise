import React from 'react'

export function App(props) {
    const appName = props.name ?? ''

    return (
        <div id="app-container">
            <h2>H3LL0 {appName}</h2>
        </div>
    )
}