import React from 'react'
import {AuthorInfo} from "./author-info";

export default function CardFooter(props) {
    const {author} = props

    return (
        <footer className='card footer'>
            <AuthorInfo author={author} />
        </footer>
    )
}