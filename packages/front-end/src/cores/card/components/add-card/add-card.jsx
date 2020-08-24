import React, {useState} from 'react'
import './add-card.css'
import Dialog from '../../../../libs/display/components/dialog'
import {TextBox} from '../../../../libs/form/components/text-box'
import {connect} from 'react-redux'
import {closeDialog} from '../../../../libs/display/actions/dialog.actions'
import {addCard} from '../../actions/add-card.action'

const mapDispatchToProps = dispatch => ({
    close: id => dispatch(closeDialog(id)),
    submitCard: card => dispatch(addCard(card)),
})

function AddCardComponent(props) {
    const id = 'add-new-card'
    const [cardName, setName] = useState(undefined)
    const [categoryName, setCategory] = useState(undefined)
    const [content, setContent] = useState(undefined)

    function handleSubmit(e) {
        e.preventDefault()
        if (!(cardName && categoryName && content)) return

        props.submitCard({
            name: cardName,
            categoryName,
            content,
        })
    }

    return (
        <Dialog id={id}>
            {/*<div id={'modal-header'}>Add new card</div>*/}
            Add card
            <form id={id} onSubmit={handleSubmit}>
                <TextBox id={'cardName'} placeholder={'What is your thought?'} hook={setName} />
                <TextBox id={'categoryName'} placeholder={'What is it about?'} hook={setCategory} />
                <TextBox id={'content'} placeholder={'Explain us further ...'} hook={setContent} />
                <div style={{display: 'flex', alignContent: 'flex-end'}}>
                    <input type='button' value={'cancel'} onClick={e => props.close(id)} />
                    <input type='submit' value={'post'} />
                </div>
            </form>
        </Dialog>
    )
}

export default connect(undefined, mapDispatchToProps)(AddCardComponent)
