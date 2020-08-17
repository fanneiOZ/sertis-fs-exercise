import React from 'react'
import CardBlock from "./block";
import {Button, Col, Empty, Row} from 'antd'
import {FETCH_CARDS, OPEN_EDITOR} from "../../constants/action-types";
import {connect} from "react-redux";
import {fetchCards} from "../../services/card.service";

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    cards: state.cards,
})

const mapDispatchToProps = dispatch => ({
    openEditor: () =>
        dispatch({type: OPEN_EDITOR}),
    fetchCards: cards =>
        dispatch({type: FETCH_CARDS, payload: {cards}}),
})

function CardGrid(props) {
    fetchCards(props.currentUser?.id ?? '')
        .then(data => {
            props.fetchCards(data)
        })

    const cards = props.cards.map(card => (
        <CardBlock key={card.info.id}
                   cardInfo={card.info}
                   editable={card.editable}
        />
    ))

    if (!cards?.length) {
        const emptyDescription = (
            <span>
                No blog entry ...
            </span>
        )
        const createButton = (
            <Button type="primary" onClick={() => props.openEditor()}>Create New</Button>
        )

        return (
            <Empty description={emptyDescription}>
                {props.currentUser ? createButton : ''}
            </Empty>
        )
    }

    return (
        <div className='cardList'>
            {divideBlock(cards)}
        </div>
    )
}

function divideBlock(cards, totalCols = 3) {
    const columnedCards = cards
        .map(
            (card, index) =>
                (
                    <Col key={index.toString()} span={24 / totalCols}>
                        {card}
                    </Col>
                )
        )

    const totalRows = Math.ceil(cards.length / totalCols)
    const cardGrid = []

    for (let i = 0; i < totalRows; i++) {
        const row = (
            <Row key={i.toString()} gutter={[8, 8]}>
                {columnedCards[i * totalCols]}
                {columnedCards[i * totalCols + 1]}
                {columnedCards[i * totalCols + 2]}
            </Row>
        )

        cardGrid.push(row)
    }

    return cardGrid
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
