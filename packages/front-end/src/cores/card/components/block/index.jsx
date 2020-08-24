import React from 'react'
import './block.css'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => ({})

function CardBlock(props) {
    const {data} = props

    return (
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
        </div>
    )
}

export default connect(undefined, mapDispatchToProps)(CardBlock)
