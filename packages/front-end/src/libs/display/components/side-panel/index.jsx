import React, {useState} from 'react'
import {connect} from 'react-redux'
import {requiredId} from '../../helpers/validation'
import './side-panel.css'
import {BackDrop} from '../backdrop'
import {toggleBackdrop} from '../../helpers/toggle-backdrop'
import {closeSidePanel} from '../../actions/side-panel.actions'

const mapStateToProps = state => ({
    activeId: state.display.sidePanel.activeId,
    backdrop: state.display.backdrop,
})
const mapDispatchToProps = dispatch => ({
    closePanel: () => dispatch(closeSidePanel()),
})

function SidePanel(props) {
    const {id, activeId, children} = props
    requiredId(id)
    toggleBackdrop(props.backdrop)

    if (!activeId || id !== activeId) return <></>

    const [displaying, toggle] = useState('on')
    const transition = displaying === 'on' ? 'side-bar-transition' : ''

    return (
        <>
            <aside id={'side-panel'} className={`${displaying} ${transition}`}>
                <div className={'content'}>{children}</div>
            </aside>
            <BackDrop className={displaying} closeFn={props.closePanel} />
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
