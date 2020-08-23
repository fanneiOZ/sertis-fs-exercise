import React from 'react'
import Modal from '../../../display/components/dialog'

export function LoginForm(props) {
    return (
        <>
            <Modal id={'login-dialog'}>
                <div id='modal-header'>Login</div>
                <div id='modal-content'>Content</div>
            </Modal>
        </>
    )
}
