import React from 'react'
import {Title} from "./title";
import {Commands} from "./commands";

export default function CardHeader(props) {
    const {title, editable} = props

    return (
        <header className='card header'>
            <Title cardName={title}/>
            <Commands editable={editable}/>
        </header>
    )
}