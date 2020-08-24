import React from 'react'
import './dialog.css'
import {connect} from 'react-redux'
import {extractChildren} from '../../helpers/extract-children'
import {requiredId} from '../../helpers/validation'
import {BackDrop} from '../backdrop'
import {closeDialog} from '../../actions/dialog.actions'
import {toggleBackdrop} from '../../helpers/toggle-backdrop'

const mapStateToProps = state => ({
    activeId: state.display.modal.activeId,
    backdrop: state.display.backdrop,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeDialog()),
})

function Dialog(props) {
    const {id, activeId, children, modalTriggered} = props
    requiredId(id)
    toggleBackdrop(props.backdrop)

    if (!activeId || id !== activeId) return <></>

    const content = children ? extractChildren('content', children) : undefined
    const header = children ? extractChildren('header', children) : undefined
    const footer = children ? extractChildren('footer', children) : undefined

    return (
        <>
            <div id={'untitled-modal'} className={`on ${modalTriggered}`}>
                <header>{header}</header>
                <article>{content}</article>
                <footer>
                    {footer}
                    <nav>
                        <span id='ok-btn' onClick={() => props.closeModal()} />
                    </nav>
                </footer>
            </div>
            <BackDrop displaying={'on'} closeFn={props.closeModal} />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
