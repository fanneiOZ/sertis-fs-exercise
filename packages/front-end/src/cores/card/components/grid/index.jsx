import React from 'react'
import {connect} from 'react-redux'
import CardBlock from '../block'
import './grid.css'
import {Empty} from './empty'

const mapStateToProps = state => ({
    cards: state.card.cards,
})

function CardGrid(props) {
    const {cards} = props

    return (
        <div className={'card-grid'}>
            {cards.length === 0 ? <Empty /> : cards.map(card => <CardBlock key={card.id} data={card} />)}
        </div>
    )
}

export default connect(mapStateToProps)(CardGrid)
