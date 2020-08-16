import React from 'react'
import './components/card/style.css'
import CardList from "./components/card/card-list";

export function App(props) {
    const appName = props.name ?? ''
    const cards = [
        {
            info: {
                id: 0,
                name: 'card name 1',
                content: 'Content',
                author: {
                    id: 1,
                    name: 'author-1',
                },
            },
            editable: true,
        },
        {
            info: {
                id: 1,
                name: 'card name 2',
                content: 'Content',
                author: {
                    id: 1,
                    name: 'author-2',
                },
            },
            editable: false,
        },
    ]
    return (
        <div id="app-container">
            <h2>H3LL0 {appName}</h2>
            <CardList list={cards}/>
        </div>
    )
}