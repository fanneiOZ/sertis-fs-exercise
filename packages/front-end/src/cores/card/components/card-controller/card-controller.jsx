import React from 'react'
import {connect} from 'react-redux'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {deleteCard} from '../../actions/delete-cards.action'
import './card-controller.css'

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch(deleteCard(id)),
    edit: id => dispatch()
})

function CardController(props) {
    const {id} = props

    return (
        <div className={'control-card-buttons'}>
            <EditOutlined className={'edit-card-icon'} onClick={() => props.edit(id)}/>
            <DeleteOutlined className={'delete-card-icon'} onClick={() => props.delete(id)}/>
        </div>
    )
}

export default React.memo(connect(undefined, mapDispatchToProps)(CardController))
