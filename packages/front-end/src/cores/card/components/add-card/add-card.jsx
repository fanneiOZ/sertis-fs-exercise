import React from 'react'
import './add-card.css'
import Dialog from '../../../../libs/display/components/dialog'

export function AddCardComponent(props) {
    return (
        <Dialog id={'add-new-card'}>
            {/*<div id={'modal-header'}>Add new card</div>*/}
            Add card
        </Dialog>
    )
}
