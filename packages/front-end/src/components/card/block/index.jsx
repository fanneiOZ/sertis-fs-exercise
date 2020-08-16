import React from 'react'
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";

export default function CardBlock(props) {
    const {cardInfo, editable} = props
    const {id, name, content, author} = cardInfo

    return(
        <article className='cardBlock' key={id}>
            <CardHeader title={name} editable={editable}/>
            <CardBody content={content} />
            <CardFooter author={author} />
        </article>
    )
}