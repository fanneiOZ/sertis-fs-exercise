import React from 'react'
import CardBlock from "./block";

export const CardList = props => {
    const {list} = props
    const cards = Array.from(list)
        .map(card => (<CardBlock key={card.info.id}
                                 cardInfo={card.info}
                                 editable={card.editable}
            />
        ))

    return (
        <div className='cardList'>
            {cards}
        </div>
    )
}