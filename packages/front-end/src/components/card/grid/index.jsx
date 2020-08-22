import React from 'react'
import {connect} from "react-redux";
import CardBlock from "../block";
import './grid.css'

const mapStateToProps = state => ({
    cards: state.app.cards
})

function CardGrid(props) {
    const {cards} = props

    return (
        <div className={'card-grid'}>
            {cards.map(card => <CardBlock key={card.id} data={card}/>)}
        </div>
    )
}

export default connect(mapStateToProps)(CardGrid)