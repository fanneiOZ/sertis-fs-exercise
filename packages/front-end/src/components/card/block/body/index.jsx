import React from 'react'
import {Content} from "./content";

export default function CardBody(props) {
    const {content} = props

    return (
        <div className='card body'>
            <Content content={content} />
        </div>
    )
}