import React from 'react'
import './block.css'
import {connect} from 'react-redux'
import CardController from '../card-controller/card-controller'
import { getCurrentUser } from "../../../authentication/helpers/session";

const mapDispatchToProps = dispatch => ({})

function CardBlock(props) {
    const {data} = props
    const isAuthor = data.author.id === getCurrentUser().id

    return (
        <>
            <div className={'card-block'}>
                <header>
                    <h5 className={'card-category'}>
                        <span>{data.category.name.toUpperCase()}</span>
                    </h5>
                    <h3 className={'title'}>{data.name}</h3>
                </header>
                <article>{data.content}</article>
                <footer>
                    <nav>{data.footer}</nav>
                </footer>
                {isAuthor ? <CardController id={data.id} style={{position: 'relative', left: '-10px'}} /> : undefined}
            </div>
        </>
    )
}

export default React.memo(connect(undefined, mapDispatchToProps)(CardBlock))
